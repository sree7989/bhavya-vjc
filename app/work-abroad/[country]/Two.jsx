"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Germany from "./Germany";
import Canada from "./Canada";
import H1b from "./H1b";
import Australia from "./Australia";
import Denmark from "./Denmark";
import Uk from "./Uk";
import Dubai from "./Dubai";
import Form from "../Form";
import Link from "next/link";

const countryVisaData = {
  "germany-work-permit": [
    { name: "Opportunity Card", path: "/work-abroad/germany-work-permit/opportunity-card" },
    { name: "Job Seeker Visa", path: "/work-abroad/germany-work-permit/job-seeker-visa" },
    { name: "Blue Card", path: "/work-abroad/germany-work-permit/blue-visa" },
    { name: "Skilled Work Permit Visa", path: "/work-abroad/germany-work-permit/work-permit-visa" },
    { name: "Employment Visa", path: "/work-abroad/germany-work-permit/employment-visa" },
    { name: "Freelance Visa", path: "/work-abroad/germany-work-permit/freelance-visa" },
  ],
  "canada-work-permit": [
    { name: "Open Work Permit Visa", path: "/work-abroad/canada-work-permit/open-work-permit" },
    { name: "W1 Visa", path: "/work-abroad/canada-work-permit/w1-visa" },
    { name: "LMIA Visa", path: "/work-abroad/canada-work-permit/lmia" },
    { name: "CANADA WORK PERMIT", path: "/migrate/canada/work-permit" },
    { name: "CANADA EXPRESS ENTRY", path: "/pr-visas/canada-pr/canada-express-entry" },
  ],
  "usa-h1b-visa": [
    { name: "USA H1b Visa", path: "/work-abroad/usa-h1b-visa" }, 
    { name: "USA Tourist Visa", path: "/migrate/united-states/tourist-visa" },
    { name: "USA Visit Visa", path: "/visit-visas/usa" },
    { name: "USA Investor Visa", path: "/investor-visas/usa" },
    { name: "USA Resume Marketing", path: "/resume-marketing/usa" },
    ],
  "australia-work-permit": [
    { name: "Temporary Skills 482 Visa", path: "/work-abroad/australia-work-permit/482-visa" },
    { name: "Employer 186 Visa", path: "/work-abroad/australia-work-permit/employer-186-visa" },
    { name: "Skilled Independent Work Visa Subclass 189", path: "/work-abroad/australia-work-permit/work-visa-subclass-189" },
    { name: "Skilled Nominated Visa Subclass 190", path: "/work-abroad/australia-work-permit/nomited-visa-subclass-190" },
    { name: "Working Holiday 417 Visa", path: "/work-abroad/australia-work-permit/working-holiday-417-visa" },
  ],
  "united-kingdom-work-permit": [
    { name: "Short Term Work Visa", path: "/work-abroad/united-kingdom-work-permit/uk-short-term-work-visa" },
    { name: "Long Term Work Visa", path: "/work-abroad/united-kingdom-work-permit/uk-long-term-work-visa" },
    { name: "Health and Care Worker Visa", path: "/work-abroad/united-kingdom-work-permit/uk-health-and-care-worker-visa" },
    { name: "Skilled Worker Visa", path: "/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa" },
    { name: "Tier 2 Visa", path: "/work-abroad/united-kingdom-work-permit/uk-tire-2-visa" },
    { name: "Tier 4 Visa", path: "/work-abroad/united-kingdom-work-permit/uk-tire-4-visa" },
  ],
  "denmark-work-permit": [
    { name: "Pay Limit Scheme Visa", path: "/work-abroad/denmark-work-permit/denmark-pay-limit-scheme-visa" },
    { name: "Positive List Visa", path: "/work-abroad/denmark-work-permit/denmark-positive-list-visa" },
    { name: "Trainee Visa", path: "/work-abroad/denmark-work-permit/denmark-trainee-visa" },
    { name: "Employment Visa", path: "/work-abroad/denmark-work-permit/denmark-employment-visa" },
  ],
  "dubai-work-permit": [
    { name: "Standard Work Visa", path: "/work-abroad/dubai-work-permit/dubai-standard-work-visa" },
    { name: "Green Visa", path: "/work-abroad/dubai-work-permit/dubai-green-visa" },
    { name: "Golden Visa", path: "/work-abroad/dubai-work-permit/dubai-golden-visa" },
     { name: "Dubai Visit Visa", path: "/visit-visas/dubai" },
    { name: "Study in Dubai", path: "/study-abroad/dubai" },
  ],
};

const visaComponents = {
  "germany-work-permit": Germany,
  "canada-work-permit": Canada,
  "usa-h1b-visa": H1b,
  "australia-work-permit": Australia,
  "united-kingdom-work-permit": Uk,
  "denmark-work-permit": Denmark,
  "dubai-work-permit": Dubai,
};

const backgroundImages = {
  "germany-work-permit": "/germany.jpg",
  "canada-work-permit": "/canada.webp",
  "usa-h1b-visa": "/usabgimg.jpg",
  "australia-work-permit": "/australiaresume.jpg",
  "united-kingdom-work-permit": "/ukk.jpg",
  "denmark-work-permit": "/de.jpg",
  "dubai-work-permit": "/du.webp",
};

const WorkabroadCountry = () => {
  const router = useRouter();
  const params = useParams();
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [currentCountry, setCurrentCountry] = useState("");

  useEffect(() => {
    const newCountry = params?.country;
    setCurrentCountry(newCountry);
    const VisaComponent = visaComponents[newCountry] || null;
    setSelectedComponent(VisaComponent ? <VisaComponent /> : null);
  }, [params?.country]);

  const formattedCountry =
    currentCountry?.charAt(0).toUpperCase() + currentCountry?.slice(1).replace(/-/g, " ");
  const visas = countryVisaData[currentCountry] || [];
  const bgImage = backgroundImages[currentCountry];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-8 min-h-screen bg-black/40 backdrop-blur-sm">
        <div className="w-full lg:w-1/2 lg:ml-16 text-center lg:text-left px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-0">
          <h1 className="font-semibold uppercase break-words whitespace-normal leading-snug text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md" style={{ fontFamily: "Times New Roman, serif" }}>
            {formattedCountry}
          </h1>
          <p className="text-white font-medium text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-6 text-center lg:text-left drop-shadow-sm" style={{ fontFamily: "Times New Roman, serif" }}>
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-10">
          <Form />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-white to-orange-50 px-4 sm:px-8 lg:px-16 py-10 gap-8">
        <div className="w-full lg:w-[350px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-gradient-to-r from-orange-600 to-black bg-clip-text mb-6">
            Visa Options for {formattedCountry}
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className="w-full max-w-[320px] flex items-center justify-between text-sm sm:text-lg font-semibold bg-white text-black border border-orange-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-2xl hover:bg-orange-500 hover:text-white transition duration-300"
              >
                {name}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full lg:flex-1 overflow-y-auto max-h-[700px] bg-white px-4 sm:px-6 py-4 rounded-xl shadow-md border border-gray-200">
          {selectedComponent || (
            <p className="text-center text-gray-600 text-base sm:text-lg font-semibold">
              Select a visa option to view details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkabroadCountry;
