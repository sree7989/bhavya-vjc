"use client"
import React from 'react'
import { useState } from 'react'
import BigVideo from "../BigVideo/BigVideo"
import TrustedVisa from '../TrustedVisa/TrustedVisa'
import Collabration from '../Collabration/Collabration'
import Review from "../Review/Review"
import CanadaSection from '../AusSection/Aussection'
import Form from "../Form/Form"
import Whychoose from '../Whychoose/Whychoose'
import Howto from "../Howto/Howto"
import Process from "../Processsuccess/Processsuccess"
import Requirements from "../Requirements/Requirements"
import Livein from '../Livein/Livein'
import WhyAus from "../WhyAus/WhyAus"
import Typespr from "../Typespr/Typespr"
import ModalFormWithPopup from '../../Popup/Popup';
// import CanadaImageContent from "../../Popup/CanadaImageContent"
import AustraliaImageContent from "../../Popup/AustraliaImageContent"
const Landing = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <BigVideo setIsOpen={setIsOpen}></BigVideo>
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<AustraliaImageContent />} />
      <Form></Form>
      <TrustedVisa></TrustedVisa>
      <Howto></Howto>
      <Process></Process>
      <Requirements></Requirements>
      <Collabration></Collabration>
      <Typespr></Typespr>
      <Review></Review>
      <WhyAus></WhyAus>
      <CanadaSection></CanadaSection>
      <Whychoose></Whychoose>
      <Livein></Livein>
      
    </div>
  )
}

export default Landing