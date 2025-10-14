"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const WorkPermitProcess = () => {
  const countries = [
    { name: " ", path: "/work" },
    { name: "Austria", path: "/austria" },
    { name: "Germany", path: "/germany" },
   
    
  ];

  const [workersPlaced, setWorkersPlaced] = useState(1);
  const [countriesCount, setCountriesCount] = useState(1);
  const [companiesCount, setCompaniesCount] = useState(1);

  const maxWorkers = 20000;
  const maxCountries = countries.length;
  const maxCompanies = 300;

  useEffect(() => {
    let w = 1, c = 1, p = 1;

    const workerInterval = setInterval(() => {
      w += 40;
      setWorkersPlaced(w > maxWorkers ? maxWorkers : w);
      if (w >= maxWorkers) clearInterval(workerInterval);
    }, 20);

    const countryInterval = setInterval(() => {
      c += 1;
      setCountriesCount(c > maxCountries ? maxCountries : c);
      if (c >= maxCountries) clearInterval(countryInterval);
    }, 100);

    const companyInterval = setInterval(() => {
      p += 2;
      setCompaniesCount(p > maxCompanies ? maxCompanies : p);
      if (p >= maxCompanies) clearInterval(companyInterval);
    }, 30);

    return () => {
      clearInterval(workerInterval);
      clearInterval(countryInterval);
      clearInterval(companyInterval);
    };
  }, [maxCountries, maxCompanies, maxWorkers]);

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
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">
        Work Permit Visa Process with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Country Buttons */}
      <div
        className="rounded-xl p-4 mb-10 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Choose Your Country for Work Permit
        </h2>
        <div className="grid md:ml-28 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-3">
  {countries.map((c, i) => (
    <Link key={i} href={c.path}>
      <div className="px-3 py-3 bg-white/70 text-black border border-white rounded-md text-xl sm:text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
        {c.name} Work Permit process
      </div>
    </Link>
  ))}
</div>

      </div>

      {/* Updated Description */}
<div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-700 text-justify">
  <p>
    Planning to work abroad? With <span className="text-orange-500">VJC Overseas</span>, the process of obtaining a work permit becomes clear, simple, and achievable. We guide you through every step — from documentation to interviews — ensuring your international career dreams take off with confidence.
  </p>
  <p>
    Work permit visa requirements vary by country, but typically involve securing a job offer, validating qualifications, and meeting health and character standards. Our expert consultants help you navigate each country’s specific requirements — whether you're headed to Canada, Germany, Australia, or the UK.
  </p>
  <p>
    At <span className="text-orange-500">VJC Overseas</span>, we go beyond just paperwork. Our services include personalized career assessments, resume enhancement, employer matching, and pre-departure orientation. We also provide support with relocation logistics, accommodation advice, and legal documentation after your visa is granted.
  </p>
  <p>
    International job markets are more open than ever. Countries like Germany are actively seeking skilled workers under programs such as the Skilled Immigration Act, while Canada’s Express Entry system fast-tracks skilled professionals into high-demand sectors. VJC ensures you're aligned with the right stream based on your profile and goals.
  </p>
  <p>
    Many countries now offer fast-track work permits for sectors facing labor shortages — healthcare, IT, construction, hospitality, and manufacturing. Our role is to match your skills with global opportunities where demand is strong and wages are competitive.
  </p>
  <p>
    With digital visa systems and biometric verification becoming common, the process is evolving. Our team stays up to date with these changes to offer real-time updates and zero-delay filing, ensuring you’re always ahead in the queue.
  </p>
  <p>
    Whether you’re a recent graduate or an experienced professional, a work permit visa is your gateway to international exposure, career growth, and financial independence. Many of our clients eventually move towards Permanent Residency (PR) or citizenship through the work route.
  </p>
  <p>
    Trust <span className="text-orange-500">VJC Overseas</span> for complete end-to-end assistance: from identifying the best visa pathway and preparing documentation to securing interviews with reputed global employers. Begin your work-abroad journey with us — your passport to a better future.
  </p>
   {/* Bullet Points */}
<div className="mt-6 p-4 border border-orange-300 bg-orange-50 rounded-xl shadow-md space-y-2">
  <h3 className="text-lg font-semibold text-orange-600">Why Choose VJC Overseas for Your Work Permit Visa?</h3>
  <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
    <li> Expert consultation for over 15+ top migration destinations.</li>
    <li> Industry-specific resume crafting and interview preparation.</li>
    <li> Direct connections with verified international employers.</li>
    <li> Real-time visa updates & document tracking assistance.</li>
    <li> Full relocation support including housing and post-landing services.</li>
    <li> 20,000+ successful overseas placements across healthcare, IT, logistics & more.</li>
    <li> Support for long-term pathways like PR, spouse visas, and citizenship.</li>
    <li> 24/7 dedicated support from our experienced visa success team.</li>
  </ul>
</div>

      </div>

     {/* YouTube Shorts Video (Slim Height) */}
<div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto mt-6 rounded-xl overflow-hidden shadow-lg">
  <div className="relative w-full" style={{ paddingTop: "60%" }}> {/* Less height than 177.78% */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/_Fth_JjW85g?autoplay=1&mute=1&loop=1&playlist=_Fth_JjW85g&controls=0&modestbranding=1&rel=0&showinfo=0"
      title="Work Permit Shorts - VJC Overseas"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
</div>


      {/* Stats */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl shadow-lg px-6 py-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-6 sm:gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">{workersPlaced.toLocaleString()}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Workers Placed Abroad</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-1 text-white text-sm font-medium">Countries Assisted</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{companiesCount}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Hiring Companies</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPermitProcess;
