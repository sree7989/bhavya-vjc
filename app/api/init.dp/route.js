import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    
    await sql`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        summary TEXT,
        image TEXT,
        tag TEXT,
        time TEXT,
        read_time TEXT,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    return NextResponse.json({ message: 'Database table created successfully!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
