"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginModal from "./LoginModal";

const companyLogos = [
  "/hp.png", "/ibm.png", "/tcs.png", "/infosys.png", "/google.webp",
  "/amazon.jpg", "/hcl.png", "/accenture.png", "/apple.webp", "/Microsoft.webp",
  "/Kalven-logo.png", "/LOGO-VJC.png", "/Deloitte-Logo.png", "/intel.png", "/flipkart-logo.png", "/starbucks.webp",
];

const countries = [
  "UAE", "Luxembourg", "UK", "Ireland", "Singapore",
  "Malaysia", "Germany", "Canada", "Australia", "South Africa", "Denmark",
];

const newsTickerMessages = [
  "Visa sponsorship available for skilled tech professionals 🌍",
  "Explore high-paying jobs in Germany, Canada, and Australia 🚀",
  "Resume feedback and visa consultation now available 💼",
  "Upload your resume and fast-track your overseas career 📤",
  "Jobs open for React, Node.js, DevOps, and AWS specialists 💻",
];

const testimonials = [
  {
    name: "Aarav M.",
    text: "VJC helped me land a job in Germany with visa support – amazing support and guidance!",
    country: "Germany",
    image: "/users/user1.jpg",
  },
  {
    name: "Samantha R.",
    text: "I got my PR processed in record time. Truly professional service by VJC!",
    country: "Canada",
    image: "/users/user2.jpg",
  },
  {
    name: "Priya K.",
    text: "From resume reviews to interviews – VJC made my overseas journey smooth!",
    country: "Australia",
    image: "/users/user3.jpg",
  },
];

const JobPortalPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [counter, setCounter] = useState({ placed: 8500, approved: 4800, clients: 100 });

  const router = useRouter();

  const hydrateUser = () => {
    const storedUser = localStorage.getItem("vjcUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      const image = localStorage.getItem(`profile_image_${parsedUser.email}`);
      if (image) setProfileImage(image);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("vjcUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      const image = localStorage.getItem(`profile_image_${parsedUser.email}`);
      if (image) setProfileImage(image);
    } else {
      setShowLoginModal(true);
    }

    const interval = setInterval(() => {
      setCounter(prev => ({
        placed: prev.placed + Math.floor(Math.random() * 5),
        approved: prev.approved + Math.floor(Math.random() * 3),
        clients: prev.clients + (Math.random() < 0.3 ? 1 : 0),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (link) => router.push(link);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    if (storedUser) {
      localStorage.removeItem(`resume_uploaded_${storedUser.email}`);
    }
    localStorage.removeItem("vjcUser");
    setUser(null);
    setProfileImage(null);
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {showLoginModal && (
        <LoginModal
          setUser={setUser}
          setShowLoginModal={setShowLoginModal}
          onSuccess={hydrateUser}
        />
      )}

      <div className="px-4 pt-6 pb-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-blue-900">
          A World of Opportunities, A Future of Success – Abroad is Calling! 
        </h1>

        {user && (
          <div className="flex items-center justify-center gap-4 mb-6">
            {profileImage ? (
              <Image src={profileImage} alt="Profile" width={48} height={48} className="rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300" />
            )}
            <div className="text-center sm:text-left text-sm">
              <p className="font-semibold text-blue-800">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <button onClick={handleLogout} className="text-xs mt-1 underline text-red-500 hover:text-red-600">
                Logout
              </button>
            </div>
          </div>
        )}

        {/* News Ticker */}
        <div className="overflow-hidden bg-orange-200 border border-orange-500 rounded px-4 py-2 mb-8">
          <div className="whitespace-nowrap hover:[animation-play-state:paused] animate-marquee text-blue-900 font-medium">
            {newsTickerMessages.map((msg, idx) => (
              <span key={idx} className="inline-block mr-16">🚀 {msg}</span>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <h2 className="text-xl sm:text-3xl font-semibold text-center text-blue-900 mb-6">
          Companies We’re Tied Up With
        </h2>
        <div className="overflow-hidden whitespace-nowrap mb-6 relative">
          <div className="animate-marquee inline-flex gap-5 py-1">
           {companyLogos.concat(companyLogos).map((logo, idx) => (
  <div key={idx} style={{ width: "80px", height: "60px", position: "relative" }}>
    <Image
      src={logo}
      alt={`Company Logo ${idx}`}
      fill
      sizes="(max-width: 768px) 80px, 80px"
      className="object-contain rounded shadow"
    />
  </div>
))}

          </div>
        </div>
         
        {/* Country Cards */}
        <h2 className="text-xl sm:text-3xl font-semibold text-center text-blue-900 mb-8">
          Countries We Assist With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            const link = `/abroad-jobs-work-permit.com/${country.toLowerCase().replace(/\s+/g, "-")}`;
            const bgImg = `/job-images/${country.toLowerCase().replace(/\s+/g, "-")}.webp`;
            return (
              <div key={index} className="flip-card cursor-pointer" onClick={() => handleCardClick(link)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="relative w-full h-full rounded-2xl">
                      <div className="absolute bottom-0 w-full h-[30%] bg-black/60 flex items-center justify-center rounded-b-2xl">
                        <h2 className="text-white text-lg font-semibold">{country}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center p-4 rounded-2xl">
                      <h2 className="text-white text-xl font-bold mb-3">{country}</h2>
                      <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-yellow-300 transition">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      

      
      </div>

      {/* Styles */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 260px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          border-radius: 1rem;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .flip-card-front { background-color: #fff; }
        .flip-card-back { transform: rotateY(180deg); }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default JobPortalPage;
