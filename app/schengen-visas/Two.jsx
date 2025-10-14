"use client";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Form from "./Form"; // Adjust if needed
import { FaCheckCircle, FaPlaneDeparture, FaBriefcase } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const router = useRouter();

  const slides = [
    { name: "Austria Visit/Tourist Visa", path: "/schengen-visas/austria", image: "/austriatour.avif" },
    { name: "Belgium Visit/Tourist Visa", path: "/schengen-visas/belgium", image: "/belgiumfamousplace.jpg" },
    { name: "Bulgaria Visit/Tourist Visa", path: "/schengen-visas/bulgaria", image: "/balgeriatour.jpg" },
    { name: "Croatia Visit/Tourist Visa", path: "/schengen-visas/croatia", image: "/balgeriatour.webp" },
    { name: "Czech Republic Visit/Tourist Visa", path: "/schengen-visas/czech-republic", image: "/czechtour.jpg" },
    { name: "Denmark Visit/Tourist Visa", path: "/schengen-visas/denmark", image: "/dmtour.jpg" },
    { name: "Estonia Visit/Tourist Visa", path: "/schengen-visas/estonia", image: "/estonia.jpg" },
    { name: "Finland Visit/Tourist Visa", path: "/schengen-visas/finland", image: "/finland.jpg" },
    { name: "France Visit/Tourist Visa", path: "/schengen-visas/france", image: "/france1.jpg" },
    { name: "Germany Visit/Tourist Visa", path: "/schengen-visas/germany", image: "/gremany1.jpg" },
    { name: "Greece Visit/Tourist Visa", path: "/schengen-visas/greece", image: "/greece1.webp" },
    { name: "Hungary Visit/Tourist Visa", path: "/schengen-visas/hungary", image: "/hungary.jpg" },
    { name: "Iceland Visit/Tourist Visa", path: "/schengen-visas/iceland", image: "/iceland.avif" },
    { name: "Italy Visit/Tourist Visa", path: "/schengen-visas/italy", image: "/itlay1.jpg" },
    { name: "Latvia Visit/Tourist Visa", path: "/schengen-visas/latvia", image: "/latvia.jpg" },
    { name: "Liechtenstein Visit/Tourist Visa", path: "/schengen-visas/liechtenstein", image: "/liechtenstein.jpg" },
    { name: "Lithuania Visit/Tourist Visa", path: "/schengen-visas/lithuania", image: "/lithuania.jpeg" },
    { name: "Luxembourg Visit/Tourist Visa", path: "/schengen-visas/luxembourg", image: "/luxembourg.jpg" },
    { name: "Malta Visit/Tourist Visa", path: "/schengen-visas/malta", image: "/malta1.jpg" },
    { name: "Netherlands Visit/Tourist Visa", path: "/schengen-visas/netherlands", image: "/netherlands.jpg" },
    { name: "Norway Visit/Tourist Visa", path: "/schengen-visas/norway", image: "/norway.jpg" },
    { name: "Poland Visit/Tourist Visa", path: "/schengen-visas/poland", image: "/poland.jpg" },
    { name: "Portugal Visit/Tourist Visa", path: "/schengen-visas/portugal", image: "/portugal.avif" },
    { name: "Romania Visit/Tourist Visa", path: "/schengen-visas/romania", image: "/romania.jpg" },
    { name: "Slovakia Visit/Tourist Visa", path: "/schengen-visas/slovakia", image: "/slovakia.jpg" },
    { name: "Slovenia Visit/Tourist Visa", path: "/schengen-visas/slovenia", image: "/slovenia.webp" },
    { name: "Spain Visit/Tourist Visa", path: "/schengen-visas/spain", image: "/spain.jpg" },
    { name: "Sweden Visit/Tourist Visa", path: "/schengen-visas/sweden", image: "/sweden1.jpg" },
    { name: "Switzerland Visit/Tourist Visa", path: "/schengen-visas/switzerland", image: "/switzerland.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const bgVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <Head>
        <title>Apply Schengen Visit/Tourist Visas - VJC Overseas</title>
        <meta name="description" content="Explore all Schengen countries with VJC Overseas. Easy Schengen Visit & Tourist Visa approvals. Apply now for Austria, Germany, France, Italy and more." />
        <meta name="keywords" content="Schengen visa, tourist visa, visit visa, Europe visa, VJC Overseas, Austria visa, Germany visa, France visa, Italy visa, Schengen countries visa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Schengen Visit/Tourist Visas | VJC Overseas" />
        <meta property="og:description" content="Get fast and easy tourist visa approvals to all Schengen countries. VJC Overseas is your trusted visa consultant." />
        <meta property="og:image" content="/austriatour.avif" />
        <meta property="og:url" content="https://www.vjcoverseas.com/schengen-visas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <div className="bg-gray-100 min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="relative z-10 text-white text-center px-4 max-w-3xl">
          <motion.h1
            className="text-4xl font-extrabold md:text-5xl mb-4 -mt-28"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Explore the World with Ease
          </motion.h1>
          <p className="text-lg md:text-xl font-light">
            Get Your Tourist Visa Approved Hassle-Free!
          </p>
        </div>
      </section>

      {/* Swiper Section */}
<section className="w-full max-w-5xl mx-auto -mt-[20vh] px-4 relative z-20">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    className="rounded-lg shadow-lg border-2 border-white"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index} className="relative cursor-pointer">
  <Link href={slide.path} passHref className="block w-full h-full">
    <div className="relative w-full h-full">
      <Image
  src={slide.image}
  alt={slide.name}
  width={800}
  height={400}
  className="w-full h-96 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
  priority
  unoptimized
/>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 hover:bg-black/70 transition-all rounded-lg p-4">
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          {slide.name}
        </h2>
        <span className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-400 transition">
          Apply Now
        </span>
      </div>
    </div>
  </Link>
</SwiperSlide>

    ))}
  </Swiper>
