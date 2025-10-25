import newsData from "../../../news-data.json";
import NewsArticleClient from "./NewsArticleClient";

// ✅ Slugify function (inline to avoid import issues)
function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// ✅ Helper: read dynamic news-data.json (CLIENT-SIDE SAFE)
function getDynamicNews() {
  try {
    return newsData;
  } catch (err) {
    console.error("Error reading news-data.json:", err);
  }
  return [];
}

// ✅ Get all news (only dynamic now, no static)
function getAllNews() {
  const dynamicNews = getDynamicNews();
  return dynamicNews;
}

// ✅ Generate dynamic static paths
export function generateStaticParams() {
  const allNews = getAllNews();
  return allNews.map((item) => ({ slug: slugify(item.title) }));
}

// ✅ Dynamic meta based on slug/title
export function generateMetadata({ params }) {
  const { slug } = params;
  const allNews = getAllNews();
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
export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const allNews = getAllNews();

  const story = allNews.find((n) => slugify(n.title) === slug) || allNews[0];
  const otherStories = allNews.filter((n) => slugify(n.title) !== slug);

  return <NewsArticleClient story={story} otherStories={otherStories} />;
}
