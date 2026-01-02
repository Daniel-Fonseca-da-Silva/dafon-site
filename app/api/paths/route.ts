import { NextRequest, NextResponse } from "next/server";
import {
  getAllPaths,
  getPathsBySection,
  getPathByUrl,
  getSitemapPaths,
  generateDynamicPaths,
  type SitePath,
} from "@/lib/paths";

/**
 * GET /api/paths
 * Returns all paths dynamically
 * 
 * Query parameters:
 * - section: Filter by section (home, about, locations, projects, contact, api)
 * - format: Response format (json, sitemap)
 * - includeApi: Include API paths (default: false)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const section = searchParams.get("section");
    const format = searchParams.get("format") || "json";
    const includeApi = searchParams.get("includeApi") === "true";
    const url = searchParams.get("url");

    let paths: SitePath[];

    // Filter by URL if provided
    if (url) {
      const path = getPathByUrl(url);
      if (!path) {
        return NextResponse.json(
          { error: "Path not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ path }, { status: 200 });
    }

    // Filter by section if provided
    if (section) {
      paths = getPathsBySection(section);
    } else {
      // Get all paths or sitemap paths
      paths = includeApi ? getAllPaths() : getSitemapPaths();
    }

    // Generate dynamic paths (can be extended to fetch from database)
    const dynamicPaths = await generateDynamicPaths();
    
    // Merge static and dynamic paths, avoiding duplicates
    const allPaths = [...paths];
    dynamicPaths.forEach((dynamicPath) => {
      if (!allPaths.find((p) => p.path === dynamicPath.path)) {
        allPaths.push(dynamicPath);
      }
    });

    // Return in requested format
    if (format === "sitemap") {
      const sitemap = allPaths.map((path) => ({
        url: path.url,
        lastModified: path.lastModified || new Date().toISOString(),
        changeFrequency: path.changeFrequency,
        priority: path.priority,
      }));

      return NextResponse.json(
        {
          sitemap,
          total: sitemap.length,
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Default JSON format
    return NextResponse.json(
      {
        paths: allPaths,
        total: allPaths.length,
        sections: {
          home: getPathsBySection("home").length,
          about: getPathsBySection("about").length,
          locations: getPathsBySection("locations").length,
          partners: getPathsBySection("partners")?.length || 0,
          projects: getPathsBySection("projects").length,
          contact: getPathsBySection("contact").length,
          api: includeApi ? getPathsBySection("api").length : 0,
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error generating paths:", error);
    return NextResponse.json(
      {
        error: "Failed to generate paths",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

