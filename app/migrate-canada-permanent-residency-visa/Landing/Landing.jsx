"use client"
import React from 'react'
import { useState } from 'react'
import BigVideo from "../BigVideo/BigVideo"
import TrustedVisa from '../TrustedVisa/TrustedVisa'
import Collabration from '../Collabration/Collabration'
import Review from "../Review/Review"
import CanadaSection from '../CanadaSection/CanadaSection'
import Form from "../Form/Form"
import Whychoose from '../Whychoose/Whychoose'
import Howto from "../Howto/Howto"
import Process from "../Processsuccess/Processsuccess"
import Requirements from "../Requirements/Requirements"
import Livein from '../Livein/Livein'
import ModalFormWithPopup from '../../Popup/Popup';
import CanadaImageContent from "../../Popup/CanadaImageContent"

const Landing = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <BigVideo setIsOpen={setIsOpen}></BigVideo>
       <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<CanadaImageContent />} />
      <Form></Form>
       <TrustedVisa setIsOpen={setIsOpen} />
   <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<CanadaImageContent />} />
      <Howto></Howto>
      <Process></Process>
      <Requirements></Requirements>
      <Collabration></Collabration>
      
      <Review></Review>
      <CanadaSection></CanadaSection>
      <Whychoose></Whychoose>
      <Livein></Livein>
      
    </div>
  )
}

export default Landing