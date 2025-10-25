"use client"
import HeroSection from './HeroSection';
import CTASection from './CTASection';


import Studyinuk from './Studyinuk';
import StudentCounselling from './StudentCounselling';
import GermanyAdmissionProcess from './GermanyAdmissionProcess';
import Whygermany from './Whygermany';

import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
import ModalFormWithPopup from '../Popup/Popup';
import GermanyContent from '../Popup/GermanyContent'; // Adjust path if different


import { useState } from 'react';
export default function StudyInUKPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <HeroSection setIsOpen={setIsOpen}/>
     
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<GermanyContent />} />
      <Whygermany />
      <StudentCounselling />
      <Studyinuk />
      <GermanyAdmissionProcess />
     
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />
      
     
      
    </>
  );
}