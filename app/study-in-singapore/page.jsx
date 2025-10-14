"use client"
import HeroSection from './HeroSection';
import CTASection from './CTASection';


import Studyinsingapore from './Studyinsingapore';
import StudentCounselling from './StudentCounselling';
import SingaporeAdmissionProcess from './SingaporeAdmissionProcess';
import Whysingapore from './Whysingapore';

import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
import ModalFormWithPopup from '../Popup/Popup';
import SingaporeImageContent from '../Popup/SingaporeImageContent'; // Adjust path if different


import { useState } from 'react';
export default function StudyInUKPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <HeroSection setIsOpen={setIsOpen}/>
     
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<SingaporeImageContent />} />
      <Whysingapore />
      <StudentCounselling />
      <Studyinsingapore />
      <SingaporeAdmissionProcess />
     
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />
      
     
      
    </>
  );
}