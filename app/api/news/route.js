import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to JSON file in project root
const filePath = path.join(process.cwd(), "news-data.json");

// Utility: read file + auto-clean invalid entries
function readNewsFile() {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([])); // create file if missing
    }
    const data = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(data || "[]");

    // ✅ Clean out empty/bad entries
    return parsed.filter(
      (n) => n && typeof n === "object" && n.title?.trim() && n.slug?.trim()
    );
  } catch (err) {
    console.error("Read error:", err);
    return [];
  }
}

// Utility: write file
function writeNewsFile(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Write error:", err);
  }
}

// GET all news
export async function GET() {
  const newsData = readNewsFile();
  return NextResponse.json(newsData, { status: 200 });
}

// POST add news
export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.title?.trim() || !body.slug?.trim()) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    let newsData = readNewsFile();
    newsData.push(body);
    writeNewsFile(newsData);

    return NextResponse.json(
      { message: "News added", data: body },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT update news by slug
export async function PUT(req) {
  try {
    const body = await req.json();
    const { slug } = body;

    if (!slug?.trim()) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    let newsData = readNewsFile();
    const index = newsData.findIndex((n) => n.slug === slug);

    if (index === -1) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    newsData[index] = body; // overwrite
    writeNewsFile(newsData);

    return NextResponse.json(
      { message: "Updated successfully", data: newsData[index] },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE news by slug (also removes empties)
export async function DELETE(req) {
  try {
    const { slug } = await req.json();

    let newsData = readNewsFile();

    if (slug?.trim()) {
      // Normal delete by slug
      newsData = newsData.filter((n) => n.slug !== slug);
    } else {
      // ✅ If no slug, remove ALL invalid/empty ones
      newsData = newsData.filter(
        (n) => n.title?.trim() && n.slug?.trim()
      );
    }

    writeNewsFile(newsData);

    return NextResponse.json(
      { message: "Deleted successfully", data: newsData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
