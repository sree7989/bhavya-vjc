"use client"; // This directive marks the component as a Client Component
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default function App() {
  // Rely solely on Canvas globals or hardcoded defaults, as process.env is not available in client-side React in this environment.
  const appId = typeof __app_id !== 'undefined' && __app_id ? __app_id : 'default-app-id';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let firebaseConfig = {};
  try {
    if (typeof __firebase_config !== 'undefined' && __firebase_config) {
      firebaseConfig = JSON.parse(__firebase_config);
    } else {
      // Fallback to hardcoded config if no Canvas global is provided
      firebaseConfig = {
        apiKey: "AIzaSyCvN2_0SkmcODcqOVqg3Tl0sRmwyHvaSdo",
        authDomain: "vjc-project.firebaseapp.com",
        projectId: "vjc-project",
        storageBucket: "vjc-project.appspot.com",
        messagingSenderId: "232845886321",
        appId: "1:232845886321:web:fbef48eda41d6c188b2cd0",
        measurementId: "G-JPH0CGYTXT"
      };
    }
  } catch (e) {
    console.error("Error parsing Firebase config from Canvas global:", e);
    // Set a user-friendly error message, but still try to use the default config if parsing failed
    // setError("Error loading Firebase configuration. Please ensure the '__firebase_config' global variable is a valid JSON string."); // Removed from UI
    firebaseConfig = { // Fallback to hardcoded if parsing fails
      apiKey: "AIzaSyCvN2_0SkmcODcqOVqg3Tl0sRmwyHvaSdo",
      authDomain: "vjc-project.firebaseapp.com",
      projectId: "vjc-project",
      storageBucket: "vjc-project.appspot.com",
      messagingSenderId: "232845886321",
      appId: "1:232845886321:web:fbef48eda41d6c188b2cd0",
      measurementId: "G-JPH0CGYTXT"
    };
  }

  const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
  // Use the hardcoded API key as requested, as process.env is not available here.
  const geminiApiKey = "AIzaSyAUKN3JqIpKvuESCS2GM5egcUiBxLPAiiE";


  // --- Extracted Links from your Navbar Component ---
  // This array contains all the names and paths from your provided Navbar structure.
  // Moved inside the component to ensure it's defined in scope.
  const allLinks = [
    { "name": "Home", "url": "https://vjcoverseas.com/" },
    { "name": "Migrate To", "url": "https://vjcoverseas.com/migrate" },
    { "name": "Study Abroad", "url": "https://vjcoverseas.com/study-abroad" },
    { "name": "PR Visas", "url": "https://vjcoverseas.com/pr-visas" },
    { "name": "Work Abroad", "url": "https://vjcoverseas.com/work-abroad" },
    { "name": "Job Seeker Visas", "url": "https://vjcoverseas.com/jobseeker-visas" },
    { "name": "Visit Visas", "url": "https://vjcoverseas.com/visit-visas" },
    { "name": "Investor Visas", "url": "https://vjcoverseas.com/investor-visas" },
    { "name": "Schengen Visas", "url": "https://vjcoverseas.com/schengen-visas" },
    { "name": "Resume Marketing", "url": "https://vjcoverseas.com/resume-marketing" },
    { "name": "Coaching/Training", "url": "https://vjcoverseas.com/coaching-training" },
    { "name": "Tours/Ticketing", "url": "https://vjcoverseas.com/tours-ticketing" },
    { "name": "About us", "url": "https://vjcoverseas.com/about-us" },
    { "name": "Services", "url": "https://vjcoverseas.com/services" },
    { "name": "Blog", "url": "https://vjcoverseas.com/blog" },
    { "name": "Contact", "url": "https://vjcoverseas.com/contact-us" },
    { "name": "Germany", "url": "https://vjcoverseas.com/migrate/germany" },
    { "name": "Germany Opportunity Card", "url": "https://vjcoverseas.com/migrate/germany/opportunity-card" },
    { "name": "Germany Work Visa", "url": "https://vjcoverseas.com/migrate/germany/work-visa" },
    { "name": "Germany Student Visa", "url": "https://vjcoverseas.com/migrate/germany/student-visa" },
    { "name": "Germany Tourist Visa", "url": "https://vjcoverseas.com/migrate/germany/tourist-visa" },
    { "name": "Germany Dependent Visa", "url": "https://vjcoverseas.com/migrate/germany/dependent-visa" },
    { "name": "Germany Self Employment Visa", "url": "https://vjcoverseas.com/migrate/germany/self-employment-visa" },
    { "name": "Canada", "url": "https://vjcoverseas.com/migrate/canada" },
    { "name": "Canada Work permit", "url": "https://vjcoverseas.com/migrate/canada/work-permit" },
    { "name": "Canada Student Visa", "url": "https://vjcoverseas.com/migrate/canada/student-visa" },
    { "name": "Canada Tourist Visa", "url": "https://vjcoverseas.com/migrate/canada/tourist-visa" },
    { "name": "Canada PR Visa", "url": "https://vjcoverseas.com/migrate/canada/pr-visa" },
    { "name": "Canada Family Sponsorship Visa", "url": "https://vjcoverseas.com/migrate/canada/family-sponsorship-visa" },
    { "name": "United States", "url": "https://vjcoverseas.com/migrate/united-states" },
    { "name": "USA Student Visa", "url": "https://vjcoverseas.com/migrate/united-states/student-visa" },
    { "name": "USA Tourist Visa", "url": "https://vjcoverseas.com/migrate/united-states/tourist-visa" },
    { "name": "USA Business Visa", "url": "https://vjcoverseas.com/migrate/united-states/business-visa" },
    { "name": "USA H1B Visa", "url": "https://vjcoverseas.com/migrate/united-states/H1B-visa" },
    { "name": "USA Investor Visa", "url": "https://vjcoverseas.com/migrate/united-states/investor-visa" },
    { "name": "Australia", "url": "https://vjcoverseas.com/migrate/australia" },
    { "name": "Australia Student Visa", "url": "https://vjcoverseas.com/migrate/australia/student-visa" },
    { "name": "Australia Business Visa", "url": "https://vjcoverseas.com/migrate/australia/business-visa" },
    { "name": "Australia Work Visa", "url": "https://vjcoverseas.com/migrate/australia/work-visa" },
    { "name": "Australia Family Visa", "url": "https://vjcoverseas.com/migrate/australia/family-visa" },
    { "name": "Australia Dependent Visa", "url": "https://vjcoverseas.com/migrate/australia/dependent-visa" },
    { "name": "Australia Sponsorship Visa", "url": "https://vjcoverseas.com/migrate/australia/sponsorship-visa" },
    { "name": "United Kingdom", "url": "https://vjcoverseas.com/migrate/united-kingdom" },
    { "name": "UK Student Visa", "url": "https://vjcoverseas.com/migrate/united-kingdom/student-visa" },
    { "name": "UK Tourist Visa", "url": "https://vjcoverseas.com/migrate/united-kingdom/tourist-visa" },
    { "name": "UK Business Visa", "url": "https://vjcoverseas.com/migrate/united-kingdom/business-visa" },
    { "name": "UK Innovator Visa", "url": "https://vjcoverseas.com/migrate/united-kingdom/innovator-visa" },
    { "name": "UK Sponsorship Visa", "url": "https://vjcoverseas.com/migrate/united-kingdom/sponsorship-visa" },
    { "name": "New Zealand", "url": "https://vjcoverseas.com/migrate/new-zealand" },
    { "name": "New Zealand Permanent Resident Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/permanent-resident-visa" },
    { "name": "New Zealand Work Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/work-visa" },
    { "name": "New Zealand Student Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/student-work-visa" },
    { "name": "New Zealand Skilled Work Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/skilled-work-visa" },
    { "name": "New Zealand Business Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/business-visa" },
    { "name": "New Zealand Tourist Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/tourist-visa" },
    { "name": "New Zealand Dependent Visa", "url": "https://vjcoverseas.com/migrate/new-zealand/dependent-visa" },
    { "name": "South Africa", "url": "https://vjcoverseas.com/migrate/south-africa" },
    { "name": "South Africa Critical Skills Visa", "url": "https://vjcoverseas.com/migrate/south-africa/critical-skills-visa" },
    { "name": "South Africa General Work Visa", "url": "https://vjcoverseas.com/migrate/south-africa/general-work-visa" },
    { "name": "South Africa Business Visa", "url": "https://vjcoverseas.com/migrate/south-africa/business-visa" },
    { "name": "South Africa Tourist Visa", "url": "https://vjcoverseas.com/migrate/south-africa/tourist-visa" },
    { "name": "Hong Kong", "url": "https://vjcoverseas.com/migrate/hong-kong" },
    { "name": "Hong Kong Student Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/student-visa" },
    { "name": "Hong Kong Employment Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/employment-visa" },
    { "name": "Hong Kong Business Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/business-visa" },
    { "name": "Hong Kong Tourist Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/tourist-visa" },
    { "name": "Hong Kong Dependent Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/dependent-visa" },
    { "name": "Hong Kong Work Visa", "url": "https://vjcoverseas.com/migrate/hong-kong/work-visa" },
    { "name": "Denmark", "url": "https://vjcoverseas.com/migrate/denmark" },
    { "name": "Denmark Student Visa", "url": "https://vjcoverseas.com/migrate/denmark/student-visa" },
    { "name": "Denmark Work Permit Visa", "url": "https://vjcoverseas.com/migrate/denmark/work-permit-visa" },
    { "name": "Denmark Tourist Visa", "url": "https://vjcoverseas.com/migrate/denmark/tourist-visa" },
    { "name": "Denmark Business Visa", "url": "https://vjcoverseas.com/migrate/denmark/business-visa" },
    { "name": "UAE", "url": "https://vjcoverseas.com/migrate/uae" },
    { "name": "UAE Student Visa", "url": "https://vjcoverseas.com/migrate/uae/student-visa" },
    { "name": "UAE Golden Visa", "url": "https://vjcoverseas.com/migrate/uae/golden-visa" },
    { "name": "UAE Work Visa", "url": "https://vjcoverseas.com/migrate/uae/work-visa" },
    { "name": "UAE Green Visa", "url": "https://vjcoverseas.com/migrate/uae/green-visa" },
    { "name": "UAE Tourist Visa", "url": "https://vjcoverseas.com/migrate/uae/tourist-visa" },
    { "name": "IELTS", "url": "https://vjcoverseas.com/coaching-training/ielts" },
    { "name": "GMAT", "url": "https://vjcoverseas.com/coaching-training/gmat" },
    { "name": "GRE", "url": "https://vjcoverseas.com/coaching-training/gre" },
    { "name": "DUOLINGO", "url": "https://vjcoverseas.com/coaching-training/duolingo" },
    { "name": "PTE", "url": "https://vjcoverseas.com/coaching-training/pte" },
    { "name": "TOEFL", "url": "https://vjcoverseas.com/coaching-training/toefl" },
    { "name": "Germany Work Permit", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit" },
    { "name": "Opportunity Card", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card" },
    { "name": "Job Seeker Visa", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/job-seeker-visa" },
    { "name": "Blue Card", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/blue-visa" },
    { "name": "Skilled Work permit Visa", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/work-permit-visa" },
    { "name": "Employment Visa", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/employment-visa" },
    { "name": "Freelance Visa", "url": "https://vjcoverseas.com/work-abroad/germany-work-permit/freelance-visa" },
    { "name": "Canada Work Permit", "url": "https://vjcoverseas.com/work-abroad/canada-work-permit" },
    { "name": "Open Work Permit Visa", "url": "https://vjcoverseas.com/work-abroad/canada-work-permit/open-work-permit" },
    { "name": "W1 Visa", "url": "https://vjcoverseas.com/work-abroad/canada-work-permit/w1-visa" },
    { "name": "LMIA Visa", "url": "https://vjcoverseas.com/work-abroad/canada-work-permit/lmia" },
    { "name": "USA H1b Visa", "url": "https://vjcoverseas.com/work-abroad/usa-h1b-visa" },
    { "name": "Australia Work Permit", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit" },
    { "name": "Temporary Skills 482 Visa", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit/482-visa" },
    { "name": "Employer 186 Visa", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit/employer-186-visa" },
    { "name": "Skilled Independent Work visa Subclass 189", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit/work-visa-subclass-189" },
    { "name": "Skilled Nominated Visa Subclass 190", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit/nomited-visa-subclass-190" },
    { "name": "Working Holiday 417 Visa", "url": "https://vjcoverseas.com/work-abroad/australia-work-permit/working-holiday-417-visa" },
    { "name": "UK Work Permit", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit" },
    { "name": "Short Term Work Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-short-term-work-visa" },
    { "name": "Long Term Work Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-long-term-work-visa" },
    { "name": "Health and Care Worker Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-health-and-care-worker-visa" },
    { "name": "Skilled Worker Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa" },
    { "name": "Tier 2 Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-tire-2-visa" },
    { "name": "Teir 4 Visa", "url": "https://vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-tire-4-visa" },
    { "name": "Denmark Work Permit", "url": "https://vjcoverseas.com/work-abroad/denmark-work-permit" },
    { "name": "Pay Limit Scheme Visa", "url": "https://vjcoverseas.com/work-abroad/denmark-work-permit/denmark-pay-limit-scheme-visa" },
    { "name": "Positive List Visa", "url": "https://vjcoverseas.com/work-abroad/denmark-work-permit/denmark-positive-list-visa" },
    { "name": "Trainee Visa", "url": "https://vjcoverseas.com/work-abroad/denmark-work-permit/denmark-trainee-visa" },
    { "name": "Employment Visa", "url": "https://vjcoverseas.com/work-abroad/denmark-work-permit/denmark-employment-visa" },
    { "name": "Dubai Work Permit", "url": "https://vjcoverseas.com/work-abroad/dubai-work-permit" },
    { "name": "Standard Work Visa", "url": "https://vjcoverseas.com/work-abroad/dubai-work-permit/dubai-standard-work-visa" },
    { "name": "Green Visa", "url": "https://vjcoverseas.com/work-abroad/dubai-work-permit/dubai-green-visa" },
    { "name": "Golden Visa", "url": "https://vjcoverseas.com/work-abroad/dubai-work-permit/dubai-golden-visa" },
    { "name": "USA", "url": "https://vjcoverseas.com/study-abroad/usa" },
    { "name": "United Kingdom", "url": "https://vjcoverseas.com/study-abroad/uk" },
    { "name": "Canada", "url": "https://vjcoverseas.com/study-abroad/canada" },
    { "name": "Australia", "url": "https://vjcoverseas.com/study-abroad/australia" },
    { "name": "Germany", "url": "https://vjcoverseas.com/study-abroad/germany" },
    { "name": "Italy", "url": "https://vjcoverseas.com/study-abroad/italy" },
    { "name": "France", "url": "https://vjcoverseas.com/study-abroad/france" },
    { "name": "Singapore", "url": "https://vjcoverseas.com/study-abroad/singapore" },
    { "name": "Malaysia", "url": "https://vjcoverseas.com/study-abroad/malaysia" },
    { "name": "South Africa", "url": "https://vjcoverseas.com/study-abroad/southafrica" },
    { "name": "New Zealand", "url": "https://vjcoverseas.com/study-abroad/newzealand" },
    { "name": "philippines", "url": "https://vjcoverseas.com/study-abroad/philippines" },
    { "name": "Poland", "url": "https://vjcoverseas.com/study-abroad/poland" },
    { "name": "Ireland", "url": "https://vjcoverseas.com/study-abroad/ireland" },
    { "name": "Spain", "url": "https://vjcoverseas.com/study-abroad/spain" },
    { "name": "Netherlands", "url": "https://vjcoverseas.com/study-abroad/netherlands" },
    { "name": "Switzerland", "url": "https://vjcoverseas.com/study-abroad/switzerland" },
    { "name": "Denmark", "url": "https://vjcoverseas.com/study-abroad/denmark" },
    { "name": "Dubai", "url": "https://vjcoverseas.com/study-abroad/dubai" },
    { "name": "Luxembourg", "url": "https://vjcoverseas.com/study-abroad/luxembourg" },
    { "name": "Hongkong", "url": "https://vjcoverseas.com/study-abroad/hongkong" },
    { "name": "UAE", "url": "https://vjcoverseas.com/study-abroad/uae" },
    { "name": " Norway", "url": "https://vjcoverseas.com/study-abroad/norway" },
    { "name": "Sweden", "url": "https://vjcoverseas.com/study-abroad/sweden" },
    { "name": "Canada Permanent Residency Visa", "url": "https://vjcoverseas.com/pr-visas/canada-pr" },
    { "name": "Canada Express Entry ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-express-entry" },
    { "name": "National Occupational Codes List ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/national-occupational-codes-list" },
    { "name": "Canada Provincial Nominee Program ", "url": "https://vjcoverseas.com/pr-visas/canada-pr-provincial-nominee-program" },
    { "name": "Canada Quebee Selected Workers Program ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-quebec-selected-workers-program" },
    { "name": "Canada ICT Program ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-ict-program" },
    { "name": "Canada FSTP  ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-fstp" },
    { "name": "Canada FSWP ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-fswp" },
    { "name": "Canada Family Sponsorship ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-family-sponsorship" },
    { "name": "Canada Investor Program ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-investor-program" },
    { "name": "Canada Atlantic Immigration Pilot Program ", "url": "https://vjcoverseas.com/pr-visas/canada-pr/canada-atlantic-immigration-pilot-program" },
    { "name": "Australia Permanent Residency Visa", "url": "https://vjcoverseas.com/pr-visas/australia-pr" },
    { "name": "189 Skilled Independent Visa ", "url": "https://vjcoverseas.com/pr-visas/australia-pr/189-skilled-independent-visa" },
    { "name": "190 Skilled Nominated Visa ", "url": "https://vjcoverseas.com/pr-visas/australia-pr/190-skilled-nominated-visa" },
    { "name": "191 Permanent Residence (Skilled Regional) Visa ", "url": "https://vjcoverseas.com/pr-visas/australia-pr/191-permanent-residence-visa" },
    { "name": "491 Skilled Work Regional (Provisional) Visa ", "url": "https://vjcoverseas.com/pr-visas/australia-pr/491-skilled-work-regional-visa" },
    { "name": "494 Skilled Employer Sponsored Regional (Provisional) Visa ", "url": "https://vjcoverseas.com/pr-visas/australia-pr/494-skilled-employer-sponsered-regional-visa" },
    { "name": "UK Permanent Residency Visa", "url": "https://vjcoverseas.com/pr-visas/uk-pr" },
    { "name": "New Zealand Permanent Residency Visa", "url": "https://vjcoverseas.com/pr-visas/new-zealand-pr" },
    { "name": "Germany Blue Card Visa", "url": "https://vjcoverseas.com/pr-visas/germany-blue-card" },
    { "name": "USA Green Card", "url": "https://vjcoverseas.com/pr-visas/usa-green-card" },
    { "name": "Canada", "url": "https://vjcoverseas.com/resume-marketing/canada" },
    { "name": "Germany", "url": "https://vjcoverseas.com/resume-marketing/germany" },
    { "name": "USA", "url": "https://vjcoverseas.com/resume-marketing/usa" },
    { "name": "Australia", "url": "https://vjcoverseas.com/resume-marketing/australia" },
    { "name": "UK", "url": "https://vjcoverseas.com/resume-marketing/uk" },
    { "name": "Denmark", "url": "https://vjcoverseas.com/resume-marketing/denmark" },
    { "name": "Ireland", "url": "https://vjcoverseas.com/resume-marketing/ireland" },
    { "name": "Dubai", "url": "https://vjcoverseas.com/resume-marketing/dubai" },
    { "name": "Austria", "url": "https://vjcoverseas.com/resume-marketing/austria" },
    { "name": "Singapore", "url": "https://vjcoverseas.com/resume-marketing/singapore" },
    { "name": "New Zealand", "url": "https://vjcoverseas.com/resume-marketing/new-zealand" },
    { "name": "Malaysia", "url": "https://vjcoverseas.com/resume-marketing/malaysia" },
    { "name": "Poland", "url": "https://vjcoverseas.com/resume-marketing/poland" },
    { "name": "Malta", "url": "https://vjcoverseas.com/resume-marketing/malta" },
    { "name": "Europe", "url": "https://vjcoverseas.com/tours-ticketing/europe" },
    { "name": "USA ", "url": "https://vjcoverseas.com/tours-ticketing/usa" },
    { "name": "Australia", "url": "https://vjcoverseas.com/tours-ticketing/australia" },
    { "name": "Canada ", "url": "https://vjcoverseas.com/tours-ticketing/canada" },
    { "name": "France ", "url": "https://vjcoverseas.com/tours-ticketing/france" },
    { "name": "Italy ", "url": "https://vjcoverseas.com/tours-ticketing/italy" },
    { "name": "Switzerland ", "url": "https://vjcoverseas.com/tours-ticketing/switzerland" },
    { "name": "Dubai ", "url": "https://vjcoverseas.com/tours-ticketing/dubai" },
    { "name": "Turkey ", "url": "https://vjcoverseas.com/tours-ticketing/turkey" },
    { "name": "Malaysia ", "url": "https://vjcoverseas.com/tours-ticketing/malaysia" },
    { "name": "Singapore ", "url": "https://vjcoverseas.com/tours-ticketing/singapore" },
    { "name": "Greece ", "url": "https://vjcoverseas.com/tours-ticketing/greece" },
    { "name": "Bali", "url": "https://vjcoverseas.com/tours-ticketing/bali" },
    { "name": "Andaman ", "url": "https://vjcoverseas.com/tours-ticketing/andaman" },
    { "name": "Thailand ", "url": "https://vjcoverseas.com/tours-ticketing/thailand" },
    { "name": "Philippines ", "url": "https://vjcoverseas.com/tours-ticketing/philippines" },
    { "name": "Maldives", "url": "https://vjcoverseas.com/tours-ticketing/maldives" },
    { "name": "Fiji Island ", "url": "https://vjcoverseas.com/tours-ticketing/fiji-island" },
    { "name": "Azerbaijan ", "url": "https://vjcoverseas.com/tours-ticketing/azerbaijan" },
    { "name": "Austria ", "url": "https://vjcoverseas.com/tours-ticketing/austria" },
    { "name": "South Africa ", "url": "https://vjcoverseas.com/tours-ticketing/south-africa" },
    { "name": "Germany Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/germany" },
    { "name": "Austria Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/austria" },
    { "name": "Portugal Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/portugal" },
    { "name": "Sweden Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/sweden" },
    { "name": "Norway Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/norway" },
    { "name": "UAE Jobseeker Visa", "url": "https://vjcoverseas.com/jobseeker-visas/uae" },
    { "name": "Profile Evaluation", "url": "https://vjcoverseas.com/services/profile-evaluation" },
    { "name": "Visa Assistance", "url": "https://vjcoverseas.com/services/visa-assistance" },
    { "name": "Immigration Consultation", "url": "https://vjcoverseas.com/services/immigration-consultation" },
    { "name": "Career Counseling", "url": "https://vjcoverseas.com/services/career-counseling" },
    { "name": "IELTS Coaching", "url": "https://vjcoverseas.com/services/ielts-coaching" },
    { "name": "Resume Writing", "url": "https://vjcoverseas.com/services/resume-writing" },
    { "name": "Job Search Assistance", "url": "https://vjcoverseas.com/services/job-search-assistance" },
    { "name": "Interview Preparation", "url": "https://vjcoverseas.com/services/interview-preparation" },
    { "name": "Post-Landing Services", "url": "https://vjcoverseas.com/services/post-landing-services" },
    { "name": "Legal & Documentation", "url": "https://vjcoverseas.com/services/legal-documentation" },
    { "name": "USA Investor Visa", "url": "https://vjcoverseas.com/investor-visas/usa" },
    { "name": "Canada Investor Visa", "url": "https://vjcoverseas.com/investor-visas/canada" },
    { "name": "Germany Investor Visa", "url": "https://vjcoverseas.com/investor-visas/germany" },
    { "name": "Australia Investor Visa", "url": "https://vjcoverseas.com/investor-visas/australia" },
    { "name": "UK Investor Visa", "url": "https://vjcoverseas.com/investor-visas/uk" },
    { "name": "UAE Investor Visa", "url": "https://vjcoverseas.com/investor-visas/uae" },
    { "name": "Portugal Investor Visa", "url": "https://vjcoverseas.com/investor-visas/portugal" },
    { "name": "Austria Investor Visa", "url": "https://vjcoverseas.com/investor-visas/austria" },
    { "name": "USA Visit Visa", "url": "https://vjcoverseas.com/visit-visas/usa" },
    { "name": "USA B1/B2 Visa", "url": "https://vjcoverseas.com/visit-visas/usa-b1-b2-visa" },
    { "name": "Canada Visit Visa", "url": "https://vjcoverseas.com/visit-visas/canada" },
    { "name": "Australia Visit Visa", "url": "https://vjcoverseas.com/visit-visas/australia" },
    { "name": "UK Visit Visa", "url": "https://vjcoverseas.com/visit-visas/uk" },
    { "name": "Dubai Visit Visa", "url": "https://vjcoverseas.com/visit-visas/dubai" },
    { "name": "Denmark Visit Visa", "url": "https://vjcoverseas.com/visit-visas/denmark" },
    { "name": "Austria Visit Visa", "url": "https://vjcoverseas.com/visit-visas/austria" },
    { "name": "Italy Visit Visa", "url": "https://vjcoverseas.com/visit-visas/italy" },
    { "name": "Schengen Visit Visa", "url": "https://vjcoverseas.com/schengen-visas/schengen" },
    { "name": "Austria ", "url": "https://vjcoverseas.com/schengen-visas/austria" },
    { "name": "Belgium ", "url": "https://vjcoverseas.com/schengen-visas/belgium" },
    { "name": "Bulgaria ", "url": "https://vjcoverseas.com/schengen-visas/bulgaria" },
    { "name": "Croatia ", "url": "https://vjcoverseas.com/schengen-visas/croatia" },
    { "name": "Czech Republic ", "url": "https://vjcoverseas.com/schengen-visas/czech-republic" },
    { "name": "Denmark ", "url": "https://vjcoverseas.com/schengen-visas/denmark" },
    { "name": "Estonia ", "url": "https://vjcoverseas.com/schengen-visas/estonian" },
    { "name": "Finland ", "url": "https://vjcoverseas.com/schengen-visas/finland" },
    { "name": "France ", "url": "https://vjcoverseas.com/schengen-visas/france" },
    { "name": "Germany ", "url": "https://vjcoverseas.com/schengen-visas/germany" },
    { "name": "Greece ", "url": "https://vjcoverseas.com/schengen-visas/greece" },
    { "name": "Hungary ", "url": "https://vjcoverseas.com/schengen-visas/hungary" },
    { "name": "Iceland ", "url": "https://vjcoverseas.com/schengen-visas/iceland" },
    { "name": "Italy ", "url": "https://vjcoverseas.com/schengen-visas/italy" },
    { "name": "Latvia ", "url": "https://vjcoverseas.com/schengen-visas/latvia" },
    { "name": "Liechtenstein ", "url": "https://vjcoverseas.com/schengen-visas/liechtenstein" },
    { "name": "Lithuania ", "url": "https://vjcoverseas.com/schengen-visas/lithuania" },
    { "name": "Luxembourg ", "url": "https://vjcoverseas.com/schengen-visas/luxembourg" },
    { "name": "Malta ", "url": "https://vjcoverseas.com/schengen-visas/malta" },
    { "name": "Netherlands ", "url": "https://vjcoverseas.com/schengen-visas/netherlands" },
    { "name": "Norway ", "url": "https://vjcoverseas.com/schengen-visas/norway" },
    { "name": "Poland ", "url": "https://vjcoverseas.com/schengen-visas/poland" },
    { "name": "Portugal ", "url": "https://vjcoverseas.com/schengen-visas/portugal" },
    { "name": "Romania ", "url": "https://vjcoverseas.com/schengen-visas/romania" },
    { "name": "Slovakia ", "url": "https://vjcoverseas.com/schengen-visas/slovakia" },
    { "name": "Slovenia ", "url": "https://vjcoverseas.com/schengen-visas/slovenia" },
    { "name": "Spain ", "url": "https://vjcoverseas.com/schengen-visas/spain" },
    { "name": "Sweden ", "url": "https://vjcoverseas.com/schengen-visas/sweden" },
    { "name": "Switzerland ", "url": "https://vjcoverseas.com/schengen-visas/switzerland" }
  ];


  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // This state will still be used internally for console logs
  const [userId, setUserId] = useState(null); // This state will still be used internally for authentication
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // New states for chat interface
  const [messages, setMessages] = useState([]); // Stores chat history
  const [userName, setUserName] = useState(''); // Stores user's name after initial input
  const [inputName, setInputName] = useState(''); // For initial name input
  const [showGreeting, setShowGreeting] = useState(true); // Controls initial greeting flow

  // Voice input states
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  // Removed messagesEndRef and its useEffect for auto-scrolling


  // Initialize Firebase and set up auth listener
  useEffect(() => {
    // Check if firebaseConfig is empty. If so, Firebase cannot be initialized.
    // This often happens if the __firebase_config global variable is not set
    // or contains invalid JSON in the Canvas environment.
    if (Object.keys(firebaseConfig).length === 0 || !firebaseConfig.apiKey) {
      console.error("Firebase configuration is missing or invalid. Please ensure Firebase is correctly set up in your environment. " +
                "This typically means the '__firebase_config' global variable needs to be a valid JSON string " +
                "containing your Firebase project's configuration (apiKey, authDomain, projectId, etc.).");
      setIsAuthReady(true); // Mark auth as ready to avoid perpetual loading, but with an error.
      return;
    }

    try {
      const app = initializeApp(firebaseConfig);
      const firestoreDb = getFirestore(app);
      const firebaseAuth = getAuth(app);

      setDb(firestoreDb);
      setAuth(firebaseAuth);

      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          // Attempt to retrieve a stored anonymous user ID from localStorage
          const storedAnonUid = localStorage.getItem('vjc_anon_uid');
          if (storedAnonUid) {
            try {
              // Try to sign in with the custom token if available, or re-authenticate with stored anon UID
              if (initialAuthToken) {
                await signInWithCustomToken(firebaseAuth, initialAuthToken);
              } else {
                // Firebase doesn't have a direct `signInWithUid` for anonymous users.
                // The best approach is to try to re-use the session if it's still valid,
                // or sign in anonymously again which might re-use the existing anon user if session is gone.
                // For direct re-authentication with a specific UID, you'd typically need a custom token generated on a backend.
                // Since we're in a client-side context, we'll try anonymous sign-in which Firebase tries to link if possible.
                await signInAnonymously(firebaseAuth);
                // After anonymous sign-in, if the UID is different, it means a new anon user was created.
                // We should update localStorage in that case.
                if (firebaseAuth.currentUser && firebaseAuth.currentUser.uid !== storedAnonUid) {
                    localStorage.setItem('vjc_anon_uid', firebaseAuth.currentUser.uid);
                }
              }
              setUserId(firebaseAuth.currentUser?.uid); // Use the current user's UID
            } catch (authError) {
              console.error("Firebase re-authentication failed with stored UID, signing in anonymously:", authError);
              // If re-authentication fails, clear stored UID and try fresh anonymous sign-in
              localStorage.removeItem('vjc_anon_uid');
              try {
                await signInAnonymously(firebaseAuth);
                const newAnonUid = firebaseAuth.currentUser?.uid || crypto.randomUUID();
                localStorage.setItem('vjc_anon_uid', newAnonUid);
                setUserId(newAnonUid);
              } catch (freshAnonError) {
                console.error("Fresh anonymous sign-in failed:", freshAnonError);
                if (freshAnonError.code === 'auth/too-many-requests') {
                  // setError("Too many authentication attempts. Please try again after a short while."); // Removed from UI
                  console.error("Too many authentication attempts. Please try again after a short while.");
                } else {
                  // setError(`Firebase authentication failed: ${freshAnonError.message}.`); // Removed from UI
                  console.error(`Firebase authentication failed: ${freshAnonError.message}.`);
                }
                setUserId(crypto.randomUUID()); // Fallback to a random ID if all else fails
              }
            }
          } else {
            // No stored UID, proceed with initial anonymous sign-in
            try {
              await signInAnonymously(firebaseAuth);
              const newAnonUid = firebaseAuth.currentUser?.uid || crypto.randomUUID();
              localStorage.setItem('vjc_anon_uid', newAnonUid);
              setUserId(newAnonUid);
            } catch (anonError) {
              console.error("Initial anonymous sign-in failed:", anonError);
              if (anonError.code === 'auth/too-many-requests') {
                // setError("Too many authentication attempts. Please try again after a short while."); // Removed from UI
                console.error("Too many authentication attempts. Please try again after a short while.");
              } else {
                // setError(`Firebase authentication failed: ${anonError.message}.`); // Removed from UI
                console.error(`Firebase authentication failed: ${anonError.message}.`);
              }
              setUserId(crypto.randomUUID());
            }
          }
        }
        setIsAuthReady(true);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Failed to initialize Firebase:", e);
      // setError(`Failed to initialize Firebase: ${e.message}. Please check console for details.`); // Removed from UI
      setIsAuthReady(true);
    }
  }, [firebaseConfig, initialAuthToken]); // Added firebaseConfig and initialAuthToken to dependencies

  // Initial AI greeting message when auth is ready
  useEffect(() => {
    if (isAuthReady && showGreeting) {
      setMessages([
        { sender: 'ai', text: "Greetings! I am VJC AI, your dedicated assistant for all matters concerning overseas education, work visas, and tourist visas. May I have the pleasure of knowing your name, and how may I be of assistance to you today?", avatar: 'vjc-logo' }
      ]);
    }
  }, [isAuthReady, showGreeting]);

  // --- Speech Recognition (Voice Input) ---
  const startSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false; // Listen for a single utterance
    recognitionRef.current.interimResults = false; // Only return final results
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setError('');
    };

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      setIsListening(false);
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  // Cleanup for speech recognition on component unmount
  useEffect(() => {
    return () => {
      stopSpeechRecognition();
    };
  }, []);


  const findRelevantLink = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    const queryWords = lowerCaseQuery.split(/\s+/).filter(word => word.length > 2);

    allLinks.forEach(link => {
      const lowerCaseName = link.name.toLowerCase();
      let currentScore = 0;

      if (lowerCaseName === lowerCaseQuery) {
        currentScore = 100;
      } else if (lowerCaseName.includes(lowerCaseQuery)) {
        currentScore = lowerCaseQuery.length;
      } else {
        queryWords.forEach(word => {
          if (lowerCaseName.includes(word)) {
            currentScore += 1;
          }
        });
      }

      const lowerCaseUrl = link.url.toLowerCase();
      const urlWords = lowerCaseUrl.split(/[\/-]+/).filter(word => word.length > 2);
      queryWords.forEach(word => {
        if (urlWords.includes(word)) {
          currentScore += 0.5;
        }
      });

      if (currentScore > highestScore) {
        highestScore = currentScore;
        bestMatch = link;
      }
    });

    if (highestScore > 0) {
      return bestMatch;
    }
    return null;
  };

  const handleNameSubmit = () => {
    if (inputName.trim()) {
      setUserName(inputName.trim());
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'user', text: `My name is ${inputName.trim()}.`, avatar: 'user-icon' }
      ]);
      setShowGreeting(false); // Hide greeting, show main chat
      setError(''); // Clear any previous name input errors
    } else {
      setError("Please enter your name to proceed."); // This error will still be set internally, but not displayed
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setError('Please enter a question.'); // This error will still be set internally, but not displayed
      return;
    }
    if (!isAuthReady) {
      setError('Authentication not ready. Please wait a moment.'); // This error will still be set internally, but not displayed
      return;
    }

    setLoading(true);
    setError('');

    // Add user message to chat history
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: question, avatar: 'user-icon' }]);
    const userQuestionForPrompt = question; // Store user's exact question for AI prompt
    setQuestion(''); // Clear input field

    try {
      let finalLink = "";
      const lowerCaseQuestion = userQuestionForPrompt.toLowerCase();
      let isSpecificVjcJobQuery = false;

      // Determine the final link based on specific queries or general relevance
      if (lowerCaseQuestion.includes("job") && (lowerCaseQuestion.includes("vjc") || lowerCaseQuestion.includes("vj overseas"))) {
        finalLink = "https://vjcoverseas.com/careers";
        isSpecificVjcJobQuery = true; // Flag for specific handling
      } else if (lowerCaseQuestion.includes("latest-updates") || lowerCaseQuestion.includes("latest updates") || lowerCaseQuestion.includes("news") || lowerCaseQuestion.includes("recent news")) {
        finalLink = "https://vjcoverseas.com/latest-news";
      } else if (lowerCaseQuestion.includes("link is not opening") || lowerCaseQuestion.includes("broken link") || lowerCaseQuestion.includes("link not working")) {
        finalLink = "https://vjcoverseas.com/"; // Direct to homepage for broken link reports
      } else {
        const relevantLink = findRelevantLink(userQuestionForPrompt);
        if (relevantLink) {
          finalLink = relevantLink.url;
        } else {
          finalLink = "https://vjcoverseas.com/"; // Default to homepage if no specific link found
        }
      }

      let aiResponseText = '';

      // If it's a specific VJC job query, provide only the link directly
      if (isSpecificVjcJobQuery) {
        aiResponseText = `Dear ${userName || 'valued client'}, for job opportunities at VJC Overseas, please visit our careers page: ${finalLink}`;
      } else {
        // Construct the prompt for the AI
        const prompt = `You are an AI assistant for VJC Overseas, specializing in overseas education, work visas, and tourist visas.
        The user's name is ${userName || 'valued client'}.
        Start your response with "Dear ${userName || 'valued client'}, regarding your query about ${userQuestionForPrompt.substring(0, 50)}${userQuestionForPrompt.length > 50 ? '...' : ''}:"
        Then, provide a detailed answer in 10-20 numbered points. Each point should be on a new line. If points are not suitable, provide a clear and concise paragraph.
        Crucially, ensure your response stays strictly within the context of the user's current question and the preceding conversation. For example, if the conversation is about "study abroad" and the user asks "why USA", focus on reasons why the USA is a top *study* destination (e.g., academic excellence, research opportunities, IT sector opportunities relevant to academics/post-study careers, post-study work permits for students, etc.), and do not diverge into general work or migration reasons unless explicitly asked.
        If the query is related to a specific country or opportunity (e.g., Germany Opportunity Card, USA tours), explain it thoroughly.
        When including URLs, please provide them as plain text (e.g., https://example.com/), and do not use Markdown link formatting ([text](url)). My frontend will handle converting plain URLs to clickable links.
        Here are the available topics and their corresponding base URLs: ${JSON.stringify(allLinks.map(l => ({ name: l.name, url: l.url })))}.
        Here is the user's question: "${userQuestionForPrompt}"

        Now, answer the following question: "${userQuestionForPrompt}"`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });

        const payload = { contents: chatHistory };
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
          aiResponseText = result.candidates[0].content.parts[0].text;

          // Remove Markdown bolding (**text**)
          aiResponseText = aiResponseText.replace(/\*\*(.*?)\*\*/g, '$1');

          // Append the determined finalLink after the AI's response
          if (finalLink) {
            if (lowerCaseQuestion.includes("link is not opening") || lowerCaseQuestion.includes("broken link") || lowerCaseQuestion.includes("link not working")) {
              aiResponseText += `\n\nIt seems you're having trouble with a link. Please ensure your internet connection is stable or try copying the link and pasting it directly into your browser. For general information, you can always visit our homepage: ${finalLink}`;
            } else if (lowerCaseQuestion.includes("latest-updates") || lowerCaseQuestion.includes("latest updates") || lowerCaseQuestion.includes("news") || lowerCaseQuestion.includes("recent news")) {
               aiResponseText += `\n\nFor the latest news and updates from VJC Overseas, please visit: ${finalLink}`;
            } else {
              aiResponseText += `\n\nFor more detailed information, please visit: ${finalLink}`;
            }
          }
        } else {
          // Fallback message if AI cannot generate a response, without apology
          aiResponseText = `Dear ${userName || 'valued client'}, I'm currently unable to provide a detailed answer to your question. Could you please try rephrasing it, or ask a different question? For general information, please visit: ${finalLink}`;
          console.error("Gemini API response structure unexpected or empty:", result);
        }
      }

      // This regex will now correctly pick up plain URLs and convert them to clickable links
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      aiResponseText = aiResponseText.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${url}</a>`;
      });

      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiResponseText, avatar: 'vjc-logo' }]);

    } catch (err) {
      console.error("Error fetching from Gemini API:", err);
      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: 'I am experiencing a technical difficulty. Please try again later.', avatar: 'vjc-logo' }]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl lg:max-w-3xl border border-gray-200 mx-auto flex flex-col h-[90vh]"> {/* Added flex-col and height for chat layout */}
        {/* Header */}
        <div className="flex justify-center items-center mb-6 flex-shrink-0">
      

<Image
  src="/logo.png" // Path to your uploaded logo
  alt="VJC Overseas Logo"
  width={150} // must provide width
  height={60} // must provide height
  className="h-16 sm:h-20 object-contain mr-3"
  onError={(e) => { 
    e.currentTarget.src = "https://placehold.co/150x60/cccccc/333333?text=VJC+Logo"; 
  }}
/>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            VJC Overseas AI Assistant
          </h1>
        </div>

        {/* Conditional Greeting/Chat Interface */}
        {showGreeting ? (
          <div className="flex flex-col items-center justify-center flex-grow">
            <p className="text-lg text-center text-gray-700 mb-4 px-4">
              {messages[0]?.text}
            </p>
            <div className="w-full max-w-sm">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 mb-4"
                placeholder="Enter your name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleNameSubmit(); }}
              />
              <button
                onClick={handleNameSubmit}
                className="w-full bg-blue-600 text-white py-2.5 px-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Start Conversation
              </button>
              {/* Error messages are now only logged to console */}
            </div>
          </div>
        ) : (
          <>
            {/* Chat Messages Display Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 border-t border-b border-gray-200 mb-4 rounded-lg bg-gray-50 shadow-inner">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'ai' && (
                    <Image
  src="/logo.png"
  alt="VJC AI Avatar"
  width={32}
  height={32}
  className="h-8 w-8 rounded-full object-contain flex-shrink-0"
  onError={(e) => { 
    e.currentTarget.src = "https://placehold.co/150x60/cccccc/333333?text=VJC+Logo"; 
  }}
/>
                  )}
                  <div className={`p-3 rounded-xl max-w-[75%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  } shadow-sm`}>
                    <p className="font-semibold text-sm mb-1">
                      {msg.sender === 'user' ? (userName || 'You') : 'VJC AI'}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} className="prose text-sm leading-snug break-words" />
                  </div>
                  {msg.sender === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                      {/* Simple SVG for user avatar */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695L12 22.5l-8.401-1.69a.75.75 0 01-.438-.695z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input and Buttons */}
            <div className="flex flex-col flex-shrink-0">
              <textarea
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 resize-y min-h-[60px] max-h-[150px] mb-3"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAskQuestion(); }}}
                rows="2"
              ></textarea>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                <button
                  onClick={handleAskQuestion}
                  className="flex-1 bg-blue-600 text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  disabled={loading || !isAuthReady || isListening}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2 sm:mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Thinking...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {!isListening ? (
                  <button
                    onClick={startSpeechRecognition}
                    className="flex-1 bg-orange-500 text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    disabled={loading}
                  >
                    Start Voice Input
                  </button>
                ) : (
                  <button
                    onClick={stopSpeechRecognition}
                    className="flex-1 bg-red-500 text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl text-base sm:text-lg font-semibold hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    disabled={loading}
                  >
                    Stop Voice Input
                  </button>
                )}
              </div>

              {/* Error messages are now only logged to console */}
            </div>
          </>
        )}

        {/* User ID is now hidden */}
      </div>
    </div>
  );
}
