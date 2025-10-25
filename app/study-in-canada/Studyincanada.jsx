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
    name: "University of Toronto",
    undergraduate: "Approx. CAD 6,100 – 14,180/year (domestic), CAD 58,000+/year (international)",
    postgraduate: "CAD 8,000 – 30,000/year (depending on program)",
    image: "/the-university-of-toronto-university-canada.jpg",
    description: "The University of Toronto is Canada’s top-ranked university, recognized globally for research, innovation, and a diverse range of undergraduate and postgraduate programs in engineering, medicine, business, and humanities."
  },
  {
    name: "University of British Columbia (UBC)",
    undergraduate: "CAD 5,506/year (domestic), CAD 44,000+/year (international)",
    postgraduate: "CAD 8,776 – 40,000/year",
    image: "/Univeresity-of-british-council.jpg",
    description: "UBC is one of Canada’s top research universities, located in Vancouver. It’s renowned for its sustainability research, global partnerships, and outstanding academic environment in arts, sciences, and business."
  },
  {
    name: "McGill University",
    undergraduate: "CAD 7,631/year (domestic), CAD 27,000+/year (international)",
    postgraduate: "CAD 8,000 – 25,000/year",
    image: "/McGill-university-best-in-canada.jpg",
    description: "Located in Montreal, McGill University is known for academic excellence, medical education, and cutting-edge research. It attracts top international students and offers a vibrant multicultural campus experience."
  },
  {
    name: "University of Alberta",
    undergraduate: "CAD 5,692/year (domestic), CAD 29,500+/year (international)",
    postgraduate: "CAD 7,000 – 20,000/year",
    image: "/University-of-Alberta.jpg",
    description: "Based in Edmonton, the University of Alberta is one of Canada’s leading institutions for research and innovation, especially in engineering, science, agriculture, and energy studies."
  },
  {
    name: "Université de Montréal",
    undergraduate: "CAD 4,300/year (domestic), CAD 17,000+/year (international)",
    postgraduate: "CAD 9,000 – 24,000/year",
    image: "/University-of-Montreal.jpg",
    description: "Université de Montréal is the largest French-speaking university in North America, known for research excellence in biomedical sciences, AI, and social sciences. It offers a dynamic and multicultural learning environment."
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
        <h2 className="text-2xl font-bold text-blue-900">More About CANADA Universities</h2>
        
      </section>
    </>
  );
};

export default UKUniversities;
