'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const destinations = [
  { name: "Europe", image: "/europe-tour.jpg" },
  { name: "USA", image: "/usaimg.webp" },
  { name: "Australia", image: "/australiaimg.jpg" },
  { name: "Canada", image: "/Canada-prince-island.webp" },
  { name: "France", image: "/eiffel-tower-france.webp" },
  { name: "Italy", image: "/italy-tour.jpeg" },
  { name: "Switzerland", image: "/switzerlandtimg.webp" },
  { name: "Dubai", image: "/dubaivisit.avif" },
  { name: "Turkey", image: "/turckey-tour.jpg" },
  { name: "Vietnam", image: "/Vietnam-trips-tour-packages-from-India.jpg" },
  { name: "Malaysia", image: "/Malaysia-Tour-Package.jpg" },
  { name: "Singapore", image: "/singapore-tour-ticketing.jpg" },
  { name: "Greece", image: "/greece1.webp" },
  { name: "Bali", image: "/bali-tour.jpg" },
  { name: "Andaman", image: "/Andaman-and-Nicobar-Islands-Package.jpg" },
  { name: "Thailand", image: "/thailand-tour-packages.jpg" },
  { name: "Philippines", image: "/Philippines-tour.jpg" },
  { name: "Maldives", image: "/Tour-du-lich-maldives.jpg" },
  { name: "Fiji Island", image: "/fiji-island-tour-packages.jpg" },
  { name: "Azerbaijan", image: "/Tourist-Attractions-in-Azerbaijan.png" },
  { name: "Austria", image: "/austriavisit.jpg" },
  { name: "South Africa", image: "/south-africa-tour-packages.jpg" },
  { name: "Japan", image: "/japan-tourist-places.jpg" },
];

export default function ToursPage() {
  const [search, setSearch] = useState('');
  const [firstRowWidth, setFirstRowWidth] = useState(0);
  const [secondRowWidth, setSecondRowWidth] = useState(0);

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Filter destinations case-insensitive
  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // Duplicate filtered list for seamless scroll
  const duplicatedList = [...filtered, ...filtered];

  // Calculate widths on filtered changes
  useEffect(() => {
    if (firstRowRef.current) {
      const children = firstRowRef.current.children;
      let totalWidth = 0;
      for (let i = 0; i < filtered.length; i++) {
        totalWidth += children[i]?.offsetWidth || 0;
        if (i < filtered.length - 1) totalWidth += 16; // gap-4 = 16px
      }
      setFirstRowWidth(totalWidth);
    }
    if (secondRowRef.current) {
      const children = secondRowRef.current.children;
      let totalWidth = 0;
      for (let i = 0; i < filtered.length; i++) {
        totalWidth += children[i]?.offsetWidth || 0;
        if (i < filtered.length - 1) totalWidth += 16;
      }
      setSecondRowWidth(totalWidth);
    }
  }, [filtered]);

  return (
    <div className="bg-white p-6 pt-6 pb-2 space-y-4">
      <div className="text-center">
        <input
          type="text"
          placeholder="Search Destination..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-lg w-full max-w-md"
        />
      </div>

      {/* Row 1: scroll left */}
      <div className="overflow-hidden whitespace-nowrap leading-none group">
        <div
          ref={firstRowRef}
          className="flex gap-4 w-max"
          style={{
            animation: firstRowWidth
              ? `marqueeLeft 50s linear infinite`
              : 'none',
            animationPlayState: 'running',
          }}
        >
          {duplicatedList.map((item, i) => (
            <Link
              key={`first-${i}`}
              href={`/tours-ticketing/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="min-w-[180px] h-[200px] rounded-lg shadow-lg bg-center bg-cover relative flex items-end justify-center text-white font-bold text-lg p-2 flex-shrink-0"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
              <span className="relative z-10 drop-shadow-lg">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2: scroll right */}
      <div className="overflow-hidden whitespace-nowrap leading-none group">
        <div
          ref={secondRowRef}
          className="flex gap-4 w-max"
          style={{
            animation: secondRowWidth
              ? `marqueeRight 60s linear infinite`
              : 'none',
            animationPlayState: 'running',
          }}
        >
          {duplicatedList.map((item, i) => (
            <Link
              key={`second-${i}`}
              href={`/tours-ticketing/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="min-w-[180px] h-[200px] rounded-lg shadow-lg bg-center bg-cover relative flex items-end justify-center text-white font-bold text-lg p-2 flex-shrink-0"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
              <span className="relative z-10 drop-shadow-lg">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover div {
          animation-play-state: paused !important;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${firstRowWidth}px);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-${secondRowWidth}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}