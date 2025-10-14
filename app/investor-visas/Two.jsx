"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

const Migrate = () => {
  const scrollRef = useRef(null);
  const backgroundImage = "/plane.webp";

  const countries = [
    { name: "USA Investor Visa", path: "/investor-visas/usa", image: "/usainvest.png" },
    { name: "Canada Investor Visa", path: "/investor-visas/canada", image: "/canadainvestbg.png" },
    { name: "Germany Investor Visa", path: "/investor-visas/germany", image: "/canadainvestorbg.png" },
    { name: "Australia Investor Visa", path: "/investor-visas/australia", image: "/australiainvestbg.png" },
    { name: "UK Investor Visa", path: "/investor-visas/uk", image: "/ukinvestorvisa.png" },
    { name: "UAE Investor Visa", path: "/investor-visas/uae", image: "/uaeinvestorbg.png" },
    { name: "Portugal Investor Visa", path: "/investor-visas/portugala", image: "/potugalinvestorbg.png" },
    { name: "Austria Investor Visa", path: "/investor-visas/austria", image: "/austriainvestbg.png" },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Auto-scroll functionality
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col items-center text-white px-4 sm:px-6 md:px-10 pb-10">
      {/* Background Image */}
      <div
        className="relative w-screen h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-20 text-center px-4 sm:px-10 mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Investor Visas</h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-6">
            Explore global opportunities with our expert Investor Visa guidance. <br />
            Secure your future in leading countries through strategic investments.
          </p>
          <Link href="/assessment">
            <button className="bg-gradient-to-r from-orange-500 to-white text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md hover:from-orange-600 hover:to-white hover:text-white transition duration-200 text-sm sm:text-base">
              Free Visa Assessment
            </button>
          </Link>
        </div>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[500px] z-20 w-full flex justify-center"
      >
        <div className="flex items-center justify-center w-full max-w-7xl space-x-2 px-2">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-orange-600 bg-white rounded-full shadow transition-all duration-200"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Scrollable Card List */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 w-full max-w-[1100px] scrollbar-hide scroll-smooth pb-4"
          >
            {countries.map((country, index) => (
              <Link key={index} href={country.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative min-w-[200px] sm:min-w-[250px] h-36 sm:h-48 flex items-center justify-center text-white text-center text-sm sm:text-lg font-semibold shadow-md cursor-pointer rounded-lg overflow-hidden transition-all"
                  style={{
                    backgroundImage: `url(${country.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
                  <div className="relative z-10 px-3">{country.name}</div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-orange-600 bg-white rounded-full shadow transition-all duration-200"
            aria-label="Scroll Right"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <div className="relative z-10 mt-40 sm:mt-44 md:mt-48 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-24 px-4">
        {/* Left: Form + Image */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Form Section */}
          <div className="w-full -mt-6 md:mt-0">
            <Form />
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center md:justify-start -mt-4 md:-mt-6">
            <Image
              src="/investorvisa.png"
              alt="Migration Image"
              width={600}
              height={400}
              className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-full"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div
          className="w-full md:w-1/2 max-w-full h-[160vh] overflow-y-auto pr-2 md:pr-4"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            <span className="text-orange-600">VJC Overseas</span> – Start Your Investment Journey
          </h2>

          <p className="text-base sm:text-lg mb-3 text-gray-800">
            We specialize in turning migration dreams into reality through investment-led visa solutions tailored to your profile. Recognized as <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900">Best Visa Immigration Consultants</a>.
          </p>

          <p className="text-base sm:text-lg mb-3 text-gray-800">
            Fill out the form and let our consultants guide you through every step of the investor visa process with trusted <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900">VJC Overseas</a> expertise.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800 pl-5">
            <li> Expert Visa Consultation</li>
            <li> Tailored Investment Pathways</li>
            <li> End-to-End Support</li>
            <li> Global Opportunities Await</li>
          </ul>

          <p className="text-base sm:text-lg text-gray-800 italic">Global Visions. Trusted Guidance.</p>
          <p className="text-base sm:text-lg text-gray-800 italic">Your Bridge to a Brighter Future.</p>
          <p className="text-base sm:text-lg text-gray-800 font-semibold">Seamless Migration Starts with <span className="text-orange-600">VJC Overseas</span>.</p>
          <p className="mt-4 font-medium text-gray-700">Trusted by thousands of investors worldwide through <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900">Investor Visa Services</a>.</p>

          {/* Detailed Content */}
          <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-800">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Investor Visa Services by <span className="text-orange-600">VJC Overseas</span>
            </h3>

            <p>
              We are one of India’s most trusted Investor Visa consultants, empowering clients to invest, live, and work globally with exclusive <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900">Golden Visa Programs</a>.
            </p>

            <p>
              Whether you're in Hyderabad, Bengaluru, or any other city, our experts are ready to help by providing the right <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900">Investor Visa Program</a>.
            </p>

            <h4 className="text-lg font-semibold mt-4">Why Choose Us?</h4>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>Trusted Expertise:</strong> In-depth knowledge of global investor programs.</li>
              <li><strong>Personalized Approach:</strong> Support for new and seasoned investors.</li>
              <li><strong>Pan-India Support:</strong> Local presence, global reach.</li>
              <li><strong>Multiple Countries:</strong> USA, Canada, UK, Australia, Europe & more.</li>
              <li><strong>High Success Rate:</strong> Numerous successful investor visa cases.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Programs We Offer</h4>
            <ul className="list-disc list-inside space-y-2 pl-5">
              <li><strong>USA EB-5:</strong> Invest in a business, create 10 jobs for a Green Card.</li>
              <li><strong>Canada Investor Visa:</strong> Quebec & provincial investor pathways.</li>
              <li><strong>UK Tier 1:</strong> HNW investment starting from £2 million.</li>
              <li><strong>Australia:</strong> Business Innovation & Significant Investor Visa.</li>
              <li><strong>Europe:</strong> Residency by Investment – Portugal, Greece, Spain.</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4">Our Process</h4>
            <ol className="list-decimal list-inside space-y-2 pl-5">
              <li><strong>Consultation:</strong> Understand your financial goals.</li>
              <li><strong>Strategy:</strong> Tailor a visa & investment plan.</li>
              <li><strong>Documentation:</strong> Accurate and complete filings.</li>
              <li><strong>Application:</strong> We submit and monitor your case.</li>
              <li><strong>Post-Approval:</strong> Relocation, business, and legal setup support.</li>
            </ol>

            <p className="mt-4">
              <strong>Contact Us Today!</strong> Your gateway to international investment begins with <span className="text-orange-600">VJC Overseas</span>.
            </p>
            <p>Get in touch for a free consultation and let us help you expand globally.</p>
            <p className="font-semibold text-orange-600">VJC Overseas – Empowering Your Global Dreams, One Visa at a Time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
