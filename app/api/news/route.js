import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET all news
export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const news = await sql`SELECT * FROM news ORDER BY created_at DESC`;
    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST add news
export async function POST(req) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = await req.json();
    const { title, slug, summary, image, tag, time, readTime, content } = body;

    if (!title?.trim() || !slug?.trim()) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO news (title, slug, summary, image, tag, time, read_time, content)
      VALUES (${title}, ${slug}, ${summary || ''}, ${image || ''}, ${tag || ''}, ${time || ''}, ${readTime || ''}, ${content || ''})
      RETURNING *
    `;

    return NextResponse.json(
      { message: 'News added', data: result[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT update news by slug
export async function PUT(req) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const body = await req.json();
    const { slug, title, summary, image, tag, time, readTime, content } = body;

    if (!slug?.trim()) {
      return NextResponse.json({ error: 'Slug required' }, { status: 400 });
    }

    const result = await sql`
      UPDATE news 
      SET title = ${title}, 
          summary = ${summary || ''}, 
          image = ${image || ''}, 
          tag = ${tag || ''}, 
          time = ${time || ''}, 
          read_time = ${readTime || ''}, 
          content = ${content || ''}
      WHERE slug = ${slug}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Updated successfully', data: result[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE news by slug
export async function DELETE(req) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const { slug } = await req.json();

    if (!slug?.trim()) {
      return NextResponse.json({ error: 'Slug required' }, { status: 400 });
    }

    const result = await sql`
      DELETE FROM news WHERE slug = ${slug}
      RETURNING *
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'News not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Deleted successfully', data: result[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
