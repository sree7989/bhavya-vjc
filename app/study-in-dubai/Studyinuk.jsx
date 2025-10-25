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
    name: "University of Dubai",
    undergraduate: "AED 45,000 – AED 60,000/year",
    postgraduate: "AED 50,000 – AED 70,000/year",
    image: "/studyindubai/uni1.png",
    description: "University of Dubai is known for its business, IT, and law programs, accredited nationally and internationally."
  },
  {
    name: "Heriot-Watt University Dubai",
    undergraduate: "AED 58,000 – AED 65,000/year",
    postgraduate: "AED 60,000 – AED 70,000/year",
    image: "/studyindubai/uni2.png",
    description: "Heriot-Watt Dubai offers UK degrees in engineering, business, and data science with world-class facilities."
  },
  {
    name: "Manipal Academy of Higher Education, Dubai",
    undergraduate: "AED 35,000 – AED 55,000/year",
    postgraduate: "AED 40,000 – AED 60,000/year",
    image: "/studyindubai/uni3.png",
    description: "Manipal Dubai provides a range of technical and professional programs with a multicultural student community."
  },
  {
    name: "American University in Dubai (AUD)",
    undergraduate: "AED 70,000 – AED 85,000/year",
    postgraduate: "AED 80,000 – AED 100,000/year",
    image: "/studyindubai/uni4.png",
    description: "AUD offers American-style education and has strong ties with businesses and industries in Dubai."
  },
  {
    name: "Middlesex University Dubai",
    undergraduate: "AED 55,000 – AED 65,000/year",
    postgraduate: "AED 60,000 – AED 75,000/year",
    image: "/studyindubai/uni5.png",
    description: "Middlesex Dubai delivers UK curriculum with a strong focus on employability and industry relevance."
  },
  {
    name: "University of Birmingham Dubai",
    undergraduate: "AED 95,000 – AED 105,000/year",
    postgraduate: "AED 100,000 – AED 115,000/year",
    image: "/studyindubai/uni6.png",
    description: "A Russell Group university offering world-class education and facilities in its state-of-the-art Dubai campus."
  },
];

const DubaiUniversities = () => {
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
        <h2 className="text-2xl font-bold text-blue-900">More About Dubai Universities</h2>
        {/* You can add more detailed content here if needed */}
      </section>
    </>
  );
};

export default DubaiUniversities;
