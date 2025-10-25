"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Form from '../../Form';
import Link from "next/link";

import Goppcardvisa from './Germany-visa/Goppcardvisa';
import Jobseeker from './Germany-visa/Jobseeker';
import Gfreelance from './Germany-visa/Gfreelance';
import Gblue from './Germany-visa/Gblue';
import Gselfempvisa from './Germany-visa/Gselfempvisa';
import Gsworkpermitvisa from './Germany-visa/Gsworkpermitvisa';

import Canadaopenwp from './Canadapages/Canadaopenwp';
import Canadaw1 from './Canadapages/Canadaw1';
import Canadalmia from './Canadapages/Canadalmia';

import Shortwvisa from './Ukpages/Shortwvisa';
import Longtermwvisa from './Ukpages/Longtermwvisa';
import Tier4visa from './Ukpages/Tier4visa';
import Tier2visa from './Ukpages/Tier2visa';
import Skilledworkvisa from './Ukpages/Skilledworkvisa';
import Healthcare from './Ukpages/Healthcare';

import Aus482 from "./Australia-visa/Aus482"
import Aus186 from "./Australia-visa/Aus186"
import Aus189 from "./Australia-visa/Aus189"
import Aus417 from "./Australia-visa/Aus417"
import Aus190 from "./Australia-visa/Aus190";

import HKtourist from "./HongKongpages/HKtourist";
import HKemployee from "./HongKongpages/HKemployee";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";
import HKbusiness from "./HongKongpages/HKbusiness";
import HKdependent from "./HongKongpages/HKdependent";
import HKwork from "./HongKongpages/HKwork";

import Dentrainee from "./Denmark-visa/Dentrainee"
import Denpositivelist from "./Denmark-visa/Denpositivelist"
import Denpaylimit from "./Denmark-visa/Denpaylimit"
import Denworkemp from "./Denmark-visa/Denworkemp"


import Standardwork from "./Dubai-visa/Standardwork";
import Dubaigolden from "./Dubai-visa/Dubaigolden";
import UAEwork from "./Dubai-visa/Standardwork";
import Dubaigreen from "./Dubai-visa/Dubaigreen";
import UAEtourist from "./Dubai-visa/UAE-tourist";








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
  'germany-work-permit-opportunity-card': Goppcardvisa,
  'germany-work-permit-job-seeker-visa': Jobseeker,
  'germany-work-permit-freelance-visa': Gfreelance,
  'germany-work-permit-blue-visa': Gblue,
  'germany-work-permit-employment-visa': Gselfempvisa,
  'germany-work-permit-work-permit-visa': Gsworkpermitvisa,

  'canada-work-permit-open-work-permit': Canadaopenwp,
  'canada-work-permit-w1-visa':Canadaw1,
  'canada-work-permit-lmia':Canadalmia,

  'united-kingdom-work-permit-uk-short-term-work-visa':Shortwvisa,
  'united-kingdom-work-permit-uk-long-term-work-visa':Longtermwvisa,
  'united-kingdom-work-permit-uk-tire-4-visa':Tier4visa,
  'united-kingdom-work-permit-uk-tire-2-visa':Tier2visa,
  'united-kingdom-work-permit-uk-skilled-worker-visa':Skilledworkvisa,
  'united-kingdom-work-permit-uk-health-and-care-worker-visa':Healthcare,
  
  'australia-work-permit-482-visa':Aus482,
 'australia-work-permit-working-holiday-417-visa':Aus417,
 'australia-work-permit-nomited-visa-subclass-190':Aus190,
 'australia-work-permit-employer-186-visa':Aus186,
 'australia-work-permit-work-visa-subclass-189':Aus189,


 'hong-kong-student-visa':HKstudentvisa,
 'hong-kong-employment-visa':HKemployee,
 'hong-kong-business-visa':HKbusiness,
 'hong-kong-tourist-visa':HKtourist,
 'hong-kong-dependent-visa':HKdependent,
 'hong-kong-work-visa':HKwork,

 'denmark-work-permit-denmark-positive-list-visa':Denpositivelist,
 'denmark-work-permit-denmark-employment-visa':Denworkemp,
 'denmark-work-permit-denmark-pay-limit-scheme-visa': Denpaylimit,
 'denmark-work-permit-denmark-trainee-visa':Dentrainee,

 'dubai-work-permit-dubai-standard-work-visa':Standardwork,
 'dubai-work-permit-dubai-golden-visa':Dubaigolden,
 'uae-work-visa':UAEwork,
 'dubai-work-permit-dubai-green-visa':Dubaigreen,
 'uae-tourist-visa':UAEtourist,


  
 
};

