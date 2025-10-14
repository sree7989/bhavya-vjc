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
  name: "University of Malta",
  undergraduate: "€8,500 – €12,000/year",
  postgraduate: "€9,500 – €15,000/year",
  image: "/university-of-malta.jpg",
  description: "The University of Malta is the country’s highest educational institution, known for its affordable tuition, English-taught programs, and strong academic support for international students across diverse disciplines."
    },
  {
  name: "Malta College of Arts, Science & Technology",
  undergraduate: "€6,000 – €9,500/year",
  postgraduate: "€7,000 – €11,000/year",
  image: "/Malta-College-of-Arts-Science-Technology.jpg",
  description: "MCAST is Malta’s leading vocational education and training institution, offering practical, industry-focused courses designed to prepare students for real-world careers in technology, health sciences, creative arts, and more."
},
{
  name: "Global College Malta",
  undergraduate: "€6,000 – €9,000/year",
  postgraduate: "€7,000 – €12,000/year",
  image: "/global-college-malta.png",
  description: "Global College Malta is a private higher education institution located in SmartCity. It offers internationally accredited business and management programs designed to prepare students for global careers in leadership and entrepreneurship."
},
{
  name: "American University of Malta",
  undergraduate: "€10,000 – €13,000/year",
  postgraduate: "€12,000 – €15,000/year",
  image: "/american-university-malta.webp",
  description: "The American University of Malta (AUM) is a private, American-style institution located in Cospicua. It focuses on providing high-quality education in areas like business, engineering, and game development, with small class sizes and a strong international student community."
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
  className="w-full lg:w-[35%] h-auto lg:h-full z-20 px-6 sm:px-8 py-6 lg:py-10 flex flex-col justify-center animate-slideDown space-y-4"
>
  <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold text-blue-800 leading-snug">
    {uni.name}
  </h2>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
    <strong>Undergraduate:</strong> {uni.undergraduate}
  </p>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
    <strong>Postgraduate:</strong> {uni.postgraduate}
  </p>

  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
    {uni.description}
  </p>

  <button
    onClick={() => {
      const section = document.getElementById("details-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="mt-5 relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white group border border-orange-500"
  >
    <span className="relative z-10">Know More</span>
    <ArrowRight size={16} className="relative z-10" />
    <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
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
      <section id="details-section" className="w-full bg-white p-0 text-center">
       
        
      </section>
    </>
  );
};

export default UKUniversities;
