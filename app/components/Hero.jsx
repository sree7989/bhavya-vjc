"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Slider from "@/app/components/HeroSlider";
import Image from "next/image";

const Form = dynamic(() => import('@/app/components/Form'), {
  ssr: false,
});

export default function HeroSection() {
  useEffect(() => {
    // Preload form component asap after mount for faster display
    Form.preload?.();
  }, []);

  return (
    <section 
      className="relative py-4 lg:py-0 mt-20 md:-mt-20 lg:mt-20 bg-black"
    >
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl w-full px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 gap-x-6">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 items-center text-center lg:text-left w-full">
          <Image
            src="/assets/mosttrustedbrand.png"
            alt="india most trusted brand"
            width={1120}
            height={630}
            className="w-full max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-full h-auto mt-6"
            priority
            unoptimized
          />
          <Image
            src="/award.png"
            alt="Award"
            width={432}
            height={112}
            priority
            unoptimized
            className="w-full max-w-[85vw] sm:max-w-xs md:max-w-md h-auto mx-auto"
          />
          <Slider />
          <p className="text-gray-200 tracking-tight text-xs sm:text-sm md:text-base lg:text-lg font-medium w-full max-w-[95vw] sm:max-w-md mx-auto lg:max-w-xl">
            Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
          </p>
        </div>
        {/* Right Section (Form) */}
        <div className="flex justify-center items-center mt-6 sm:mt-10 px-1 sm:px-6 md:px-0 w-full">
          <div className="w-full max-w-[98vw] sm:max-w-md">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
