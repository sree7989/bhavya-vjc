"use client"
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import Studyinusa from './Studyinusa';
import StudentCounselling from './StudentCounselling';
import UKAdmissionProcess from './UKAdmissionProcess';
import Whyusa from './Whyusa';
import ScholarshipOverview from './ScholarshipOverview';
import WhyVJC from './WhyVJC';
import ModalFormWithPopup from '../Popup/Popup';
import Usaimagecontent from '../Popup/Usaimagecontent'; // Adjust path if different
import { useState } from 'react';
export default function StudyInUKPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>    
      <HeroSection setIsOpen={setIsOpen}/>     
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<Usaimagecontent />} />
      <Whyusa />
      <StudentCounselling />
      <Studyinusa />
      <UKAdmissionProcess />     
      <ScholarshipOverview />
      <WhyVJC />
      <CTASection />      
    </>
  );
}