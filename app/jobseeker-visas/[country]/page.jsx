import Nav from "./Nav";
import Two from "./Two";
import { headers } from "next/headers";

// Fetch visa data from your API or file
async function fetchVisa(slug, host, protocol) {
  const res = await fetch(`${protocol}://${host}/api/visas`, { cache: "no-store" });
  const visas = await res.json();
  return visas.find(v => v.slug === slug);
}

// Next.js Metadata API for SSR meta tags
export async function generateMetadata({ params }) {
  const { country } = params; // ✅ no await here

  const host = headers().get("host");
  const protocol = host.includes("localhost") ? "http" : "https";

  const visa = await fetchVisa(country, host, protocol);

  return {
    title: visa?.metaTitle || visa?.name || "Visa Not Found",
    description:
      visa?.metaDescription || visa?.description || "No visa found for this country",
  };

}

export default async function Page({ params }) {
  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>
      <Two />
    </>
  );
}