'use client';

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Form from "./Form";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VisitVisas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SectionWrapper = ({ children, ...props }) => {
    if (isMobile) return <section {...props}>{children}</section>;
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        {...props}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <>
      <Head>
        <title>Visit Visas – Explore the World with VJC Overseas</title>
        <meta
          name="description"
          content="Explore the world with VJC Overseas – Your trusted partner for Visit Visa services from India."
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/visit-visas" />
      </Head>

      <div className="bg-white text-black px-4 sm:px-6 md:px-12 py-8">
        {/* Hero Section */}
        <SectionWrapper className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-orange-500 to-black bg-clip-text text-transparent">
            Explore the World with VJC Overseas
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Your Gateway to Global Adventures Starts Here
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Dreaming of exploring the world? Whether it’s the Eiffel Tower in Paris, the cherry blossoms in Japan, or the skyscrapers of Dubai, <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900 ml-1">Best Visa Immigration Consultants</a> is your trusted partner for seamless Visit Visa services from India.
          </p>
        </SectionWrapper>

        {/* What is a Visit Visa? */}
        <SectionWrapper className="mb-16">
          <div className="mb-10 ml-8">
            <h2 className="text-3xl font-semibold mb-4">What is a Visit Visa?</h2>
            <p className="text-lg text-gray-700">
              A Visit Visa is a temporary travel document that allows you to enter and stay in a foreign country for leisure, tourism, family visits, or short business trips. <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900 ml-1">VJC Overseas</a>
            </p>
            <p className=" text-gray-700 mt-4 text-xl">
              We specialize in providing Visit Visa assistance for over 15+ countries, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 ml-8 items-start">
            <ul className="list-disc list-inside  text-gray-700 text-xl">
              <li> USA Visit Visa (B2)</li>
              <li> UK Standard Visitor Visa</li>
              <li>Canada Visitor Visa (TRV)</li>
              <li>Schengen Tourist Visa</li>
              <li>Australia Visitor Visa (Subclass 600)</li>
              <li>Dubai Visit Visa</li>
              <li>Singapore Tourist Visa</li>
              <li>Japan, South Korea, Thailand, Malaysia & more</li>
            </ul>
            <div className="w-full flex justify-center">
              <Image
                src="/schenvivas.jpg"
                alt="Visit Visa Travel"
                width={400}
                height={200}
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose VJC */}
        <SectionWrapper className="bg-gradient-to-r from-blue-400 to-orange-500 p-6 sm:p-10 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Why Choose VJC Overseas for Your Visit Visa?
          </h2>
          <ul className="list-disc list-inside text-lg text-white max-w-3xl mx-auto">
            <li>✅ Personalized documentation support</li>
            <li>✅ High visa approval success rate</li>
            <li>✅ Expert consultants with real-time embassy updates</li>
            <li>✅ Fast-tracked processing for urgent travel needs</li>
            <li>✅ End-to-end assistance: From application to travel tips</li>
          </ul>
          <p className="mt-4 text-center">
            Get the best guidance for <a href="https://www.vjcoverseas.com/visit-visas" className="font-bold text-blue-900 ml-1">USA B1/B2 Visa</a> applications today.
          </p>
        </SectionWrapper>

        {/* Cost of Living & Form */}
        <SectionWrapper className="px-2 sm:px-4 lg:px-16 xl:px-24 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Cost of Living in Top Destinations & Free Visa Assessment
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Know how much you need and get a free consultation before you fly! <a href="https://www.vjcoverseas.com/visit-visas" className="font-bold text-blue-900 ml-1">Visit Visa Consultants</a>
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
            {/* Form */}
            <div className="w-full order-1 lg:order-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Get Your Free Tourist Visa Assessment
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you within 24 hours with the best visa guidance. <a href="https://www.vjcoverseas.com/tours-ticketing" className="font-bold text-blue-900 ml-1">Tourist Visa Process</a>
                </p>
                <Form />
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-orange-200 via-yellow-100 to-white rounded-xl shadow-lg">
                <h4 className="text-lg font-medium text-orange-700 mb-2">
                   Travel Tip of the Day
                </h4>
                <p className="text-gray-700 text-sm">
                   Always scan and upload your passport and visa docs to a secure cloud folder.
                </p>
                <p className="text-gray-700 text-sm">
                   Pack an extra set of clothes in your carry-on bag.
                </p>
                <p className="text-gray-700 text-sm">
                   Carry a portable power bank for long flights or layovers.
                </p>
                <p className="text-gray-700 text-sm">
                 💳 Notify your bank before international travel to avoid blocked cards.
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="w-full order-2 lg:order-1 overflow-x-auto">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Average Cost of Living per Day (for Indian Tourists)
              </h3>
              <table className="table-auto w-full text-base border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800">
                    <th className="px-6 py-3 border font-semibold text-left"> Country</th>
                    <th className="px-6 py-3 border font-semibold text-left"> Daily Budget (INR)</th>
                    <th className="px-6 py-3 border font-semibold text-left"> Includes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    { name: "USA", link: "/visit-visas/usa" },
                    { name: "UK", link: "/visit-visas/uk" },
                    { name: "Canada", link: "/visit-visas/canada" },
                    { name: "Australia", link: "/visit-visas/australia" },
                    { name: "Dubai", link: "/visit-visas/dubai" },
                    { name: "Austria", link: "/visit-visas/austria" },
                    { name: "Schengen", link: "/visit-visas/schengen" },
                    { name: "Thailand", link: "/tours-ticketing/thailand" },
                    { name: "Japan", link: "/tours-ticketing/japan" },
                  ].map((country, index) => {
                    const budgets = [
                      "₹8,000 – ₹12,000",
                      "₹7,000 – ₹10,000",
                      "₹6,000 – ₹9,000",
                      "₹7,500 – ₹11,000",
                      "₹5,000 – ₹9,000",
                      "₹4,500 – ₹7,000",
                      "₹6,500 – ₹10,000",
                      "₹3,000 – ₹5,000",
                      "₹6,000 – ₹9,500",
                    ];
                    const includes = [
                      " Food, Transport, Lodging",
                      " Meals, Commute, Tickets",
                      " Transport, Meals, Hostel",
                      " Dining, Activities, Travel",
                      " Hotels, Metro, Cuisine",
                      " Food, Attractions, MRT",
                      " Travel, Food, Museums",
                      " Food, Shopping, Stay",
                      " Rail pass, Sushi, Hostel",
                    ];
                    return (
                      <tr
                        key={index}
                        className={`hover:bg-orange-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                      >
                        <td className="px-6 py-3 border">
                          <a
                            href={country.link}
                            className="text-blue-800 font-semibold hover:underline"
                          >
                            {country.name}
                          </a>
                        </td>
                        <td className="px-6 py-3 border text-orange-600 font-medium">
                          {budgets[index]}
                        </td>
                        <td className="px-6 py-3 border">{includes[index]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-500">
                *Note: These are approximate values and can vary depending on city, time of year, and personal choices.
              </p>
              <div className="mt-6 bg-orange-50 text-orange-800 p-4 rounded-lg shadow">
                <strong> Pro Tip:</strong> Booking in advance can save up to 25% of your daily expenses!
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="bg-gradient-to-br from-orange-500 via-blue-200 to-black text-white py-8 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-black mb-4">Ready to Travel the World?</h2>
          <p className="text-lg text-black mb-4">
            With VJC Overseas, your dream of international travel is just a step away. <a href="https://www.vjcoverseas.com/visit-visas" className="font-bold text-blue-900 ml-1">Schengen Visit Visa</a>
          </p>
         
        </SectionWrapper>

        {/* Footer */}
        <footer className="text-center mt-14 text-gray-600 font-bold text-2xl">
          <p>
            VJC Overseas – Turning Travel Dreams Into Reality.
            <br />
            🛫 Trusted by Thousands | 🌐 Global Reach | 📄 100% Visa Assistance
          </p>
        </footer>
      </div>
    </>
  );
};

export default VisitVisas;