</section>


     {/* Form + Visa Cards + Why Choose */}
<section
  className="relative w-full rounded-lg overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/austriavisit.jpg')" }} // Replace with your desired image
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative max-w-7xl mx-auto py-12 px-8 flex flex-col md:flex-row gap-10 items-start text-white">
    {/* Left Side: Form */}
    <div className="w-full md:w-1/2">
      <div className="p-6  rounded-lg">
        <Form />
      </div>
    </div>

    {/* Right Side: Visa Cards Vertically */}
    <div className="w-full md:w-1/2 flex flex-col gap-4 mt-8">
      <VisaCard
        icon={<FaPlaneDeparture className="text-blue-400 text-2xl" />}
        title="Tourist Schengen Visa"
        desc="Visit multiple Schengen countries for tourism and leisure, valid for up to 90 days within 180 days."
      />
      <VisaCard
        icon={<FaBriefcase className="text-orange-400 text-2xl" />}
        title="Business Schengen Visa"
        desc="For professionals traveling for business meetings, conferences, or networking in the Schengen Area."
      />
      <VisaCard
        icon={<FaCheckCircle className="text-green-400 text-2xl" />}
        title="Family Visit Visa"
        desc="Perfect for visiting family or relatives residing in the Schengen region."
      />
      <VisaCard
        icon={<FaPlaneDeparture className="text-purple-400 text-2xl" />}
        title="Medical Treatment Visa"
        desc="Travel to Schengen countries for medical care or health consultations."
      />
    </div>
  </div>
</section>

    </div>
   </>
  );
}

// Reusable Visa Card
function VisaCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col gap-3 p-4 bg-black/60 rounded-lg shadow hover:shadow-lg transition duration-300 border border-orange-500">
      <div className="flex items-center gap-3">
        {icon}
        <div className="text-1sm font-bold text-white">{title}</div>
      </div>
      <div className="text-xs text-gray-200">{desc}</div>
      <Link href="/assessment" passHref>
        <button className="self-start bg-orange-500 text-white text-xs px-4 py-1 rounded hover:bg-blue-400 transition mt-2">
          Apply Now!
        </button>
      </Link>
    </div>
  );
}
