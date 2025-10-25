"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const StudentVisaProcess = () => {
  const countries = [
    { name: "USA", path: "/usa" },
    { name: "UK", path: "/uk" },
    { name: "Canada", path: "/studycanada" },
    { name: "Australia", path: "/studyaustralia" },
    { name: "Germany", path: "/studyingermany" },
    { name: "Italy", path: "/italy" },
    { name: "France", path: "/france" },
    { name: "Singapore", path: "/singapore" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "South Africa", path: "/studyinsouthafrica" },
    { name: "New Zealand", path: "/studyinnewzealand" },
    { name: "Philippines", path: "/philippines" },
    { name: "Poland", path: "/poland" },
    { name: "Ireland", path: "/ireland" },
    { name: "Spain", path: "/spain" },
    { name: "Sweden", path: "/sweden" },

    { name: "Norway", path: "/norway" },
    
  ];

  const [studentsPlaced, setStudentsPlaced] = useState(1);
  const [countriesCount, setCountriesCount] = useState(1);
  const [universitiesCount, setUniversitiesCount] = useState(1);

  const maxStudents = 50000;
  const maxCountries = countries.length;
  const maxUniversities = 150;

 useEffect(() => {
  let s = 1, c = 1, u = 1;

  const studentInterval = setInterval(() => {
    s += 50;
    setStudentsPlaced(s > maxStudents ? maxStudents : s);
    if (s >= maxStudents) clearInterval(studentInterval);
  }, 20);

  const countryInterval = setInterval(() => {
    c += 1;
    setCountriesCount(c > maxCountries ? maxCountries : c);
    if (c >= maxCountries) clearInterval(countryInterval);
  }, 100);

  const universityInterval = setInterval(() => {
    u += 2;
    setUniversitiesCount(u > maxUniversities ? maxUniversities : u);
    if (u >= maxUniversities) clearInterval(universityInterval);
  }, 30);

  return () => {
    clearInterval(studentInterval);
    clearInterval(countryInterval);
    clearInterval(universityInterval);
  };
}, [maxStudents, maxCountries, maxUniversities]);


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
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">
        Student Visa Process with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Country Buttons with Full Labels */}
      <div
        className="rounded-xl p-4 mb-10 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Choose Your Destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {countries.map((c, i) => (
            <Link key={i} href={c.path}>
  <div className="px-4 py-3 bg-white/70 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
    {c.name} Student Visa Process
  </div>
</Link>

          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-700 text-justify">
        <p>
          Navigating the student visa process can seem overwhelming, but with <span className="text-orange-500">  VJC Overseas</span> by your side, it becomes a straightforward and manageable journey. We provide expert guidance from start to finish, ensuring all your documents, applications, and requirements are handled accurately and efficiently.
        </p>
        <p>
         Our dedicated counsellors stay updated with the latest immigration policies and visa regulations for popular study destinations like the USA, Canada, UK, Australia, Germany, and more. This means you receive reliable advice tailored to your specific country of interest.
        </p>
        <p>
          From helping you select the right course and university to assisting with the visa interview preparation, we offer comprehensive support that maximizes your chances of visa approval. We also provide post-visa services such as pre-departure briefings and assistance with accommodation and travel arrangements.
        </p>
        <p>
          Studying abroad opens a world of opportunities, and <span className="text-orange-500">  VJC Overseas </span>is committed to making your dream come true. Our transparent, step-by-step approach and personalized care ensure that your student visa process is smooth, stress-free, and successful.
        </p>
        <p>
          In recent times, the student visa landscape has seen major shifts. Many countries have implemented more digitized systems for visa applications, and several are now fast-tracking student permits to boost their international education sectors post-COVID. This opens up quicker, more efficient routes for students who meet the right criteria.
        </p>
        <p>
          Additionally, emerging destinations like Germany, Ireland, and Sweden have become increasingly popular due to low tuition fees, extended post-study work visas, and growing job markets. <span className="text-orange-500">  VJC Overseas</span> stays ahead of these trends, ensuring our students take full advantage of the latest opportunities available globally.
        </p>
        <p>At <span className="text-orange-500">  VJC Overseas</span>, we continuously monitor global education trends and visa reforms to provide our students with the most up-to-date, competitive, and strategic advice. Whether you're aiming for top-ranked universities or cost-effective programs with strong career prospects, our expert guidance ensures that you never miss an opportunity. With our tailored approach and global insights, your dream to study abroad becomes a powerful reality — secure, successful, and future-ready.

</p>
      </div>

      {/* YouTube Video */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mt-6">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
          title="VJC Overseas Student Visa Process"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* CTA Stats */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl shadow-lg px-6 py-6 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-6 sm:gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white">{studentsPlaced.toLocaleString()}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Students Placed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-1 text-white text-sm font-medium">Countries Covered</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white">{universitiesCount}+</h2>
          <p className="mt-1 text-white text-sm font-medium">Universities Partnered</p>
        </div>
      </div>
    </div>
  );
};

export default StudentVisaProcess;
