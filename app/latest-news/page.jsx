'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { allNews as staticNews } from './news-data';
import slugify from './slugify';
import Form from './Form';

// ✅ Fetch from API (news-data.json)
const fetchNewData = async () => {
  try {
    const res = await fetch('/api/news', { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error('Error loading new-data.json:', err);
    return [];
  }
};

function NewsTickerBar({ news }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (news.length === 0) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [news.length]);

  if (news.length === 0) return null;

  return (
    <div className="w-full flex justify-center px-2 z-10 mt-20 relative">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg border border-[#dbeafe] bg-white mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1681c4] text-white font-semibold text-base rounded-t-2xl">
          <Image src="/LOGO-VJC.png" alt="VJC Overseas Logo" width={38} height={38} className="h-9 w-9 rounded shadow border-2 border-[#ff9000] bg-white" />
          <span className="text-lg font-bold tracking-wide">Latest Headlines</span>
        </div>
        <div className="relative h-20 bg-white">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex items-center px-6"
            >
              <Link href={`/latest-news/${slugify(news[active].title)}`}>
                <div className="flex gap-3 items-center cursor-pointer w-full hover:bg-gray-50 rounded-lg transition">
                  <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-lg border bg-gray-100">
                    <Image src={news[active].image} alt={news[active].title} width={48} height={48} className="object-cover w-12 h-12" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400">{news[active].tag} &middot; {news[active].time} &middot; {news[active].readTime}</div>
                    <div className="font-semibold text-[#1681c4] text-base truncate">{news[active].title}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 py-2 bg-gray-50">
          {news.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${active === idx ? 'bg-[#1681c4]' : 'bg-gray-300'} transition`}
              onClick={() => setActive(idx)}
              aria-label={`Show news ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LatestNewsMagazine() {
  const [dynamicNews, setDynamicNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    (async () => {
      const jsonNews = await fetchNewData();
      if (jsonNews.length > 0) setDynamicNews(jsonNews);
    })();
  }, []);

  // ✅ Only static for everything except "Latest Global Immigration Updates"
  const mainStory = staticNews[0] || {};
  const nextStories = staticNews.slice(1, 5);
  const visaNews = staticNews.slice(5, 9);
  const tickerNews = staticNews.slice(5, 9);

  // ✅ Combined static + dynamic for "Latest Global Immigration Updates"
  const immigrationUpdates = [...dynamicNews, ...staticNews];

  const hasMore = visibleCount < immigrationUpdates.length;
  const showMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#f7fafc] to-white">
      {/* 🔥 News Ticker */}
      <NewsTickerBar news={tickerNews} />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 w-full pt-6 px-2 md:px-0">
        {/* ✅ Main Story (only static) */}
        <section className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-lg border border-[#dbeafe] overflow-hidden relative">
          <div className="md:w-[340px] flex-shrink-0 relative">
            <Image
              src={mainStory.image}
              alt={mainStory.title}
              width={340}
              height={240}
              className="h-[220px] md:h-full w-full object-cover object-center"
              style={{ minHeight: 200, borderRadius: 0 }}
              unoptimized
            />
          </div>
          <div className="flex-1 px-6 py-7 flex flex-col justify-center">
            <div className="mb-1 text-xs text-gray-400">{mainStory.tag} &middot; {mainStory.time} &middot; {mainStory.readTime}</div>
            <Link href={`/latest-news/${slugify(mainStory.title)}`}>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight hover:text-[#ff9000] transition-colors cursor-pointer">
                {mainStory.title}
              </h1>
            </Link>
            <p className="text-gray-600 text-base mb-3">{mainStory.summary}</p>
            <Link href={`/latest-news/${slugify(mainStory.title)}`}>
              <button className="mt-1 bg-[#1681c4] hover:bg-[#ff9000] text-white text-sm font-semibold px-4 py-2 rounded-full shadow transition">Read Full Story</button>
            </Link>
          </div>
        </section>

        {/* 🔥 Latest Global Immigration Updates (✅ static + dynamic combined) */}
        <div>
          <div className="flex items-center justify-between mb-4 mt-6">
            <h2 className="font-bold text-xl md:text-2xl text-[#1681c4]">Latest Global Immigration Updates</h2>
            <Link href="/latest-news" className="text-[#ff9000] text-sm font-semibold hover:underline">View All</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {immigrationUpdates.slice(0, visibleCount).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/latest-news/${slugify(item.title)}`}
                  className="flex flex-col h-full bg-gradient-to-br from-[#1681c4]/5 to-[#ff9000]/10 rounded-xl shadow-md border border-[#dbeafe] hover:shadow-xl transition group overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={150}
                      className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <span className="absolute top-2 right-2 bg-white text-[#1681c4] px-2 py-0.5 rounded text-xs font-semibold shadow border border-[#1681c4]">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-3 py-2 bg-white min-h-[160px] max-h-[180px]">
                    <div>
                      <div className="font-semibold text-base mb-1 group-hover:text-[#1681c4] transition">{item.title}</div>
                      <p className="text-xs text-gray-500 mb-1 line-clamp-2">{item.summary}</p>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-400">{item.time} &middot; {item.readTime}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less */}
          <div className="flex justify-center mt-6">
            {visibleCount < immigrationUpdates.length ? (
              <button
                onClick={showMore}
                className="px-5 py-2 bg-[#1681c4] text-white text-sm font-medium rounded hover:bg-[#0f5e91] transition"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(4)}
                className="px-5 py-2 bg-[#ff9000] text-white text-sm font-medium rounded hover:bg-[#e07d00] transition"
              >
                Show Less
              </button>
            )}
          </div>
        </div>

        {/* More Top Stories (only static) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-xl md:text-2xl text-[#1681c4]">More Top Stories</h2>
            <Link href="/latest-news" className="text-[#ff9000] text-sm font-semibold hover:underline">See all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {nextStories.map((story, i) => (
              <Link
                href={`/latest-news/${slugify(story.title)}`}
                key={i}
                className="flex flex-col bg-white rounded-xl shadow border border-[#dbeafe] hover:shadow-md transition group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={400}
                    height={150}
                    className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <span className="absolute bottom-2 left-2 bg-[#1681c4] text-white px-2 py-0.5 rounded text-xs font-semibold shadow">{story.tag}</span>
                </div>
                <div className="flex-1 flex flex-col px-3 py-2">
                  <div className="font-semibold text-base mb-1 group-hover:text-[#1681c4] transition">{story.title}</div>
                  <div className="flex gap-2 text-xs text-gray-400 mt-auto">{story.time} &middot; {story.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Visa News (only static) */}
        <div>
          <div className="flex items-center justify-between mb-4 mt-4">
            <h2 className="font-bold text-xl md:text-2xl text-[#1681c4]">Visa & Immigration Updates</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {visaNews.map((item, i) => (
              <Link
                href={`/latest-news/${slugify(item.title)}`}
                key={i}
                className="flex flex-col bg-white rounded-xl shadow border border-[#dbeafe] hover:shadow-md transition group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={150}
                    className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <span className="absolute bottom-2 left-2 bg-[#1681c4] text-white px-2 py-0.5 rounded text-xs font-semibold shadow">{item.tag}</span>
                </div>
                <div className="flex-1 flex flex-col px-3 py-2">
                  <div className="font-semibold text-base mb-1 group-hover:text-[#1681c4] transition">{item.title}</div>
                  <div className="text-xs text-gray-500 mb-1">{item.summary}</div>
                  <div className="flex gap-2 text-xs text-gray-400 mt-auto">{item.time} &middot; {item.readTime}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Form & Why Choose Us */}
      <div className="max-w-5xl mx-auto my-12 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6">
            <Form />
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#1681c4]/10 to-[#ff9000]/10 rounded-2xl shadow border border-[#dbeafe]">
            <Image
              src="/LOGO-VJC.png"
              alt="Start Your Journey"
              width={180}
              height={180}
              className="mb-4"
              unoptimized
            />
            <h4 className="text-2xl font-bold mb-3 text-[#1681c4]">Why Choose VJC Overseas?</h4>
            <p className="text-gray-600 text-base mb-4 text-center">
              At VJC Overseas, we pride ourselves on delivering a 100% transparent process led by experienced visa experts who guide you every step of the way. Our team offers fast and reliable service, providing personalized counseling tailored to your aspirations and ensuring your journey is smooth from start to finish.
            </p>
            <Link href="/about-us">
              <button className="bg-[#1681c4] hover:bg-[#ff9000] text-white font-semibold px-5 py-2 rounded-full transition">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div
        className="w-full py-10 flex justify-center items-center mt-10 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/Beautiful-Canada-Stanley-Park.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="max-w-3xl w-full px-5 text-center flex flex-col items-center z-10 relative">
          <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow">Ready to Start Your Visa Journey?</h3>
          <p className="text-white text-lg mb-5">
            Book a free, no-obligation consultation with our experienced counselors today and take the first step towards your dream career abroad!
          </p>
          <Link href="/assessment">
            <button className="relative overflow-hidden bg-white text-[#1681c4] font-bold px-8 py-3 rounded-full shadow-lg text-lg border-none outline-none group transition-all duration-200 hover:text-white">
              <span className="relative z-10">Book Free Consultation</span>
              <span className="pointer-events-none absolute inset-0 z-0 transition-all" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
