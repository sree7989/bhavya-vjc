"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseVJC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black leading-tight">
          Why Choose{" "}
          <span className="text-orange-500">VJC Overseas</span> for Studying in{" "}
          <span className="text-blue-500">Dubai</span>?
        </h2>
        <div
          className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-2xl shadow-md"
          data-aos="fade-right"
        >
          <p className="text-gray-800 text-lg leading-relaxed">
            At <span className="font-semibold text-orange-500">VJC Overseas</span>, we specialize in Dubai student visa processing. Our experienced consultants provide end-to-end support – from university applications and document preparation to visa filing and post-landing assistance. We ensure that your application is accurate, complete, and submitted on time to avoid delays or rejections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVJC;
