import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
 
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
 
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
 
    // Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
 
    // Generate a safe unique filename
    const timestamp = Date.now();
    const safeFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const fileName = `${timestamp}-${safeFileName}`;
 
    // Try local storage first (for localhost)
    try {
      const uploadDir = path.join(process.cwd(), "public/uploads");
      await fs.promises.mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, fileName);
      await fs.promises.writeFile(filePath, buffer);
      return NextResponse.json({ url: `/uploads/${fileName}` });
    } catch (localError) {
      // If local storage fails (on Vercel), use /tmp
      const tmpDir = "/tmp/uploads";
      await fs.promises.mkdir(tmpDir, { recursive: true });
      const tmpPath = path.join(tmpDir, fileName);
      await fs.promises.writeFile(tmpPath, buffer);
     
      // Convert to base64 for embedding
      const base64 = buffer.toString('base64');
      const mimeType = file.type || 'image/jpeg';
      const dataUrl = `data:${mimeType};base64,${base64}`;
     
      return NextResponse.json({ url: dataUrl });
    }
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
 
 