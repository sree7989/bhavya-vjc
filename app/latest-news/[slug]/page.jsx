import { allNews as staticNews } from "../news-data";
import slugify from "../slugify";
import NewsArticleClient from "./NewsArticleClient";

// ✅ Fetch from API with environment variable
async function getDynamicNews() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/news`, { 
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.error("Error loading news from API:", err);
  }
  return [];
}

// ✅ Merge static + dynamic
async function getAllNews() {
  const dynamicNews = await getDynamicNews();
  return [...dynamicNews, ...staticNews];
}

// ✅ Generate dynamic static paths
export async function generateStaticParams() {
  const allNews = await getAllNews();
  return allNews.map((item) => ({ slug: slugify(item.title) }));
}

// ✅ Dynamic meta based on slug/title
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allNews = await getAllNews();
  const story = allNews.find((n) => slugify(n.title) === slug);

  if (!story) {
    return {
      title: "Latest Visa & Immigration News | VJC Overseas",
      description:
        "Stay updated with global immigration and visa policy changes for Indian aspirants.",
    };
  }

  return {
    title: `${story.title} | VJC Overseas`,
    description:
      story.description ||
      "Get the latest updates on visa changes, migration routes, and PR policies impacting Indian migrants.",
  };
}

// ✅ Page component
export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const allNews = await getAllNews();

  const story = allNews.find((n) => slugify(n.title) === slug) || allNews[0];
  const otherStories = allNews.filter((n) => slugify(n.title) !== slug);

  return <NewsArticleClient story={story} otherStories={otherStories} />;
}
