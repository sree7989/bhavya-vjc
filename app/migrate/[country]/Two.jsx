"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Canadapr from "./Canadapages/Canadawork";
import Ausstud from "./Australia-visa/Aus-stud";
import USAstud from "./USA-visa/USA-stud";
import UKBvisa from "./UK-visa/UKBvisa";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";
import Newzepr from "./Newzealand-visa/Newze-pr";
import Denbusiness from "./Denmark-visa/Den-business";
import UAEstud from "./UAE-visa/UAE-stud";
import sfgerneralskilledvisa from "./southafricavisas/sfgerneralskilledvisa";
import ModalFormWithPopup from "../../Popup/Popup";
import MigrateImageContent from "../../Popup/MigrateImageContent";
import Form from "../Form";
import Link from "next/link";

const countryVisaData = {
  germany: [
    { name: "Germany Opportunity Card", path: "/migrate/germany/opportunity-card" },
    { name: "Germany Work Visa", path: "/migrate/germany/work-visa" },
    { name: "Germany Student Visa", path: "/migrate/germany/student-visa" },
    { name: "Germany Tourist Visa", path: "/migrate/germany/tourist-visa" },
    { name: "Germany Dependent Visa", path: "/migrate/germany/dependent-visa" },
    { name: "Germany Self Employment Visa", path: "/migrate/germany/self-employment-visa" },
  ],
  canada: [
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Student Visa", path: "/migrate/canada/student-visa" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Family Sponsorship Visa", path: "/migrate/canada/family-sponsorship-visa" },
  ],
  "united-states": [
    { name: "USA Student Visa", path: "/migrate/united-states/student-visa" },
    { name: "USA Tourist Visa", path: "/migrate/united-states/tourist-visa" },
    { name: "USA Business Visa", path: "/migrate/united-states/business-visa" },
    { name: "USA H1B Visa", path: "/migrate/united-states/H1B-visa" },
    { name: "USA Investor Visa", path: "/migrate/united-states/investor-visa" },
  ],
  australia: [
    { name: "Australia Student Visa", path: "/migrate/australia/student-visa" },
    { name: "Australia Business Visa", path: "/migrate/australia/business-visa" },
    { name: "Australia Work Visa", path: "/migrate/australia/work-visa" },
    { name: "Australia Family Visa", path: "/migrate/australia/family-visa" },
    { name: "Australia Dependent Visa", path: "/migrate/australia/dependent-visa" },
    { name: "Australia Sponsorship Visa", path: "/migrate/australia/sponsorship-visa" },
  ],
  "united-kingdom": [
    { name: "UK Student Visa", path: "/migrate/united-kingdom/student-visa" },
    { name: "UK Tourist Visa", path: "/migrate/united-kingdom/tourist-visa" },
    { name: "UK business Visa", path: "/migrate/united-kingdom/business-visa" },
    { name: "UK Innovator Visa", path: "/migrate/united-kingdom/innovator-visa" },
    { name: "UK Sponsorship Visa", path: "/migrate/united-kingdom/sponsorship-visa" },
  ],
  "new-zealand": [
    { name: "New Zealand Permanent Resident Visa", path: "/migrate/new-zealand/permanent-resident-visa" },
    { name: "New Zealand Work Visa", path: "/migrate/new-zealand/work-visa" },
    { name: "New Zealand Student Visa", path: "/migrate/new-zealand/skilled-work-visa" },
    { name: "New Zealand Skilled Work Visa", path: "/migrate/new-zealand/skilled-work-visa" },
    { name: "New Zealand Business Visa", path: "/migrate/new-zealand/business-visa" },
    { name: "New Zealand Tourist Visa", path: "/migrate/new-zealand/tourist-visa" },
    { name: "New Zealand Dependent Visa", path: "/migrate/new-zealand/dependent-visa" },
  ],
  "south-africa": [
    { name: "South Africa Critical Skills Visa", path: "/migrate/south-africa/critical-skills-visa" },
    { name: "South Africa General Work Visa", path: "/migrate/south-africa/general-work-visa" },
    { name: "South Africa Business Visa", path: "/migrate/south-africa/business-visa" },
    { name: "South Africa Tourist Visa", path: "/migrate/south-africa/tourist-visa" },
  ],
  "hong-kong": [
    { name: "Hong Kong Student Visa", path: "/migrate/hong-kong/student-visa" },
    { name: "Hong Kong Employment Visa", path: "/migrate/hong-kong/employment-visa" },
    { name: "Hong Kong Business Visa", path: "/migrate/hong-kong/business-visa" },
    { name: "Hong Kong Tourist Visa", path: "/migrate/hong-kong/tourist-visa" },
    { name: "Hong Kong Dependent Visa", path: "/migrate/hong-kong/dependent-visa" },
    { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },
  ],
  denmark: [
    { name: "Denmark Student Visa", path: "/migrate/denmark/student-visa" },
    { name: "Denmark Work Permit Visa", path: "/migrate/denmark/work-permit-visa" },
    { name: "Denmark Tourist Visa", path: "/migrate/denmark/tourist-visa" },
    { name: "Denmark Business Visa", path: "/migrate/denmark/business-visa" },
  ],
  uae: [
    { name: "UAE Student Visa", path: "/migrate/uae/student-visa" },
    { name: "UAE Golden Visa", path: "/migrate/uae/golden-visa" },
    { name: "UAE Work Visa", path: "/migrate/uae/work-visa" },
    { name: "UAE Green Visa", path: "/migrate/uae/green-visa" },
    { name: "UAE Tourist Visa", path: "/migrate/uae/tourist-visa" },
  ],
};

