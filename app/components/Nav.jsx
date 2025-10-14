"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState({});
const [mobileSubSubMenu, setMobileSubSubMenu] = useState({});
  const menuItems = [
    { name: "Home", path: "/" },
    // { name: "About us", path: "/about-us" },
    { name: "Migrate To", path: "/migrate" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "PR Visas", path: "/pr-visas" },
    { name: "Work Abroad", path: "/work-abroad" },
    { name: "Job Seeker Visas", path: "/jobseeker-visas" },
    { name: "Visit Visas", path: "/visit-visas" },
    { name: "Investor Visas", path: "/investor-visas" },
    { name: "Schengen Visas", path: "/schengen-visas" },
    { name: "Resume Marketing", path: "/resume-marketing" },
    { name: "Coaching/Training", path: "/coaching-training" },
    { name: "Tours/Ticketing", path: "/tours-ticketing" },

  ];

  const extraItems = [
    { name: "Jobs Abroad ", path: "/abroad-jobs-work-permit.com" },
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
    
  ];
   const getSubMenu = (itemName) => {
    switch (itemName) {
      case "Migrate To":
        return migrateSubPages;
      case "PR Visas":
        return prVisaSubPages;
      case "Job Seeker Visas":
        return jobseeker;
      case "Work Abroad":
        return workabroadSubPages;
      case "Investor Visas":
        return investorvisasSubPages;
      case "Services":
        return servicesSubPages;
      case "Coaching/Training":
        return coachingSubPages;
      case "Resume Marketing":
        return resumemarketingSubPages;
      case "Study Abroad":
        return studyabroadSubPages;
      case "Tours/Ticketing":
        return toursticketingSubPages;
      case "Visit Visas":
        return visitvisasSubPages;
      case "Schengen Visas":
        return schengenSubPages;
      default:
        return null;
    }
  };
  const fixedItems = [
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const migrateSubPages = [
    {
      name: "Germany",
      path: "/migrate/germany",
      children: [
        {
          name: "Germany Opportunity Card",
          path: "/migrate/germany/opportunity-card",
        },
        { name: "Germany Work Visa", path: "/migrate/germany/work-visa" },
        { name: "Germany Student Visa", path: "/migrate/germany/student-visa" },
        { name: "Germany Tourist Visa", path: "/migrate/germany/tourist-visa" },
        {
          name: "Germany Dependent Visa",
          path: "/migrate/germany/dependent-visa",
        },
        {
          name: "Germany Self Employment Visa",
          path: "/migrate/germany/self-employment-visa",
        },
      ],
    },

    {
      name: "Canada",
      path: "/migrate/canada",
      children: [
        { name: "Canada Work permit", path: "/migrate/canada/work-permit" },
        { name: "Canada Student Visa", path: "/migrate/canada/student-visa" },
        { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
        { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
        {
          name: "Canada Family Sponsorship Visa",
          path: "/migrate/canada/family-sponsorship-visa",
        },
      ],
    },

    {
      name: "United States",
      path: "/migrate/united-states",
      children: [
        {
          name: "USA Student Visa",
          path: "/migrate/united-states/student-visa",
        },
        {
          name: "USA Tourist Visa",
          path: "/migrate/united-states/tourist-visa",
        },
        {
          name: "USA Business Visa",
          path: "/migrate/united-states/business-visa",
        },
        { name: "USA H1B Visa", path: "/migrate/united-states/H1B-visa" },
        { name: "USA Investor Visa", path: "/migrate/united-states/investor-visa" },
      ],
    },
    { name: "Australia", path: "/migrate/australia",
       children: [
        {
          name: "Australia Student Visa",
          path: "/migrate/australia/student-visa",
        },
         {
          name: "Australia Business Visa",
          path: "/migrate/australia/business-visa",
        },
         {
          name: "Australia Work Visa",
          path: "/migrate/australia/work-visa",
        },
         {
          name: "Australia Family Visa",
          path: "/migrate/australia/family-visa",
        },
         {
          name: "Australia Dependent Visa",
          path: "/migrate/australia/dependent-visa",
        },
         {
          name: "Australia Sponsorship Visa",
          path: "/migrate/australia/sponsorship-visa",
        },

       ],
     },
    { name: "United Kingdom", path: "/migrate/united-kingdom",
       children: [
        { name: "UK Student Visa", path: "/migrate/united-kingdom/student-visa" },
         { name: "UK Tourist Visa", path: "/migrate/united-kingdom/tourist-visa" },
          { name: "UK Business Visa", path: "/migrate/united-kingdom/business-visa" },
           { name: "UK Innovator Visa", path: "/migrate/united-kingdom/innovator-visa" },
            { name: "UK Sponsorship Visa", path: "/migrate/united-kingdom/sponsorship-visa" },

       ],
     },
    { name: "New Zealand", path: "/migrate/new-zealand",
       children: [
        { name: "New Zealand Permanent Resident Visa", path: "/migrate/new-zealand/permanent-resident-visa" },
         { name: "New Zealand Work Visa", path: "/migrate/new-zealand/work-visa" },
          { name: "New Zealand Student Visa", path: "/migrate/new-zealand/student-work-visa" },
           { name: "New Zealand Skilled Work Visa", path: "/migrate/new-zealand/skilled-work-visa" },
            { name: "New Zealand Business Visa", path: "/migrate/new-zealand/business-visa" },
             { name: "New Zealand Tourist Visa", path: "/migrate/new-zealand/tourist-visa" },
              { name: "New Zealand Dependent Visa", path: "/migrate/new-zealand/dependent-visa" },

       ],
     },
    { name: "South Africa", path: "/migrate/south-africa",
       children: [
        { name: "South Africa Critical Skills Visa", path: "/migrate/south-africa/critical-skills-visa" },
        { name: "South Africa General Work Visa", path: "/migrate/south-africa/general-work-visa" },
         { name: "South Africa Business Visa", path: "/migrate/south-africa/business-visa" },
          { name: "South Africa Tourist Visa", path: "/migrate/south-africa/tourist-visa" },
       ],
     },
    { name: "Hong Kong", path: "/migrate/hong-kong",
       children: [
        { name: "Hong Kong Student Visa", path: "/migrate/hong-kong/student-visa" },
        { name: "Hong Kong Employment Visa", path: "/migrate/hong-kong/employment-visa" },
        { name: "Hong Kong Business Visa", path: "/migrate/hong-kong/business-visa" },
        { name: "Hong Kong Tourist Visa", path: "/migrate/hong-kong/tourist-visa" },
        { name: "Hong Kong Dependent Visa", path: "/migrate/hong-kong/dependent-visa" },
        { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },

      
       ],
     },
    { name: "Denmark", path: "/migrate/denmark",
       children: [
        { name: "Denmark Student Visa", path: "/migrate/denmark/student-visa" },
         { name: "Denmark Work Permit Visa", path: "/migrate/denmark/work-permit-visa" },
          { name: "Denmark Tourist Visa", path: "/migrate/denmark/tourist-visa" },
           { name: "Denmark Business Visa", path: "/migrate/denmark/business-visa" },

       ],
     },
    { name: "UAE", path: "/migrate/uae",
       children: [
        { name: "UAE Student Visa", path: "/migrate/uae/student-visa" },
          { name: "UAE Golden Visa", path: "/migrate/uae/golden-visa" },
           { name: "UAE Work Visa", path: "/migrate/uae/work-visa" },
            { name: "UAE Green Visa", path: "/migrate/uae/green-visa" },
             { name: "UAE Tourist Visa", path: "/migrate/uae/tourist-visa" },

       ],
     },
  ];

  const coachingSubPages = [
    { name: "IELTS", path: "/coaching-training/ielts" },
    { name: "GMAT", path: "/coaching-training/gmat" },
    { name: "GRE", path: "/coaching-training/gre" },
    { name: "DUOLINGO", path: "/coaching-training/duolingo" },
    { name: "PTE", path: "/coaching-training/pte" },
    { name: "TOEFL", path: "/coaching-training/toefl" },
  ];

  const workabroadSubPages = [
    { name: "Germany Work Permit", path: "/work-abroad/germany-work-permit",
       children: [
        { name: "Opportunity Card", path: "/work-abroad/germany-work-permit/opportunity-card" },
         { name: "Job Seeker Visa", path: "/work-abroad/germany-work-permit/job-seeker-visa" },
          { name: "Blue Card", path: "/work-abroad/germany-work-permit/blue-visa" },
           { name: "Skilled Work permit Visa", path: "/work-abroad/germany-work-permit/work-permit-visa" },
            { name: "Employment Visa", path: "/work-abroad/germany-work-permit/employment-visa" },
             { name: "Freelance Visa", path: "/work-abroad/germany-work-permit/freelance-visa" },
        
       ],
     },
    { name: "Canada Work Permit", path: "/work-abroad/canada-work-permit",
       children: [
        { name: "Open Work Permit Visa", path: "/work-abroad/canada-work-permit/open-work-permit" },
         { name: "W1 Visa", path: "/work-abroad/canada-work-permit/w1-visa" },
          { name: "LMIA Visa", path: "/work-abroad/canada-work-permit/lmia" },
       ],
     },
    { name: "USA H1b Visa", path: "/work-abroad/usa-h1b-visa",
       
     },
    {
      name: "Australia Work Permit",
      path: "/work-abroad/australia-work-permit",
       children: [
        { name: "Temporary Skills 482 Visa", path: "/work-abroad/australia-work-permit/482-visa" },
        { name: "Employer 186 Visa", path: "/work-abroad/australia-work-permit/employer-186-visa" },
        { name: "Skilled Independent Work visa Subclass 189", path: "/work-abroad/australia-work-permit/work-visa-subclass-189" },
        { name: "Skilled Nominated Visa Subclass 190", path: "/work-abroad/australia-work-permit/nomited-visa-subclass-190" },
        { name: "Working Holiday 417 Visa", path: "/work-abroad/australia-work-permit/working-holiday-417-visa" },
       ],
    },
    { name: "UK Work Permit", path: "/work-abroad/united-kingdom-work-permit",
       children: [
        { name: "Short Term Work Visa", path: "/work-abroad/united-kingdom-work-permit/uk-short-term-work-visa" },
        { name: "Long Term Work Visa", path: "/work-abroad/united-kingdom-work-permit/uk-long-term-work-visa" },
        { name: "Health and Care Worker Visa", path: "/work-abroad/united-kingdom-work-permit/uk-health-and-care-worker-visa" },
        { name: "Skilled Worker Visa", path: "/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa" },
        { name: "Tier 2 Visa", path: "/work-abroad/united-kingdom-work-permit/uk-tire-2-visa" },
        { name: "Teir 4 Visa", path: "/work-abroad/united-kingdom-work-permit/uk-tire-4-visa" },
       ],
     },
    { name: "Denmark Work Permit", path: "/work-abroad/denmark-work-permit",
      children: [
        { name: "Pay Limit Scheme Visa", path: "/work-abroad/denmark-work-permit/denmark-pay-limit-scheme-visa" },
         { name: "Positive List Visa", path: "/work-abroad/denmark-work-permit/denmark-positive-list-visa" },
          { name: "Trainee Visa", path: "/work-abroad/denmark-work-permit/denmark-trainee-visa" },
           { name: "Employment Visa", path: "/work-abroad/denmark-work-permit/denmark-employment-visa" },
      ],
     },
    { name: "Dubai Work Permit", path: "/work-abroad/dubai-work-permit",
      children: [
        { name: "Standard Work Visa", path: "/work-abroad/dubai-work-permit/dubai-standard-work-visa" },
        { name: "Green Visa", path: "/work-abroad/dubai-work-permit/dubai-green-visa" },
        { name: "Golden Visa", path: "/work-abroad/dubai-work-permit/dubai-golden-visa" },
      ],
     },
  ];

  const studyabroadSubPages = [
    { name: "USA", path: "/study-abroad/usa" },
    { name: "United Kingdom", path: "/study-abroad/uk" },
    { name: "Canada", path: "/study-abroad/canada" },
    { name: "Australia", path: "/study-abroad/australia" },
    { name: "Germany", path: "/study-abroad/germany" },
    { name: "Italy", path: "/study-abroad/italy" },
    { name: "France", path: "/study-abroad/france" },
    { name: "Singapore", path: "/study-abroad/singapore" },
    { name: "Malaysia", path: "/study-abroad/malaysia" },
    { name: "South Africa", path: "/study-abroad/southafrica" },
    { name: "New Zealand", path: "/study-abroad/newzealand" },
    { name: "philippines", path: "/study-abroad/philippines" },
    { name: "Poland", path: "/study-abroad/poland" },
    { name: "Ireland", path: "/study-abroad/ireland" },
    { name: "Spain", path: "/study-abroad/spain" },
    { name: "Netherlands", path: "/study-abroad/netherlands" },
    { name: "Switzerland", path: "/study-abroad/switzerland" },
    { name: "Denmark", path: "/study-abroad/denmark" },
    { name: "Dubai", path: "/study-abroad/dubai" },
    { name: "Luxembourg", path: "/study-abroad/luxembourg" },
    { name: "Hongkong", path: "/study-abroad/hongkong" },
    { name: "UAE", path: "/study-abroad/uae" },
    { name: " Norway", path: "/study-abroad/norway" },
    { name: "Sweden", path: "/study-abroad/sweden" },
  ];

  const prVisaSubPages = [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canada-pr",
       children: [
        { name: "Canada Express Entry ", path: "/pr-visas/canada-pr/canada-express-entry" },
          { name: "National Occupational Codes List ", path: "/pr-visas/canada-pr/national-occupational-codes-list"},
         { name: "Canada Provincial Nominee Program ", path: "/pr-visas/canada-pr-provincial-nominee-program" },
          { name: "Canada Quebee Selected Workers Program ", path: "/pr-visas/canada-pr/canada-quebec-selected-workers-program" },
           { name: "Canada ICT Program ", path: "/pr-visas/canada-pr/canada-ict-program" },
            { name: "Canada FSTP  ", path: "/pr-visas/canada-pr/canada-fstp" },
             { name: "Canada FSWP ", path: "/pr-visas/canada-pr/canada-fswp" },
              { name: "Canada Family Sponsorship ", path: "/pr-visas/canada-pr/canada-family-sponsorship" },
               { name: "Canada Investor Program ", path: "/pr-visas/canada-pr/canada-investor-program" },
                { name: "Canada Atlantic Immigration Pilot Program ", path: "/pr-visas/canada-pr/canada-atlantic-immigration-pilot-program" },

       ],
     },
    {
      name: "Australia Permanent Residency Visa",
      path: "/pr-visas/australia-pr",
       children: [
        { name: "189 Skilled Independent Visa ", path: "/pr-visas/australia-pr/189-skilled-independent-visa" },
          { name: "190 Skilled Nominated Visa ", path: "/pr-visas/australia-pr/190-skilled-nominated-visa" },
            { name: "191 Permanent Residence (Skilled Regional) Visa ", path: "/pr-visas/australia-pr/191-permanent-residence-visa" },
              { name: "491 Skilled Work Regional (Provisional) Visa ", path: "/pr-visas/australia-pr/491-skilled-work-regional-visa" },
                { name: "494 Skilled Employer Sponsored Regional (Provisional) Visa ", path: "/pr-visas/australia-pr/494-skilled-employer-sponsered-regional-visa" },
         
       ],
    },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/uk-pr" },
    {
      name: "New Zealand Permanent Residency Visa",
      path: "/pr-visas/new-zealand-pr",
    },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germany-blue-card" },
    { name: "USA Green Card", path: "/pr-visas/usa-green-card" },
  ];
  const resumemarketingSubPages = [
    { name: "Canada", path: "/resume-marketing/canada" },
    { name: "Germany", path: "/resume-marketing/germany" },
    { name: "USA", path: "/resume-marketing/usa" },
    { name: "Australia", path: "/resume-marketing/australia" },
    { name: "UK", path: "/resume-marketing/uk" },
    { name: "Denmark", path: "/resume-marketing/denmark" },
    { name: "Ireland", path: "/resume-marketing/ireland" },
    { name: "Dubai", path: "/resume-marketing/dubai" },
    { name: "Austria", path: "/resume-marketing/austria" },
    { name: "Singapore", path: "/resume-marketing/singapore" },
    {name: "New Zealand",path: "/resume-marketing/new-zealand" },
    { name: "Malaysia", path: "/resume-marketing/malaysia" },
    { name: "Poland", path: "/resume-marketing/poland" },
    { name: "Malta", path: "/resume-marketing/malta" },
  ];
   const toursticketingSubPages = [
    { name: "Europe", path: "/tours-ticketing/europe" },
    { name: "USA ",  path: "/tours-ticketing/usa" },
    { name: "Australia", path: "/tours-ticketing/australia" },
    { name: "Canada ",  path: "/tours-ticketing/canada" },
    { name: "France ", path: "/tours-ticketing/france" },
    { name: "Italy ", path: "/tours-ticketing/italy" },
    { name: "Switzerland ",  path: "/tours-ticketing/switzerland" },
    { name: "Dubai ",  path: "/tours-ticketing/dubai" },
    { name: "Turkey ",  path: "/tours-ticketing/turkey" },
    { name: "Malaysia ", path: "/tours-ticketing/malaysia" },
    { name: "Singapore ", path: "/tours-ticketing/singapore" },
    { name: "Greece ", path: "/tours-ticketing/greece" },
    { name: "Bali", path: "/tours-ticketing/bali" },
    { name: "Andaman ", path: "/tours-ticketing/andaman" },   
    { name: "Thailand ", path: "/tours-ticketing/thailand" }, 
    { name: "Philippines ", path: "/tours-ticketing/philippines" },
    { name: "Maldives",  path: "/tours-ticketing/maldives" },
    { name: "Fiji Island ",  path: "/tours-ticketing/fiji-island" },   
    { name: "Azerbaijan ",  path: "/tours-ticketing/azerbaijan" }, 
    { name: "Austria ",  path: "/tours-ticketing/austria" },
    { name: "South Africa ", path: "/tours-ticketing/south-africa" },
    { name: "japan ", path: "/tours-ticketing/japan" },
    { name: "vietnam ", path: "/tours-ticketing/vietnam" },
  ];
  const jobseeker = [
    {
      name: "Germany Jobseeker Visa",
      path: "/jobseeker-visas/germany",
     
    },
    {
      name: "Austria Jobseeker Visa",
      path: "/jobseeker-visas/austria",
    },
    {
      name: "Portugal Jobseeker Visa",
      path: "/jobseeker-visas/portugal",
    },
    {
      name: "Sweden Jobseeker Visa",
      path: "/jobseeker-visas/sweden",
    },
    {
      name: "Norway Jobseeker Visa",
      path: "/jobseeker-visas/norway",
    },
    { name: "UAE Jobseeker Visa", path: "/jobseeker-visas/uae" },
  ];
  const servicesSubPages = [
    { name: "Profile Evaluation", path: "/services/profile-evaluation" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    {
      name: "Immigration Consultation",
      path: "/services/immigration-consultation",
    },
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "IELTS Coaching", path: "/services/ielts-coaching" },
    { name: "Resume Writing", path: "/services/resume-writing" },
    { name: "Job Search Assistance", path: "/services/job-search-assistance" },
    { name: "Interview Preparation", path: "/services/interview-preparation" },
    { name: "Post-Landing Services", path: "/services/post-landing-services" },
    { name: "Legal & Documentation", path: "/services/legal-documentation" },
  ];

  const investorvisasSubPages = [
    { name: "USA Investor Visa", path: "/investor-visas/usa" },
    {
      name: "Canada Investor Visa",
      path: "/investor-visas/canada",
    },
    {
      name: "Germany Investor Visa",
      path: "/investor-visas/germany",
    },
    {
      name: "Australia Investor Visa",
      path: "/investor-visas/australia",
    },
    { name: "UK Investor Visa", path: "/investor-visas/uk" },
    { name: "UAE Investor Visa", path: "/investor-visas/uae" },
    {
      name: "Portugal Investor Visa",
      path: "/investor-visas/portugal",
    },
    {
      name: "Austria Investor Visa",
      path: "/investor-visas/austria",
    },
  ];
  const visitvisasSubPages = [
    { name: "USA Visit Visa", path: "/visit-visas/usa" },
    { name: "USA B1/B2 Visa", path: "/visit-visas/usa-b1-b2-visa" },
    { name: "Canada Visit Visa", path: "/visit-visas/canada" },
    { name: "Australia Visit Visa", path: "/visit-visas/australia" },
    { name: "UK Visit Visa", path: "/visit-visas/uk" },
    { name: "Dubai Visit Visa", path: "/visit-visas/dubai" },
    { name: "Denmark Visit Visa", path: "/visit-visas/denmark" },
    { name: "Austria Visit Visa", path: "/visit-visas/austria" },
    { name: "Italy Visit Visa", path: "/visit-visas/italy" },
    { name: "Schengen Visit Visa", path: "/visit-visas/schengen" },
  ];
  const schengenSubPages = [
    { name: "Austria ", path: "/schengen-visas/austria" },
    { name: "Belgium ", path: "/schengen-visas/belgium" },
    { name: "Bulgaria ", path: "/schengen-visas/bulgaria" },
    { name: "Croatia ", path: "/schengen-visas/croatia" },
    { name: "Czech Republic ", path: "/schengen-visas/czech-republic" },
    { name: "Denmark ", path: "/schengen-visas/denmark" },
    { name: "Estonia ", path: "/schengen-visas/estonia" },
    { name: "Finland ", path: "/schengen-visas/finland" },
    { name: "France ", path: "/schengen-visas/france" },
    { name: "Germany ", path: "/schengen-visas/germany" },
    { name: "Greece ", path: "/schengen-visas/greece" },
    { name: "Hungary ", path: "/schengen-visas/hungary" },
    { name: "Iceland ", path: "/schengen-visas/iceland" },
    { name: "Italy ", path: "/schengen-visas/italy" },
    { name: "Latvia ", path: "/schengen-visas/latvia" },
    { name: "Liechtenstein ", path: "/schengen-visas/liechtenstein" },
    { name: "Lithuania ", path: "/schengen-visas/lithuania" },
    { name: "Luxembourg ", path: "/schengen-visas/luxembourg" },
    { name: "Malta ", path: "/schengen-visas/malta" },
    { name: "Netherlands ", path: "/schengen-visas/netherlands" },
    { name: "Norway ", path: "/schengen-visas/norway" },
    { name: "Poland ", path: "/schengen-visas/poland" },
    { name: "Portugal ", path: "/schengen-visas/portugal" },
    { name: "Romania ", path: "/schengen-visas/romania" },
    { name: "Slovakia ", path: "/schengen-visas/slovakia" },
    { name: "Slovenia ", path: "/schengen-visas/slovenia" },
    { name: "Spain ", path: "/schengen-visas/spain" },
    { name: "Sweden ", path: "/schengen-visas/sweden" },
    { name: "Switzerland ", path: "/schengen-visas/switzerland" },
  ];
   const toggleMobileSubMenu = (itemName) => {
  setMobileSubMenu((prev) => ({
    ...prev,
    [itemName]: !prev[itemName],
  }));
  // Close all sub-submenus when toggling a main submenu
  setMobileSubSubMenu({});
};
const toggleMobileSubSubMenu = (itemName) => {
  setMobileSubSubMenu((prev) => ({
    ...prev,
    [itemName]: !prev[itemName],
  }));
};
  return (
    <header>
      {/* Top Section */}
      <div className="bg-white py-0 px-2  shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
        <div className="flex items-center -ml-5 relative">
  <Link href="/" className="text-lg font-bold">
    <div className="relative h-14 w-24">
      <Image
        src="/logo-1.webp"
        alt="Logo"
        fill
        sizes="96px"
        className="object-contain"
        unoptimized
      />
    </div>
  </Link>
 <Link href="/" className="text-lg font-bold">
  <div className="relative h-14 w-28 -ml-6">
    <Image
      src="/logo-2.webp"
      alt="Logo"
      fill
      sizes="112px"
      className="object-contain"
      unoptimized
    
    />
  </div>
</Link>
</div>
{/* Work Abroad Link (Only Mobile) */}
<div className="flex md:hidden items-center ml-4 mr-4">
  <Link
    href="/abroad-jobs-work-permit.com"
    className="flex items-center space-x-1 cursor-pointer"
  >
    {/* Arrow */}
    <span className="text-black text-sm">›</span>

    {/* Two-line Text */}
    <span className="flex flex-col leading-tight">
      <span className="text-[11px] font-bold text-blue-500">Jobs</span>
      <span className="text-[11px] font-bold text-blue-500">Abroad</span>
    </span>
  </Link>
</div>



          <div className="hidden md:flex items-center ml-3">
            <div className="relative h-10 w-10">
  <video
    src="/message1.mp4"
    alt="News"
    className="object-contain"
    autoPlay

    loop
    muted
    playsInline
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>
          </div>

          {/* Marquee */}
          <div className="marquee-container flex-1 mx-10 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world
              with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 mr-6">
  {extraItems.map((item, index) => (
    <Link key={index} href={item.path}>
      <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
        <FaChevronRight size={12} />
        <span
          className={item.name === "Jobs Abroad " ? "font-semibold text-blue-400" : ""}
        >
          {item.name}
        </span>
      </div>
    </Link>
  ))}
</div>

 {/* Social Media Icons */}
          <div className="hidden lg:flex items-center px-5 space-x-2">
            <a
              href="https://www.facebook.com/VJCOVERSEAS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-saffron text-sky-600 text-xl" />
            </a>
           

           <a
  href="https://www.instagram.com/vjcoverseas_/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-8 h-8 hover:scale-110 transition-transform duration-300"
>
<Image
  src="/instagram-logo-vjc.webp"
  alt="Instagram"
  width={100}  // adjust width
  height={100} // adjust height
  className="w-full h-full object-contain"
  unoptimized
/>
</a>

             <a
  href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09"
  target="_blank"
  rel="noopener noreferrer"
>
  <FontAwesomeIcon
    icon={faXTwitter}
    className="hover:text-saffron text-white bg-black text-1sm"
  />
</a>
          </div>
          <a
            href="tel:+919160449000"
            className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-6"
          >
            <div className="relative w-8 h-8 mr-2">
  <video
    src="/message.mp4"
    className="object-contain"
    autoPlay
    loop
    muted
    playsInline
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  
  />
</div>
            <span className="text-custom-blue">+91 9160449000</span>
          </a>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-center items-center py-2 text-xs">
            <div className="flex flex-row -space-x-2 whitespace-nowrap">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  {item.name === "Study Abroad" ? (
                    <div className="relative group">
                      <Link
                        href={item.path}
                        className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
                      >
                        {item.name}
                      </Link>

                      {/* Study Abroad Submenu */}
                      <div className="absolute left-0 mt-3 invisible opacity-0 rounded-2xl  bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-5 grid-rows-4 gap-2 bg-black bg-opacity-50 p-3 w-[700px] min-h-[200px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                        {studyabroadSubPages.map((subItem) => (
                          <Link
                            href={subItem.path}
                            key={subItem.name}
                            className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.name === "Resume Marketing" ? (
                    <div className="relative group">
                      <Link
                        href={item.path}
                        className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
                      >
                        {item.name}
                      </Link>

                      {/* Resume Marketing Submenu - OPEN TO LEFT */}
                      <div className="absolute right-0 mt-3 invisible opacity-0 rounded-2xl  bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-3 gap-2 bg-black bg-opacity-50 p-3 w-[500px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                        {resumemarketingSubPages.map((subItem) => (
                          <Link
                            href={subItem.path}
                            key={subItem.name}
                            className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.name === "Visit Visas" ? (
                    <div className="relative group">
                      <Link
                        href={item.path}
                        className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
                      >
                        {item.name}
                      </Link>
                      {/* Visit Visas Submenu - OPEN TO LEFT */}
                      <div className="absolute right-0 mt-3 invisible opacity-0  rounded-2xl  bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-4 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                        {visitvisasSubPages.map((subItem) => (
                          <Link
                            href={subItem.path}
                            key={subItem.name}
                            className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.name === "Schengen Visas" ? (
                    <div className="relative group">
                      <Link
                        href={item.path}
                        className="text-white text-sm lg:text-xs font-semibold px-3.5 rounded-2xl  hover:bg-white hover:bg-opacity-20 uppercase mt-2"
                      >
                        {item.name}
                      </Link>

                      {/* Visit Visas Submenu - OPEN TO LEFT */}
                      <div className="absolute right-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-6 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                        {schengenSubPages.map((subItem) => (
                          <Link
                            href={subItem.path}
                            
                            key={subItem.name}
                            className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                          >
                            {subItem.name}
                          </Link>
                        ))}    
                      </div>
                    </div>
                   ) : item.name === "Tours/Ticketing" ? (
                    <div className="relative group">
                      <Link
                        href={item.path}
                        className="text-white text-sm lg:text-xs font-semibold px-3.5 rounded-2xl  hover:bg-white hover:bg-opacity-20 uppercase mt-2"
                      >
                        {item.name}
                      </Link>

                      {/* Visit Visas Submenu - OPEN TO LEFT */}
                      <div className="absolute right-0 mt-3 invisible opacity-0  rounded-2xl bg-gradient-to-br  from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-6 gap-2 bg-black bg-opacity-50 p-3 w-[600px] min-h-[150px] shadow-xl z-50 transition-all duration-300 ease-in-out">
                        {toursticketingSubPages.map((subItem) => (
                          <Link
                            href={subItem.path}
                            
                            key={subItem.name}
                            className="text-white text-sm font-semibold text-center px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                 <div className="relative group">
  <Link
    href={item.path}
    className="text-white text-sm lg:text-xs font-semibold px-3.5 uppercase mt-1"
  >
    {item.name}
  </Link>

  {[
    "Migrate To",
    "PR Visas",
    "Job Seeker Visas",
    "Work Abroad",
    "Investor Visas",
    "Services",
    "Coaching/Training",
    "Tours/Ticketing",
  ].includes(item.name) && (
   <div className="absolute left-0 top-full mt-4 invisible   
  opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100
  backdrop-blur-lg border border-white/20 
  shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl 
  z-50 transition-all duration-500 ease-out 
  min-w-[260px] p-4 space-y-2">

      {(item.name === "Migrate To"
        ? migrateSubPages
        : item.name === "Work Abroad"
        ? workabroadSubPages
        : item.name === "PR Visas"
        ? prVisaSubPages
        : item.name === "Services"
        ? servicesSubPages
        : item.name === "Coaching/Training"
        ? coachingSubPages
        : item.name === "Investor Visas"
      
        ? investorvisasSubPages
        : item.name === "Job Seeker Visas"
        ? jobseeker
        : []
      ).map((subItem) => (
        <div key={subItem.name} className="relative group/item">
          <Link
            href={subItem.path}
            className="flex items-center gap-3 px-4 py-2 text-sm  font-medium text-white hover:bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:text-white rounded-xl shadow-inner transition-all duration-300"
          >
            
            {subItem.name}
          </Link>

          {subItem.children && (
            <div className="absolute left-full top-0 ml-3 invisible  bg-gradient-to-br from-orange-500/60 to-black opacity-0 group-hover/item:visible group-hover/item:opacity-100 bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-xl px-4 py-3 min-w-[220px] z-50 transition-all duration-500 ease-out space-y-2">
              {subItem.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.path}
                  className="block text-sm px-3 py-2 text-white hover:bg-orange-500/80 hover:text-white rounded-lg transition-all duration-300"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>



                  )}

                  {index < menuItems.length - 1 && (
                    <span className="text-white hidden lg:inline-block">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>
        </div>
      </div>
<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden block">
        <nav className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
            <div className="flex items-center animate-pulse text-black">
              <a
                href="mailto:info@vjcoverseas.com"
                className="flex items-center"
              >
                <FaEnvelope className="mr-1 w-4 h-8 text-white" />
                <p>info@vjcoverseas.com</p>
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/VJCOVERSEAS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-black text-xl" />
            </a>
            <a
              href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-black text-xl" />
            </a>
            <a
              href="https://www.instagram.com/vjcoverseas_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-black text-xl" />
            </a>
          </div>

        {/* Hamburger Menu */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="flex flex-col items-end justify-end text-xs space-y-1 relative w-8 h-8"
>
  {isMenuOpen ? (
    // ❌ X icon when menu is open
    <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
      ✕
    </span>
  ) : (
    // 🍔 Hamburger icon when menu is closed
    <>
      <span className="block h-1 w-8 bg-white rounded"></span>
      <span className="block h-1 w-6 bg-white rounded"></span>
      <span className="block h-1 w-4 bg-white rounded"></span>
    </>
  )}
</button>

        </nav>
        {/* Mobile Menu with submenus */}
        {isMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-gradient-to-tr from-orange-500 to-black/80 text-white flex flex-col space-y-2 font-bold p-4 z-50 max-h-[80vh] overflow-y-auto">
    {menuItems.map((item, index) => {
      const submenu = getSubMenu(item.name);
      // Only show first-level submenu for Migrate To, PR Visas, etc.
      if (
        [
          "Migrate To",
          "PR Visas",
          "Job Seeker Visas",
          "Work Abroad",
          "Investor Visas",
          "Services",
          "Coaching/Training",
          "Resume Marketing",
          "Study Abroad",
          "Tours/Ticketing",
          "Visit Visas",
          "Schengen Visas",
        ].includes(item.name)
      ) {
        return (
          <div key={index} className="border-b border-white/20 pb-2">
            <div className="flex items-center justify-between">
              <a href={item.path} className="hover:text-orange-500 block">
                {item.name}
              </a>
              {submenu && (
                <button
                  type="button"
                  onClick={() => toggleMobileSubMenu(item.name)}
                  className={`focus:outline-none ml-2 ${mobileSubMenu[item.name] ? "rotate-180" : ""}`}
                  aria-label="Toggle Submenu"
                >
                  <FaChevronDown />
                </button>
              )}
            </div>
            {/* Show submenu (countries) */}
            {submenu && mobileSubMenu[item.name] && (
              <div className="mt-2 ml-2 flex flex-col space-y-1">
                {submenu.map((subItem) => (
                  <div key={subItem.name}>
                    <div className="flex items-center justify-between">
                      <a
                        href={subItem.path}
                        className="text-white bg-black/10 rounded px-2 py-1 mb-1 hover:bg-orange-600 hover:text-white block text-xs"
                      >
                        {subItem.name}
                      </a>
                      {subItem.children && (
                        <button
                          type="button"
                          onClick={() => toggleMobileSubSubMenu(subItem.name)}
                          className={`focus:outline-none ml-2 ${mobileSubSubMenu[subItem.name] ? "rotate-180" : ""}`}
                          aria-label="Toggle Sub-Submenu"
                        >
                          <FaChevronDown size={12} />
                        </button>
                      )}
                    </div>
                    {/* Show sub-submenu (country subpages) */}
                    {subItem.children && mobileSubSubMenu[subItem.name] && (
                      <div className="ml-4 flex flex-col space-y-1">
                        {subItem.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.path}
                            className="text-white bg-black/20 rounded px-2 py-1 hover:bg-orange-400 hover:text-white block text-[11px]"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }
      // For menu items without submenus
      return (
        <div key={index} className="border-b border-white/20 pb-2">
          <a href={item.path} className="hover:text-orange-500 block">
            {item.name}
          </a>
        </div>
      );
    })}
    {extraItems.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between border-b border-white/20 pb-2 hover:text-orange-500 cursor-pointer"
      >
        <a href={item.path} className="hover:text-orange-500 block">
          {item.name}
        </a>
      </div>
    ))}
  </div>
)}
      </div>
    

      <style>
        {`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.5s infinite;
        }
        `}
      </style>
    </header>
  );
};

export default Navbar;