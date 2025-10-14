import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "visas.json");

// Read visas from JSON file
async function readVisas() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write visas to JSON file
async function writeVisas(visas) {
  await fs.writeFile(DATA_PATH, JSON.stringify(visas, null, 2), "utf-8");
}

// GET: Return all visas
export async function GET() {
  const visas = await readVisas();
  return NextResponse.json(visas);
}

// POST: Add a new visa (supports metaTitle, metaDescription, metaKeywords, etc.)
export async function POST(req) {
  const visa = await req.json();
  const visas = await readVisas();
  visas.push(visa);
  await writeVisas(visas);
  return NextResponse.json({ message: "Visa added", visas });
}

// PUT: Update a visa by index
export async function PUT(req) {
  const { index, visa } = await req.json();
  const visas = await readVisas();
  if (visas[index]) {
    visas[index] = visa;
    await writeVisas(visas);
    return NextResponse.json({ message: "Visa updated", visas });
  } else {
    return NextResponse.json({ message: "Visa not found", visas }, { status: 404 });
  }
}

// DELETE: Remove a visa by index
export async function DELETE(req) {
  const { index } = await req.json();
  const visas = await readVisas();
  if (visas[index]) {
    visas.splice(index, 1);
    await writeVisas(visas);
    return NextResponse.json({ message: "Visa deleted", visas });
  } else {
    return NextResponse.json({ message: "Visa not found", visas }, { status: 404 });
  }
}