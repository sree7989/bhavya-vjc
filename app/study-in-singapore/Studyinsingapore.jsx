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
    name: "National University of Singapore (NUS)",
    undergraduate: "Approx. SGD 17,000 – 20,000/year",
    postgraduate: "Approx. SGD 25,000 – 30,000/year",
    image: "/national-university-singapore.jpg",
    description:
      "NUS is Singapore's premier university, renowned globally for academic excellence, innovation, and interdisciplinary research across science, engineering, business, and law.",
  },
  {
    name: "Nanyang Technological University (NTU)",
    undergraduate: "Approx. SGD 17,000 – 20,000/year",
    postgraduate: "Approx. SGD 25,000 – 30,000/year",
    image: "/nanyang-university-singapore.png",
    description:
      "NTU is one of Asia’s top universities, recognized for cutting-edge research and technology-driven programs in engineering, AI, business, and communication.",
  },
  {
    name: "Singapore Management University (SMU)",
    undergraduate: "Approx. SGD 17,000 – 19,000/year",
    postgraduate: "Approx. SGD 30,000 – 35,000/year",
    image: "/Singapore-management-university.jpg",
    description:
      "SMU offers a dynamic and interactive learning environment with a strong focus on business, finance, economics, and entrepreneurship.",
  },
  {
    name: "Singapore University of Technology and Design (SUTD)",
    undergraduate: "Approx. SGD 19,000/year",
    postgraduate: "Varies by program",
    image: "/singapore-university-of-technology-singapore.jpg",
    description:
      "SUTD, founded in collaboration with MIT, focuses on design, engineering, and architecture. It emphasizes creativity and innovation in education.",
  },
  {
    name: "Singapore University of Social Sciences (SUSS)",
    undergraduate: "Approx. SGD 15,000 – 18,000/year",
    postgraduate: "Approx. SGD 20,000 – 30,000/year",
    image: "/singapore-university-of-sceineces.jpeg", // Assuming you meant SUSS
    description:
      "SUSS specializes in applied social sciences, business, and education, offering flexible, industry-relevant programs for working professionals and fresh graduates.",
  }
];



const UKUniversities = () => {
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

                {/* White Background Layer */}
                <div className="absolute inset-0 bg-white z-0" />

                {/* Diagonally Clipped Image */}
                <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full z-10">
                  <div className="w-full h-full clip-diagonal overflow-hidden relative">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover"
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

        {/* Styles */}
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

      {/* Scroll target section */}
      <section id="details-section" className="w-full bg-white p-10 text-center">
        <h2 className="text-2xl font-bold text-blue-900">More About Singapore Universities</h2>
        
      </section>
    </>
  );
};

export default UKUniversities;
