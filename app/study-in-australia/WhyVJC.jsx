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
          Why Choose <span className="text-orange-500">VJC Overseas</span>?
</h2>
<div
          className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-2xl shadow-md"
          data-aos="fade-right"
>
<p className="text-gray-800 text-lg leading-relaxed">
            At <span className="font-semibold text-orange-500">VJC Overseas</span>, we provide
            complete, end-to-end services for your Australian education journey.
            From course selection and admission to GTE guidance, financial planning,
            and visa filing – we handle it all. With a high visa approval rate and
            expert consultants, we ensure a smooth and successful process.
</p>
</div>
</div>
</section>
  );
};
 
export default WhyChooseVJC;