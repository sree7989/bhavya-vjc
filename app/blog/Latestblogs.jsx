'use client';
import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';
import { useState, useEffect } from 'react';

const blogs = [
  {
    id: 1,
    title: 'Student Visas Made Easy with VJC Overseas',
    description: 'Turn your study abroad dream into reality with expert student visa guidance and support from VJC.',
    image: '/greeceimg.png',
  },
  {
    id: 2,
    title: 'Simplifying Your Visa Process with VJC Experts',
    description: 'Get hassle-free visa services and personalized support for your migration dreams with VJC Overseas.',
    image: '/b2.webp',
  },
  {
    id: 3,
    title: 'Work Visa Opportunities: Build Your Career Abroad',
    description: 'Explore the latest global work visa options and start your international career with VJC Overseas.',
    image: '/women2.avif',
  },
  {
    id: 4,
    title: 'Global Education Trends and Opportunities',
    description: 'Stay updated with the latest trends in global education and find your ideal study destination.',
    image: '/education.webp',
  },
  {
    id: 5,
    title: 'How to Prepare for Your Visa Interview',
    description: 'Tips and strategies to confidently ace your visa interview and get approved quickly.',
    image: '/interview.avif',
  },
  {
    id: 6,
    title: 'Work and Study Visa Combinations Explained',
    description: 'Learn about visas that allow you to work while studying abroad for a better experience.',
    image: '/workstudy.avif',
  },
];

const VISIBLE_COUNT = 3;
const SLIDE_INTERVAL = 3500;
const TRANSITION_DURATION = 600;

export default function LatestBlog() {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);
  const [animating, setAnimating] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setAnimating(false);
        setVisibleIndices((oldIndices) => {
          let nextIndex = (oldIndices[oldIndices.length - 1] + 1) % blogs.length;
          return [...oldIndices.slice(1), nextIndex];
        });
        setCycleCount((prev) => prev + 1);
      }, TRANSITION_DURATION);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white px-4 ">
      <h2 className="md:ml-11 text-4xl bg-gradient-to-r from-black via-orange-500 to-orange-500 bg-clip-text text-transparent mb-12">
        Latest Blogs
      </h2>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left Image & Overlay Text */}
        <div className="relative w-full lg:w-2/3 pr-0 lg:pr-8 mb-10 lg:mb-0">
          <Image
            src="/blogpageimg.avif"
            alt="Consultation"
            width={700}
            height={900}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 text-black rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Visa & Immigration Experts
            </h2>
            <ul className="space-y-3 text-lg lg:text-xl list-disc pl-5 max-w-xl">
              <li>Expert guidance for Study, Work, and PR Visas</li>
              <li>Personalized support for your migration journey</li>
              <li>Latest visa updates and eligibility checks</li>
              <li>Trusted consultants with global experience</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Animated Blog Cards */}
        <div
          className="w-full lg:w-[700px] relative overflow-hidden"
          style={{ height: VISIBLE_COUNT * 140 + VISIBLE_COUNT * 32 }}
        >
          <div className="relative w-full h-full">
            {visibleIndices.map((blogIndex, position) => {
              const blog = blogs[blogIndex];
              const slideAmount = 172;
              let translateY = position * slideAmount;

              if (animating) {
                if (position === visibleIndices.length - 1) {
                  translateY = slideAmount;
                } else {
                  translateY = position * slideAmount - slideAmount;
                }
              }

              const opacity = animating && position === 0 ? 0 : 1;
              const isCycleEven = cycleCount % 2 === 0;
              const isEvenPosition = position % 2 === 0;
              const zigzagClass = (isCycleEven ? isEvenPosition : !isEvenPosition)
                ? 'ml-auto'
                : 'mr-auto';

              // Unique background and border colors for each card
              const bgColors = [
                'bg-orange-50 border-orange-500 text-orange-900',
                'bg-blue-50 border-blue-500 text-blue-900',
                'bg-green-50 border-green-500 text-green-900',
                'bg-purple-50 border-purple-500 text-purple-900',
                'bg-pink-50 border-pink-500 text-pink-900',
                'bg-yellow-50 border-yellow-500 text-yellow-900',
              ];
              const colorClass = bgColors[blogIndex % bgColors.length];

              return (
                <div
                  key={blog.id + '-' + blogIndex}
                  className={`absolute left-0 right-0 p-3 rounded-lg shadow-md hover:shadow-xl max-w-[360px] w-[95%] border-l-4 ${colorClass} ${zigzagClass}`}
                  style={{
                    height: '160px',
                    boxSizing: 'border-box',
                    marginBottom: '32px',
                    transform: `translateY(${translateY}px)`,
                    transition: `transform ${TRANSITION_DURATION}ms ease, opacity ${TRANSITION_DURATION}ms ease`,
                    opacity,
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="mb-2 text-sm">{blog.description}</p>
                  <Link href="#" className="font-medium underline hover:text-opacity-80">
                    Know More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mt-20 max-w-5xl mx-auto overflow-hidden bg-gray-800 backdrop-blur-md shadow-xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-100">Need help choosing a country or course?</h3>
            <p className="text-gray-100 mt-1">Get expert advice now — it’s free.</p>
          </div>
          <Link href="/assessment">
            <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow-md transition">
              Free Visa Assessment
            </button>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 max-w-6xl mx-auto rounded-xl overflow-hidden">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-xl text-orange-500 mb-2">WANT TO MOVE FORWARD</h2>
          <h1 className="text-3xl text-black font-bold mb-4" style={{ fontFamily: 'cursive' }}>
            Request A Call Back
          </h1>
          <Form />
        </div>

        <div className="w-full md:w-1/2 h-full">
          <Image
            src="/blogimg.png"
            alt="Consultation"
            width={700}
            height={400}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
