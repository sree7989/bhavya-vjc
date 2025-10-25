'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const universities = [
  {
    name: "University of Melbourne",
    undergraduate: "AUD 35,000 – AUD 45,000/year",
    postgraduate: "AUD 37,000 – AUD 50,000/year",
    image: "/studyinaustralia/uni1.png",
    description: "Australia's top-ranked university known for excellence in research and teaching across diverse disciplines."
  },
  {
    name: "Australian National University (ANU)",
    undergraduate: "AUD 36,000 – AUD 48,000/year",
    postgraduate: "AUD 38,000 – AUD 52,000/year",
    image: "/studyinaustralia/uni2.png",
    description: "Located in Canberra, ANU is renowned for its strong programs in politics, law, and science."
  },
  {
    name: "University of Sydney",
    undergraduate: "AUD 38,000 – AUD 50,000/year",
    postgraduate: "AUD 40,000 – AUD 55,000/year",
    image: "/studyinaustralia/uni3.png",
    description: "Australia's first university with world-class facilities and a beautiful historic campus."
  },
  {
    name: "University of Queensland",
    undergraduate: "AUD 32,000 – AUD 45,000/year",
    postgraduate: "AUD 35,000 – AUD 48,000/year",
    image: "/studyinaustralia/uni4.png",
    description: "Leading research institution with particularly strong science, engineering and business programs."
  },
  {
    name: "Monash University",
    undergraduate: "AUD 33,000 – AUD 44,000/year",
    postgraduate: "AUD 36,000 – AUD 47,000/year",
    image: "/studyinaustralia/uni5.png",
    description: "Australia's largest university with innovative teaching and research across multiple campuses."
  },
  {
    name: "University of New South Wales (UNSW)",
    undergraduate: "AUD 36,000 – AUD 48,000/year",
    postgraduate: "AUD 38,000 – AUD 52,000/year",
    image: "/studyinaustralia/uni6.png",
    description: "Global leader in technology, business, and innovation with strong industry connections."
  },
];

const AustraliaUniversities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="w-full h-auto lg:h-[60vh] bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {universities.map((uni, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-auto lg:h-full flex flex-col lg:flex-row bg-white">
                <div className="absolute inset-0 bg-white z-0" />

                {/* Diagonally Clipped Image */}
                <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full z-10">
                  <div className="w-full h-full clip-diagonal overflow-hidden relative">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black opacity-30" />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  key={currentIndex}
                  className="w-full lg:w-[40%] h-auto lg:h-full z-20 px-6 sm:px-8 py-6 lg:py-8 flex flex-col justify-center animate-slideDown space-y-3"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-snug">{uni.name}</h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Undergraduate:</strong> {uni.undergraduate}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Postgraduate:</strong> {uni.postgraduate}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{uni.description}</p>
                  <button
                    onClick={() => {
                      const section = document.getElementById("details-section");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-black bg-white group"
                  >
                    <span className="relative z-10">Know More</span>
                    <ArrowRight size={16} className="relative z-10" />
                    <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.8s ease-out;
          }

          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }

          @media (max-width: 1024px) {
            .clip-diagonal {
              clip-path: none;
            }
          }
        `}</style>
      </section>

      <section id="details-section" className="w-full bg-white p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-900">More About Australian Universities</h2>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
          Australian universities are globally recognized for their high-quality education, innovative research, 
          and multicultural environments. With seven universities consistently ranked in the top 100 worldwide, 
          Australia offers internationally recognized degrees, post-study work opportunities, and a high standard 
          of living for international students.
        </p>
      </section>
    </>
  );
};

export default AustraliaUniversities;