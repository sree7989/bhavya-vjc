import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "jobs.json");

// GET all jobs
export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return new Response(data, { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
}

// POST add a new job
export async function POST(req) {
  try {
    const newJob = await req.json();
    const data = await fs.readFile(filePath, "utf8");
    const jobs = JSON.parse(data || "[]");

    // ensure each job has unique id
    newJob.id = newJob.id || Date.now().toString();

    jobs.push(newJob);

    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2));
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// PUT edit/update a job
export async function PUT(req) {
  try {
    const updatedJob = await req.json();
    const data = await fs.readFile(filePath, "utf8");
    let jobs = JSON.parse(data || "[]");

    const index = jobs.findIndex((job) => job.id === updatedJob.id);
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Job not found" }), { status: 404 });
    }

    jobs[index] = { ...jobs[index], ...updatedJob };

    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2));
    return new Response(JSON.stringify(jobs[index]), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// DELETE a job
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await fs.readFile(filePath, "utf8");
    let jobs = JSON.parse(data || "[]");

    jobs = jobs.filter((job) => job.id !== id);

    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
