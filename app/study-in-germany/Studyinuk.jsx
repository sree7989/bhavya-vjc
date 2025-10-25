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
    name: "TUM – Technical University of Munich",
    undergraduate: "Free or €250/semester",
    postgraduate: "Free or €250/semester",
    image: "/germany-best-university-TUM.jpg",
    description: "TUM is Germany’s top-ranked technical university, known for innovation in engineering, science, and technology. It offers research-driven programs and strong ties with global industries."
  },
  {
    name: "LMU – Ludwig Maximilian University of Munich",
    undergraduate: "Free (Semester fees apply)",
    postgraduate: "Free (Semester fees apply)",
    image: "/Ludwig-Maximilian-University-of-Munich-germany.jpeg",
    description: "LMU is one of Europe’s leading academic and research institutions with a long tradition of excellence in humanities, medicine, and science."
  },
  {
    name: "Heidelberg University",
    undergraduate: "Approx. €1500/semester (non-EU)",
    postgraduate: "Approx. €1500/semester (non-EU)",
    image: "/Universität-Heidelberg-best-university-germany.webp",
    description: "Germany’s oldest university, known for its excellence in research and interdisciplinary programs in medicine, law, and natural sciences."
  },
  {
    name: "Humboldt University of Berlin",
    undergraduate: "Free (Semester contribution required)",
    postgraduate: "Free (Semester contribution required)",
    image: "/berlin-humboldt-universities-best-study-in-germany.jpg",
    description: "Humboldt is a prestigious institution in Berlin, celebrated for academic freedom, critical thinking, and excellence in arts, humanities, and social sciences."
  },
  {
    name: "University of Bonn",
    undergraduate: "Free (Semester fee ~€300)",
    postgraduate: "Free (Semester fee ~€300)",
    image: "/university-of-bonn-best-in-germany.jpeg",
    description: "An elite research university known for economics, math, neuroscience, and political science. Bonn combines tradition with innovation."
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
        <h2 className="text-2xl font-bold text-blue-900">More About Germany Universities</h2>
        
      </section>
    </>
  );
};

export default UKUniversities;
