'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import slugify from '../slugify'; // Adjust the path if your slugify utility is elsewhere
import Form from './Form'; // Adjust if your form is in a different location
export default function NewsArticleClient({ story, otherStories }) {
  // Modal logic
  const [modalOpen, setModalOpen] = useState(false);

  // Infinite auto-scroll logic
  const scrollRef = useRef(null);
  // Duplicate cards for seamless scroll
  const cards = [...otherStories, ...otherStories];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let running = true;
    const speed = 0.7;

    function step() {
      if (!running) return;
      // If scrolled past the first set, reset seamlessly
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      requestAnimationFrame(step);
    }
    const anim = requestAnimationFrame(step);

    // Pause on hover
    const onMouseEnter = () => { running = false; };
    const onMouseLeave = () => { running = true; requestAnimationFrame(step); };
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    // Cleanup
    return () => {
      running = false;
      cancelAnimationFrame(anim);
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [otherStories.length]);

  // Responsive image height
  const mainImageHeight = {
    minHeight: 210, maxHeight: 370,
    width: '100%', objectFit: 'cover', objectPosition: 'center'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0e7ff] via-[#F7F7F9] to-white pt-24 pb-16">
      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-2xl mt-4 mb-8 overflow-hidden border-2 border-[#1681c4] magazine-effect w-full relative">
        <div
          className="relative w-full h-[210px] md:h-[370px] group cursor-pointer overflow-hidden flex items-center justify-center shadow-xl"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            style={mainImageHeight}
            className="object-cover object-center scale-105 transition-all duration-500 group-hover:scale-110"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            unoptimized={story.image.startsWith('http')}
          />
          <span className="absolute top-5 left-5 bg-gradient-to-r from-[#77bc1f] to-[#ff9000] text-white px-6 py-2 rounded-full text-base font-bold shadow-xl z-10">
            {story.tag}
          </span>
          <span className="absolute bottom-4 right-4 bg-[#ffffffcc] px-3 py-1 rounded-full text-xs font-extrabold text-[#1681c4] shadow z-10">
            Click to enlarge
          </span>
        </div>
        <div className="px-6 py-7 flex flex-col justify-center gap-2">
          <div className="flex items-center gap-4 mb-1">
            <span className="uppercase tracking-wide font-bold text-[#1681c4] text-xs">{story.time}</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-[#ff9000] font-black">{story.readTime}</span>
          </div>
          <h1 className="text-[1.65rem] md:text-2xl font-extrabold leading-tight mb-2 magazine-title text-[#1681c4]">{story.title}</h1>
          <p className="text-[#444] text-base font-medium mb-2">{story.summary}</p>
          <div className="prose max-w-none text-[#222] text-base" dangerouslySetInnerHTML={{ __html: story.content }} />
        </div>
      </div>

      {/* Modal for full image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000a] flex items-center justify-center transition-all"
          style={{ backdropFilter: 'blur(2px)' }}
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute top-0 right-0 m-4 z-60">
            <button
              aria-label="Close"
              className="bg-white text-[#ff9000] hover:bg-[#ff9000] hover:text-white rounded-full p-2 shadow-lg text-2xl font-black transition-colors"
              onClick={e => { e.stopPropagation(); setModalOpen(false) }}
            >×</button>
          </div>
          <div className="max-w-[96vw] max-h-[80vh] flex items-center justify-center">
            <Image
              src={story.image}
              alt={story.title}
              width={900}
              height={700}
              className="rounded-2xl border-4 border-[#1681c4] shadow-2xl object-contain max-w-full max-h-[80vh]"
              unoptimized={story.image.startsWith('http')}
              style={{ width: 'auto', height: 'auto', maxWidth: '96vw', maxHeight: '80vh' }}
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Horizontal infinite auto-scroll of other blogs */}
      <div className="max-w-6xl mx-auto px-1 mb-10">
        <h2 className="font-black text-xl mb-4 text-[#1681c4] magazine-title flex items-center gap-2">
          <span className="animate-bounce text-[#ff9000]">🔥</span>
          More Latest Blogs
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2 magazine-scroll scroll-smooth relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {cards.map((item, i) => (
            <Link
              key={i}
              href={`/latest-news/${slugify(item.title)}`}
              className="flex-shrink-0 w-[310px] bg-white/90 rounded-2xl shadow-xl transition-all cursor-pointer group overflow-hidden border border-[#1681c4] hover:-translate-y-1 hover:shadow-2xl relative magazine-card"
              style={{
                boxShadow: i % 2 === 0 ? '0 2px 18px 0 #ffe0e0' : '0 2px 18px 0 #e0f4ff'
              }}
            >
              <div className="relative h-36 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 400px"
                  unoptimized={item.image.startsWith('http')}
                />
                <span className="absolute top-2 left-3 bg-gradient-to-r from-[#1681c4] to-[#ff9000] text-white px-2 py-0.5 rounded-full text-xs font-bold shadow">
                  {item.tag}
                </span>
                <span className="absolute top-2 right-3 text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded-full font-black">{item.time}</span>
              </div>
              <div className="flex-1 flex flex-col px-4 py-2">
                <div className="font-extrabold text-base mb-1 group-hover:text-[#ff9000] transition-colors magazine-title">
                  {item.title}
                </div>
                <div className="text-xs text-[#666] mb-2">{item.summary}</div>
                <div className="flex gap-2 text-xs text-gray-500 mt-auto font-black">
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Magazine accent */}
      <div className="fixed -z-10 top-0 right-0 w-[60vw] h-[100vh] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right top, #ffe0e0 0%, #e0e7ff 60%, transparent 100%)'
        }}
      />
      <style jsx global>{`
        .magazine-title {
          font-family: 'Oswald', 'Montserrat', 'Arial Black', sans-serif;
          letter-spacing: -0.5px;
        }
        .magazine-scroll::-webkit-scrollbar {
          display: none;
        }
        .magazine-scroll {
          scrollbar-width: none;
        }
      `}</style>
        {/* --- The Form and Why Choose Us Section --- */}
      <div className="max-w-6xl mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* The Form */}
          <div className=" p-6">
            <Form />
          </div>
          {/* The Attractive Section */}
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
  At VJC Overseas, we pride ourselves on delivering a 100% transparent process led by experienced visa experts who guide you every step of the way. Our team offers fast and reliable service, providing personalized counseling tailored to your aspirations and ensuring your journey is smooth from start to finish. With a high visa success rate, end-to-end support—including university applications, SOP assistance, and ongoing help even after you arrive—we’ve earned the trust of over 10,000 happy clients. Choose us for honest advice, no hidden charges, and a commitment to making your dream career abroad a reality.
</p>
            <Link href="/about-us">
              <button className="bg-[#1681c4] hover:bg-[#ff9000] text-white font-semibold px-5 py-2 rounded-full transition">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}