"use client"
import HeroSection from './HeroSection';
import CTASection from './CTASection';


import Studyinuk from './Studyinuk';
import StudentCounselling from './StudentCounselling';
import UKAdmissionProcess from './UKAdmissionProcess';
import ScholarshipUK from './ScholarshipUK';
import GuidanceSection from './GuidanceSection';
import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
import ModalFormWithPopup from '../Popup/Popup';
import DubaiImageContent from '../Popup/DubaiImageContent'; // Adjust path if different


import { useState } from 'react';
export default function StudyInUKPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <HeroSection setIsOpen={setIsOpen}/>
     
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<DubaiImageContent />} />
      <ScholarshipUK />
      <StudentCounselling />
      <Studyinuk />
      <UKAdmissionProcess />
     
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />
      <GuidanceSection />
     
      
    </>
  );
}