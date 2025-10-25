'use client';
import React, { useRef } from 'react';
import Form from './Form';
import Content from './Content';
import Image from 'next/image';
import Link from 'next/link';

const HeroWithForm = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[100vh] flex items-center justify-center px-4 md:px-12">
        {/* Background */}
        <Image
          src="/airplane.jpg"
          alt="VJC Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Main Content */}
        <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto w-full py-10">
          {/* Form Section */}
          {/* Form Section */}
<div className="w-full lg:w-1/2 order-1 lg:order-2">
  <Form />
</div>

{/* Text + Images Section */}
<div className="w-full lg:w-1/2 flex flex-col space-y-6 items-center lg:-mt-14 lg:center text-center lg:text-left mt-10 sm:mt-16 order-2 lg:order-1">


            <h1 className="lg:text-4xl sm:text-4xl font-bold text-white">
              Air-Ticketing services with <br/><span className="text-orange-500 text-center">VJC Overseas</span>
            </h1>

            <Image
              src="/1.gif"
              alt="USA Study Animated Guide"
              width={900}
              height={600}
              className="w-full max-w-md rounded-lg"
              priority
            />

            <Image
              src="/award-vjc.png"
              alt="VJC Overseas Award"
              width={600}
              height={300}
              className="w-full max-w-sm rounded-lg"
              priority
            />

            <p className="text-orange-300 text-base sm:text-lg">
              Expert solutions for Study, Investment, and Migration — all under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link href="/passport">
                <span className="cursor-pointer bg-orange-500 hover:bg-blue-400 hover:underline underline-offset-4 decoration-white text-white px-4 py-2 rounded-xl shadow transition duration-200 font-semibold text-base">
                  Passport Services
                </span>
              </Link>
              <Link href="/air-ticketing" >
                <span className="cursor-pointer bg-orange-500 hover:bg-blue-400 hover:underline underline-offset-4 decoration-white text-white px-4 py-2 rounded-xl shadow transition duration-200 font-semibold text-base">
                  Air-ticketing
                </span>
              </Link>
              <Link href="/forex" >
                <span className="cursor-pointer bg-orange-500 hover:bg-blue-400 hover:underline underline-offset-4 decoration-white text-white px-4 py-2 rounded-xl shadow transition duration-200 font-semibold text-base">
                  Forex Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <Content section1={section1} section2={section2} section3={section3} />
      </div>
    </div>
  );
};

export default HeroWithForm;
