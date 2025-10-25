'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function WhyStudyMalta() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white pt-0 pb-0 lg:-mt-12 -mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Why Choose Malta for Your Studies?
        </h2>

        {/* Work While Studying + Image */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-10">
          {/* Text Section */}
          <div className="flex-1 text-lg leading-relaxed text-gray-800">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Work While Studying in Malta
            </h3>
            <p className="mb-4">
              International students can work up to <strong>20 hours per week</strong> during term time.
              Many students find part-time jobs in <span className="text-orange-600 font-medium">hospitality, retail,</span> and
              <span className="text-orange-600 font-medium"> tourism</span> sectors—perfect to gain experience and support yourself.
            </p>

            {/* After Graduation */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                After Graduation: Stay and Work in Malta
              </h3>
              <p>
                Graduates can apply for a <strong>temporary residence permit</strong> to seek employment in Malta.
                Skilled professionals are in high demand in fields like
                <span className="text-orange-600 font-medium"> IT, finance, healthcare,</span> and
                <span className="text-orange-600 font-medium"> engineering</span>, offering strong opportunities for a long-term career.
              </p>
            </div>
          </div>

          {/* Image Section with Hover Name */}
          <div className="flex-1 w-full max-w-md relative">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative overflow-hidden "
            >
              <Image
                src="/work-and-settel-in-malta.png"
                alt="Work While Studying in Malta"
                width={600}
                height={400}
                unoptimized
                priority
                className="object-cover w-full h-auto"
              />
              {hovered && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-1 rounded shadow-md transition-all duration-300">
                  Work While Studying in Malta
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Study in Malta Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-900 -mt-8 lg:-mt-14 mb-3">Why Study in Malta</h3>
          <p className="text-lg leading-relaxed text-gray-800">
            Malta is a strategic and promising destination for international students seeking top-quality European education.
            Whether you're pursuing a <strong>bachelor’s, master’s, or diploma</strong> course, Malta combines academic excellence
            with cultural richness and clear pathways to global careers.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-4">
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Let our expert Malta study consultants guide you from application to arrival.
          </p>
      

<div className="w-full flex justify-center mt-4">
  <Link href="/contact-us">
    <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition">
      Contact Us & Start Your Journey 🚀
    </button>
  </Link>
</div>


        </div>
      </div>
    </section>
  );
}
