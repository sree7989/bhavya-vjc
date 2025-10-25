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
  name: "Harvard University",
  undergraduate: "$54,269/year",
  postgraduate: "$50,000 – $70,000/year",
  image: "/harvard-university-campus.jpg",
  description: "Harvard University, located in Cambridge, Massachusetts, is the oldest and one of the most prestigious Ivy League institutions in the world. Known for its academic excellence, world-class faculty, and influential alumni, Harvard offers unmatched opportunities across fields like law, medicine, business, and science. A degree from Harvard signifies global prestige, leadership, and lifelong impact."
},
  {
  name: "Massachusetts Institute of Technology",
  undergraduate: "$53,790/year",
  postgraduate: "$53,790/year",
  image: "/Massachusetts-Institute-of-Technology.jpg",
  description: "MIT is renowned worldwide for its cutting-edge research and innovation in science, engineering, and technology."
},
  {
  name: "Princeton University",
  undergraduate: "$57,410/year",
  postgraduate: "$57,410/year",
  image: "/princeton-university-campus.jpg",
  description: "Princeton University is an Ivy League institution known for its strong focus on undergraduate education, groundbreaking research, and historic campus."
},
{
  name: "Stanford University",
  undergraduate: "$56,169/year",
  postgraduate: "$56,169/year",
  image: "/standford-university-usa.jpg",
  description: "Stanford University is renowned for its entrepreneurial spirit, cutting-edge research, and close ties to Silicon Valley."
},
 {
  name: "California Institute of Technology",
  undergraduate: "$60,864/year",
  postgraduate: "$60,864/year",
  image: "/califorina-institute-of-technology.jpg",
  description: "Caltech is a world leader in science and engineering, known for its small size, rigorous academics, and groundbreaking research."
},
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
        <h2 className="text-2xl font-bold text-blue-900">More About USA Universities</h2>
        
      </section>
    </>
  );
};

export default UKUniversities;