const defaultBackgroundImages = {
  germany: '/germanyimg.jpg',
  canada: '/canadabgimg.jpg',
  "united-states": '/usabgimg.jpg',
  australia: '/australiabgimg.jpg',
  // add other countries as needed
};


 const visaBackgroundImages = {
  "/work-abroad/germany-work-permit/opportunity-card": "/vjc-gop.png",
  "/work-abroad/germany-work-permit/job-seeker-visa": "/vjc-gwvisa.jpg",
  "/work-abroad/germany-work-permit/blue-visa":"/germanybluecard.jpg",
  "/work-abroad/germany-work-permit/work-permit-visa":"/workvisa.jpg",
  "/work-abroad/germany-work-permit/employment-visa":"/vjc-gdvisa.jpg",
  "/work-abroad/germany-work-permit/freelance-visa":"/vjc-gtvisa.jpg",

  "/work-abroad/canada-work-permit/open-work-permit":"/canadaopen.webp",
  "/work-abroad/canada-work-permit/lmia":"/lmia.jpg",
  "/work-abroad/canada-work-permit/w1-visa":"/workpermitcanada.jpg",
  
  "/work-abroad/usa-h1b-visa":"/USAh1b.png",
  
  "/work-abroad/australia-work-permit/482-visa":"/ausworkabroad.webp",
  "/work-abroad/australia-work-permit/employer-186-visa":"/Employer186Visa.jpg",
  "/work-abroad/australia-work-permit/work-visa-subclass-189":"/SkilledIndependentWorkVisaSubclass189.jpg",
  "/work-abroad/australia-work-permit/nomited-visa-subclass-190":"/SkilledNominatedVisaSubclass190.webp",
  "/work-abroad/australia-work-permit/working-holiday-417-visa":"/WorkingHoliday417Visa.jpg",

  "/work-abroad/united-kingdom-work-permit/uk-short-term-work-visa":"/ShortTermWorkVisa.webp",
  "/work-abroad/united-kingdom-work-permit/uk-long-term-work-visa":"/LongTermWorkVisa.jpg",
  "/work-abroad/united-kingdom-work-permit/uk-health-and-care-worker-visa":"/Healthcare.jpg",
  "/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa":"/ukskilled.jpg",
  "/work-abroad/united-kingdom-work-permit/uk-tire-2-visa":"/tier2.webp",
  "/work-abroad/united-kingdom-work-permit/uk-tire-4-visa":"/tier4.jpg",
  "/work-abroad/united-kingdom-work-permit/uk-work-permit-visa":"/WorkPermitVisauk.jpeg",

  "/work-abroad/denmark-work-permit/denmark-pay-limit-scheme-visa":"/PayLimitSchemeVisa.jpg",
  "/work-abroad/denmark-work-permit/denmark-positive-list-visa":"/PositiveListVisadenmark.png",
  "/work-abroad/denmark-work-permit/denmark-trainee-visa":"/TraineeVisadenmark.webp",
  "/work-abroad/denmark-work-permit/denmark-employment-visa":"/EmploymentVisadenmark.jpg",

  "/work-abroad/dubai-work-permit/dubai-standard-work-visa":"/StandardWorkVisa.jpg",
  "/work-abroad/dubai-work-permit/dubai-green-visa":"/greenvisaVisadubai.png",
  "/work-abroad/dubai-work-permit/dubai-golden-visa":"/nzdepend.jpg",
  "/work-abroad/dubai-work-permit/dubai-work-permit-visa":"/WorkPermitVisauk.jpeg",
  
  // If a visa path does not have a specific image, fallback to the country background.
};


const WorkabroadCountry = () => {
  const router = useRouter();
  const { country, visas } = useParams();

  const visasList = countryVisaData[country] || [];
  const defaultVisaTitle = visasList.length ? visasList[0].name : '';

  const [selectedVisaPath, setSelectedVisaPath] = useState(null);
  const [selectedVisaTitle, setSelectedVisaTitle] = useState(defaultVisaTitle);

  const VisaComponent = visas
    ? visaComponents[`${country}-${visas}`]
    : country === 'germany-work-permit'
    ? Goppcardvisa
    : null;

  useEffect(() => {
    if (visas) {
      const matchedVisa = visasList.find(v => v.path === `/work-abroad/${country}/${visas}`);
      if (matchedVisa) {
        setSelectedVisaTitle(matchedVisa.name);
        setSelectedVisaPath(matchedVisa.path);
      }
    }
  }, [visas, country, visasList]);

  const currentBackgroundImage =
    (selectedVisaPath && visaBackgroundImages[selectedVisaPath]) ||
    defaultBackgroundImages[country];

  return (
    <div>
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center lg:text-left text-center mt-8 lg:mt-8 lg:ml-16">
          <h1 className="font-semibold uppercase bg-gradient-to-r from-white to-gray-500 inset-0 bg-black/60 bg-clip-text text-transparent text-4xl lg:text-6xl lg:mb-4 lg:mt-4">
            {selectedVisaTitle}
          </h1>
          <p className="text-white mt-4 lg:mt-2 font-bold">
            Discover endless opportunities with our expert immigration services.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:mr-16">
          <Form />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country?.toUpperCase()}
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
           {visasList.map(({ name, path }) => {
  const isSelected = selectedVisaPath === path;
  return (
    <Link
      key={path}
      href={path}
      className={`w-full max-w-[320px] flex items-center justify-between text-sm sm:text-lg font-semibold 
        border border-orange-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md transition duration-300
        ${isSelected 
          ? 'bg-orange-500 text-white shadow-2xl'  // permanent "hover" style for selected
          : 'bg-white text-black hover:shadow-2xl hover:bg-orange-500 hover:text-white' // default with hover
        }`}
    >
      <span className=" cursor-pointer">{name}</span>
      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
    </Link>
  );
})}

          </div>
        </div>

        <div className="w-full lg:flex-1 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 lg:ml-9">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default WorkabroadCountry;