"use client"
import HeroSection from './HeroSection';
import CTASection from './CTASection';


import Studyincanada from './Studyincanada';
import StudentCounselling from './StudentCounselling';
import CanadaAdmissionProcess from './CanadaAdmissionProcess';
import Whycanada from './Whycanada';

import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
import ModalFormWithPopup from '../Popup/Popup';
import CanadaContent from '../Popup/CanadaContent'; // Adjust path if different


import { useState } from 'react';
export default function StudyInUKPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <HeroSection setIsOpen={setIsOpen}/>
     
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<CanadaContent />} />
      <Whycanada />
      <StudentCounselling />
      <Studyincanada />
      <CanadaAdmissionProcess />
     
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />
      
     
      
    </>
  );
}