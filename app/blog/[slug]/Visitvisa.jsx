"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MigrationProcess = () => {
  const countries = [
    { name: "Visit/Tourist", path: "/visit-tourist" },
    { name: "Dependant", path: "/dependant" },
    { name: "Business", path: "/business" },
  ];

  const [migrantsPlaced, setMigrantsPlaced] = useState(1);
  const [countriesCount, setCountriesCount] = useState(1);
  const [partnersCount, setPartnersCount] = useState(1);

  const maxMigrants = 80000;
  const maxCountries = countries.length;
  const maxPartners = 200;

 useEffect(() => {
  let m = 1, c = 1, p = 1;

  const migrantInterval = setInterval(() => {
    m += 100;
    setMigrantsPlaced(m > maxMigrants ? maxMigrants : m);
    if (m >= maxMigrants) clearInterval(migrantInterval);
  }, 20);

  const countryInterval = setInterval(() => {
    c += 1;
    setCountriesCount(c > maxCountries ? maxCountries : c);
    if (c >= maxCountries) clearInterval(countryInterval);
  }, 100);

  const partnerInterval = setInterval(() => {
    p += 3;
    setPartnersCount(p > maxPartners ? maxPartners : p);
    if (p >= maxPartners) clearInterval(partnerInterval);
  }, 30);

  return () => {
    clearInterval(migrantInterval);
    clearInterval(countryInterval);
    clearInterval(partnerInterval);
  };
}, [maxMigrants, maxCountries, maxPartners]); // ✅ fixed dependencies


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
}, [bgImages.length]); // ✅ now safe


  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 text-center">
        Travel Abroad with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Country Buttons */}
      <div
        className="rounded-xl p-4 mb-8 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Choose Your Visa Type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {countries.map((c, i) => (
            <Link key={i} href={c.path}>
              <div className="px-4 py-3 bg-white/70 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
                {c.name} Visa
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-700 text-justify">
        <p>
          Planning a vacation or short-term visit? <span className="text-orange-500">VJC Overseas</span> makes the tourist visa process effortless and quick. Whether it's sightseeing in Europe, a holiday in Dubai, or a family visit to the USA, we provide the expertise you need to get your visa approved smoothly.
        </p>
        <p>
          Our experienced consultants assist in selecting the right visa type for your travel purpose — be it leisure, family visit, or business meetups. We help you compile accurate documents and prepare for embassy appointments.
        </p>
        <p>
          Get guidance for visas to destinations like the USA, UK, Australia, Schengen countries, Singapore, and more. From filling out DS-160 forms to securing hotel bookings and travel insurance, we handle the entire process professionally.
        </p>
        <p>
          With growing global tourism trends, many countries have simplified their visitor visa process — and <span className="text-orange-500">VJC Overseas</span> ensures you benefit from those updates.
        </p>
        <p>
          We also offer group travel packages, honeymoon trips, customized itineraries, and end-to-end visa filing services. Whether you're a first-time traveler or a frequent flyer, we’ve got your back.
        </p>
        <p>
          Trust <span className="text-orange-500">VJC Overseas</span> to turn your travel dreams into reality with fast, dependable, and affordable tourist visa solutions.
        </p>

        <div className="max-w-5xl mx-auto mt-4 bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-8">
          {/* Image Side */}
          <div className="flex-shrink-0">
            <Image
              src="/visitvisa.png"
              alt="Travel Process"
              width={256}
              height={256}
              unoptimized
            />
          </div>

          {/* Text Content Side */}
          <div className="space-y-2 text-gray-800 text-sm">
            <div>
              <h3 className="text-base font-semibold text-orange-500">1. Travel Purpose Evaluation</h3>
              <p className="text-[14px] leading-relaxed">
                We understand your travel intent—tourism, visiting relatives, or attending events—and suggest the best-fit visa type.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">2. Country-Specific Document Checklist</h3>
              <p className="text-[14px] leading-relaxed">
                Every country has unique requirements. We provide tailored document checklists to ensure nothing is missed.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">3. Embassy Appointment & Biometrics</h3>
              <p className="text-[14px] leading-relaxed">
                We help you secure appointments, prep for interviews, and complete biometric formalities at VFS or embassy centers.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">4. Post-Visa Travel Guidance</h3>
              <p className="text-[14px] leading-relaxed">
                Get tips on travel insurance, forex cards, and itinerary planning—ensuring a hassle-free and memorable journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mt-6">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
          title="VJC Overseas Travel Services"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* CTA Stats */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl shadow-lg px-6 py-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-6 sm:gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">{migrantsPlaced.toLocaleString()}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Happy Travelers Served</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-1 text-white text-sm font-medium">Tourist Destinations Supported</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{partnersCount}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Trusted Travel Partners</p>
        </div>
      </div>
    </div>
  );
};

export default MigrationProcess;
