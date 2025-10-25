"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MigrationProcess = () => {
  const countries = [
    { name: "Australia", path: "/australia" },
    { name: "Canada", path: "/canada" },
    { name: "Hong-Kong", path: "/hong-kong" },
    { name: "New-Zealand", path: "/new-zealand" },
    { name: "Quebec", path: "/quebec" },
    { name: "South Africa", path: "/south-africa" },
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
  }, [maxMigrants, maxCountries, maxPartners]);

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
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 text-center">
        Migrate Abroad with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Country Buttons with Rotating Background */}
      <div
        className="rounded-xl p-4 mb-8 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Select Your Migration Destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
          Ready to begin a new life abroad? With <span className="text-orange-500">VJC Overseas</span>, your migration journey becomes seamless and fully guided. We simplify the entire Permanent Residency (PR) and work migration process from documentation to landing.
        </p>
        <p>
          Whether you're migrating to Canada, Australia, Germany, or the UK, our expert advisors ensure your profile matches the latest visa policies. We assess eligibility, boost your profile, and walk you through every step—from skill assessment to EOI submissions.
        </p>
        <p>
          Our dedicated team provides in-depth assistance with documentation, application submissions, translations, health checks, and even post-landing services such as job search and housing help.
        </p>
        <p>
          Recent migration trends show growing demand for skilled professionals, with countries like Canada and Australia opening up massive intake quotas. <span className="text-orange-500">VJC Overseas</span> ensures you benefit from these global shifts through timely applications.
        </p>
        <p>
          We also offer tailored migration programs for tech professionals, healthcare workers, tradespeople, and business migrants. Our team identifies the right PR pathway—be it Express Entry, Provincial Nominee, Skilled Independent, or Business Innovation streams.
        </p>
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we turn complex migration processes into structured, achievable steps. With thousands of successful applicants and a global network of partners, we are your ultimate migration companion.
        </p>

        {/* Process Steps + Image */}
        <div className="max-w-5xl mx-auto mt-4 bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/migrate-to-drean-country.png"
              alt="Migration Process"
              width={256}
              height={256}
              unoptimized
            />
          </div>
          <div className="space-y-2 text-gray-800 text-sm">
            <div>
              <h3 className="text-base font-semibold text-orange-500">1. Profile Evaluation</h3>
              <p className="text-[14px] leading-relaxed">
                We assess your education, work experience, and skills to find the most suitable PR or work visa pathways tailored to your profile.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">2. Country-Specific Visa Planning</h3>
              <p className="text-[14px] leading-relaxed">
                Be it Canada’s Express Entry, Australia’s SkillSelect, or Germany’s Job Seeker Visa—we recommend the most favorable option based on latest policies.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">3. Language Test Preparation</h3>
              <p className="text-[14px] leading-relaxed">
                Get dedicated IELTS/PTE training to meet language proficiency requirements and improve your overall migration score.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-orange-500">4. Application & Submission</h3>
              <p className="text-[14px] leading-relaxed">
                We file your application through official portals, submit your EOI, and ensure all timelines and legal standards are strictly met.
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
          title="VJC Overseas Migration Services"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* CTA Counters */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl shadow-lg px-6 py-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-6 sm:gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">{migrantsPlaced.toLocaleString()}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Migrants Successfully Settled</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-1 text-white text-sm font-medium">Countries Supported</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{partnersCount}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Global Legal & PR Partners</p>
        </div>
      </div>
    </div>
  );
};

export default MigrationProcess;