const visaComponents = {
  germany: Goppcardvisa,
  canada: Canadapr,
  "united-states": USAstud,
  australia: Ausstud,
  "united-kingdom": UKBvisa,
  "new-zealand": Newzepr,
  "south-africa": sfgerneralskilledvisa,
  "hong-kong": HKstudentvisa,
  denmark: Denbusiness,
  uae: UAEstud,
};

const backgroundImages = {
  germany: "/germanybgimg.jpg",
  canada: "/canadabgimg.jpg",
  "united-states": "/immigrant-family-usa.jpg",
  australia: "/australiabgimg.jpg",
  "united-kingdom": "/ukk.jpg",
  "new-zealand": "/nzz.jpg",
  "south-africa": "/sa666.png",
  "hong-kong": "/hongkong444.jpg",
  uae: "/uae333.jpg",
  denmark: "/denmark222.jpg",
};

const MigrateCountry = () => {
  const { country } = useParams();
  const visas = countryVisaData[country] || [];
  const DefaultVisaComponent = visaComponents[country] || null;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div
      className={`relative bg-cover bg-center min-h-screen ${
        isImageLoaded ? "bg-loaded" : "bg-loading"
      }`}
    >
      {/* IMAGE + OVERLAY */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImages[country]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* HEADING + TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:ml-8 lg:text-left relative z-10">
          <h1
            className="font-extrabold uppercase leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mt-20 sm:mt-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Migrate to {country.charAt(0).toUpperCase() + country.slice(1)}
          </h1>
          <p
            className="mt-6 text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-orange-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] max-w-xl mx-auto lg:mx-0"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Discover endless opportunities with our expert immigration services.
            Whether you’re looking to study or work abroad, we help make your
            dreams a reality.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full lg:w-1/2 relative z-10 lg:mt-14">
          <Form />
        </div>
      </div>

      {/* VISA OPTIONS + CONTENT */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-6 sm:px-10 py-10 items-center lg:items-start gap-8">
        {/* Dynamic Content */}
        <div className="w-full lg:flex-1 overflow-y-auto max-h-[800px] px-6 sm:px-8 py-6 rounded-xl shadow-md border border-gray-200 order-first lg:order-last">
          {DefaultVisaComponent ? (
            <DefaultVisaComponent />
          ) : (
            <p className="text-center text-gray-600">Select a visa option to view details.</p>
          )}
        </div>

        {/* Visa Options */}
        <div className="w-full lg:w-[350px] flex-shrink-0 order-last lg:order-first">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-6 text-center">
            Visa Options for {country.charAt(0).toUpperCase() + country.slice(1)}
          </h2>
          <div className="mt-4 mb-10 flex justify-center lg:hidden">
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
    >
      <span className="relative z-10">Apply Now</span>
      <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
    </button>
  </div>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className="w-full sm:w-[320px] lg:w-[350px] flex items-center justify-between text-base sm:text-lg font-semibold bg-white text-black border border-orange-500 px-5 py-4 rounded-xl shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
              >
                {name}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<MigrateImageContent />}
      />
    </div>
  );
};

export default MigrateCountry;
