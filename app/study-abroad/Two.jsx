"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Form from "./Form"; // Adjust path if needed

const visaData = [
  { name: "Study in USA", path: "/study-abroad/usa", image: "/usa1.jpg" },
  { name: "Study in Uk", path: "/study-abroad/uk", image: "/uk1.webp" },
  { name: "Study in Canada", path: "/study-abroad/canada", image: "/canada1.jpg" },
  { name: "Study in Australia", path: "/study-abroad/australia", image: "/study-in-australia-flag.jpg" },
  { name: "Study in Germany", path: "/study-abroad/germany", image: "/germany.jpg" },
  { name: "Study in Italy", path: "/study-abroad/italy", image: "/itlay.jpg" },
  { name: "Study in France", path: "/study-abroad/france", image: "/france.jpg" },
  { name: "Study in Singapore", path: "/study-abroad/singapore", image: "/singapore.jpg" },
  { name: "Study in Malaysia", path: "/study-abroad/malaysia", image: "/m.jpg" },
  { name: "Study in South Africa", path: "/study-abroad/southafrica", image: "/sa.webp" },
  { name: "Study in New Zealand", path: "/study-abroad/newzealand", image: "/nz.webp" },
  { name: "Study in Philippines", path: "/study-abroad/philippines", image: "/p.jpg" },
  { name: "Study in Poland", path: "/study-abroad/poland", image: "/pol.webp" },
  { name: "Study in Ireland", path: "/study-abroad/ireland", image: "/ir.jpg" },
  { name: "Study in Spain", path: "/study-abroad/spain", image: "/spa.avif" },
  { name: "Study in Netherlands", path: "/study-abroad/netherlands", image: "/net.webp" },
  { name: "Study in Switzerland", path: "/study-abroad/switzerland", image: "/sw.webp" },
  { name: "Study in Denmark", path: "/study-abroad/denmark", image: "/de.jpg" },
  { name: "Study in Dubai", path: "/study-abroad/dubai", image: "/du.webp" },
  { name: "Study in Luxembourg", path: "/study-abroad/luxembourg", image: "/lux.jpg" },
  { name: "Study in Hongkong", path: "/study-abroad/hongkong", image: "/study-in-hongkong-flag.jpg" },
  { name: "Study in UAE", path: "/study-abroad/uae", image: "/ua.jpg" },
  { name: "Study in Norway", path: "/study-abroad/norway", image: "/norwaystudy.avif" },
  { name: "Study in Sweden", path: "/study-abroad/sweden", image: "/swedenstudy.jpg" },
];

const defaultVisa = {
  name: "Study Abroad",
  path: "/study-abroad",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="relative pt-10 w-full min-h-screen">
      {/* Background Animated GIF */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/jobseeker.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Page Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Swiper Section */}
          <div className="w-full lg:w-[55%] mt-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              Study Abroad
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={0}
              slidesPerView={1.6}
              centeredSlides={true}
              grabCursor={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {visaData.map((visa, index) => {
                const isActive = index === activeIndex;
                return (
                  <SwiperSlide key={visa.path}>
                    <Link href={visa.path}>
                      <div
                        className={`relative w-full h-[420px] md:h-[440px] lg:h-[460px] transform transition-all duration-700 overflow-hidden shadow-xl border-4 cursor-pointer ${
                          isActive
                            ? "scale-105 opacity-100 z-30"
                            : "scale-90 opacity-80 z-10"
                        }`}
                      >
                        <Image
                          src={visa.image}
                          alt="study Abroad"
                          fill
                          className="object-cover object-center"
                          quality={100}
                          priority
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl text-center p-6">
                          {visa.name}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[40%] -mt-6 lg:mt-0">
            <Form />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-white/50 to-white/50 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Study Abroad with <span className="text-orange-500">VJC Overseas</span>: Your Global Education Partner
          </h3>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            At <Link href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</Link>, we believe that education is a transformative journey that goes far beyond textbooks and classrooms. It’s about immersing yourself in a new culture, gaining global exposure, and building skills that prepare you for a competitive international career.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            Our dedicated team works as experienced <Link href="https://www.vjcoverseas.com/study-abroad/canada" className="text-orange-500">Student Visa Consultants</Link>, guiding students from the moment they start researching options to the day they step onto a foreign campus. Whether your goal is a short-term exchange program or a full-fledged degree, we provide comprehensive, personalized support at every stage.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            Recognized among the <Link href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</Link>, our approach is built on a track record of success, transparent guidance, and strong partnerships with world-class institutions. We tailor our recommendations to match your academic background, budget, and career goals.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            We collaborate with top universities across the globe, offering access to undergraduate, postgraduate, and diploma programs in destinations such as:
          </p>

          {/* Countries List */}
          <div className="grid grid-cols-2 bg-white sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-6 text-lg text-left list-disc list-inside">
            {visaData.map((visa) => (
              <li key={visa.path}>
                <Link
                  href={visa.path}
                  className="text-blue-500 hover:underline hover:text-black transition duration-300"
                >
                  {visa.name.replace("Study in ", "")}
                </Link>
              </li>
            ))}
          </div>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            As professional <Link href="https://www.vjcoverseas.com/study-abroad/usa" className="text-orange-500">Study Abroad Consultants</Link>, we provide more than just a list of universities. We offer in-depth advice on admission requirements, scholarship opportunities, course selection, and future career pathways, and we help you plan finances effectively by considering tuition fees, living expenses, and available funding options.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            Opting to <Link href="https://www.vjcoverseas.com/study-abroad/australia" className="text-orange-500">Study in Abroad</Link> locations opens the door to countless opportunities — from accessing advanced research facilities to learning from globally recognized faculty. International exposure helps students develop adaptability, cross-cultural communication skills, and a strong professional network that can be leveraged anywhere in the world.
          </p>

          {/* Student Visa Process (replaces any previous Germany Opportunity Card content) */}
          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            We understand that the <Link href="https://www.vjcoverseas.com/study-abroad/italy" className="text-orange-500">Student Visa Process</Link> can seem daunting, with multiple forms, interviews, and financial proofs involved. Our team ensures you meet all requirements and deadlines without stress — from preparing documents and booking visa interviews to offering mock interview sessions — so you feel confident and ready.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-4">
            Your study abroad experience doesn’t end with receiving your visa. We assist with finding suitable accommodation, understanding local culture, and connecting you with student communities. Whether it’s a bustling city campus or a quiet university town, we help you adapt smoothly to your new environment.
          </p>

          <p className="text-black text-lg max-w-4xl mx-auto mb-6">
            Studying abroad is more than just an academic step — it’s a life-changing investment in your future. With <b className="text-black">VJC Overseas</b> by your side, you gain a partner who is as committed to your success as you are. From your first consultation to your first day in class, we ensure your journey is rewarding, memorable, and stress-free.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Start your global education journey with VJC Overseas today!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Migrate;