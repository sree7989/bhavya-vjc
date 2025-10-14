"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const MigrationProcess = () => {
  const countries = [
    { name: "Passport", path: "/passport" },
    { name: "Air Ticketing", path: "/air-ticketing" },
    { name: "Forex", path: "/forex" },
  ];

  const bgImages = [
    "/study-abroad-vjc.jpg",
    "/study-abroad.jpg",
    "/studying-abroad-1.webp",
    "/texus-vjc.jpg",
    "/turckey-tour.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <>
      <Head>
        <title>VJC Overseas Global Services - Study, Invest & Migrate</title>
        <meta
          name="description"
          content="Explore VJC Overseas global services including student visas, investor visas, and migration support to countries like Cyprus, Greece, Malta, and more. Get expert assistance now!"
        />
        <meta
          name="keywords"
          content="VJC Overseas, Global Migration, Student Visa, Investor Visa, Immigration Consultants, Cyprus Visa, Malta Investment Visa, Ireland PR"
        />
        <meta name="author" content="VJC Overseas" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 font-sans">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
          Our Global <span className="text-orange-500">Services</span> at VJC Overseas
        </h1>

        {/* Services Banner */}
        <section
          className="rounded-xl p-6 mb-10 transition-all duration-1000 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `url(${bgImages[currentBg]})`,
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <h2 className="text-xl font-bold text-white text-center mb-6">
            Choose a Category to Explore Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {countries.map((c, i) => (
              <Link key={i} href={c.path}>
                <div className="px-4 py-3 bg-white/90 text-center text-black font-semibold border border-white rounded-lg shadow hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
                  {c.name} Services
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Info Content */}
        <div className="max-w-4xl mx-auto space-y-4 leading-relaxed text-[15px]">
          <p>
            <strong>VJC Overseas</strong> offers end-to-end solutions for students, investors, and skilled professionals
            looking to build a future abroad. Our consultants provide tailored strategies across study, business, and permanent relocation.
          </p>
          <p>
            From university admissions and business setup to visa filing and post-arrival support, we provide everything
            you need for a smooth and successful international journey.
          </p>
          <p>
            Our services include financial consulting, legal documentation, SOPs, and accommodation support—making
            your transition to a new country seamless and hassle-free.
          </p>
          <p>
            With <strong>40,000+ success stories</strong> and <strong>200+ global partners</strong>, VJC Overseas is your
            trusted migration and settlement partner.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>One-to-One Guidance:</strong> Personalized counseling to build your migration roadmap.</li>
            <li><strong>Multi-Country Expertise:</strong> Teams for USA, UK, Canada, Germany, Australia, Europe, and more.</li>
            <li><strong>University & Employer Tie-ups:</strong> Ensuring faster admissions and placements.</li>
            <li><strong>19+ Years Experience:</strong> Trusted and globally recognized processes.</li>
          </ul>
        </div>

        {/* Steps Section */}
        <section className="max-w-5xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/servies-what-we-offer.png"
              alt="VJC Overseas Migration Process"
              width={230}
              height={200}
              unoptimized
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4 text-sm text-gray-800">
            {[
              {
                title: "1. Profile Evaluation",
                desc: "We analyze your academic, business, or professional background to suggest the most suitable migration pathway.",
              },
              {
                title: "2. Country Selection & Planning",
                desc: "Get expert advice on choosing the right country based on visa success rates, ROI, and long-term goals.",
              },
              {
                title: "3. Application & Documentation",
                desc: "We handle all paperwork—from visa forms and SOPs to financial proofs—ensuring faster approvals.",
              },
              {
                title: "4. Relocation & Post-Visa Support",
                desc: "Enjoy complete assistance for pre-departure, accommodation, and onboarding in your new country.",
              },
            ].map((step, idx) => (
              <div key={idx}>
                <h3 className="text-base font-semibold text-orange-500">{step.title}</h3>
                <p className="text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Embed */}
        <section className="aspect-w-16 aspect-h-9 max-w-5xl mx-auto mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
            title="VJC Overseas Migration Services"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default MigrationProcess;
