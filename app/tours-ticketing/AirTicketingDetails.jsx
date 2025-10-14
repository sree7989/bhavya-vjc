'use client';

import React from 'react';
import {
  FaPlaneDeparture,
  FaPassport,
  FaSuitcase,
  FaHeadset,
  FaGlobeEurope,
  FaConciergeBell,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import requirementsAnimation from '../../public/models/manplane.json';
import Link from 'next/link';

const services = [
  { icon: <FaPlaneDeparture />, title: 'Flight Booking', desc: 'Best fares for domestic & international destinations.' },
  { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Guidance for required travel visas & transit documents.' },
  { icon: <FaSuitcase />, title: 'Baggage Options', desc: 'Extra baggage, special items & pre-paid services.' },
  { icon: <FaConciergeBell />, title: 'Travel Add-ons', desc: 'Meals, insurance, airport pickup & seat selection.' },
  { icon: <FaGlobeEurope />, title: 'Group Tours', desc: 'Discounted packages for families, corporates, and students.' },
  { icon: <FaHeadset />, title: '24/7 Support', desc: 'Real-time ticket updates, rescheduling & cancellation help.' },
];

export default function AirTicketingDetails() {
  return (
    <div className="px-6 md:px-20 pt-2 pb-10 bg-gray-50 text-gray-800">

      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        What We Offer in Air Ticketing
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl text-orange-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tours and Ticketing Section */}
      <div className="mt-16 space-y-8">
        <h3 className="text-2xl font-semibold text-blue-800">
          Tours and Ticketing Services – <strong className="text-black">VJC Overseas</strong>
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Planning a hassle-free journey requires more than just booking a ticket—it involves careful planning, verified documentation, and expert guidance. At <Link href="https://www.vjcoverseas.com/tours-ticketing"><span className="text-orange-500 font-bold">Tours and Ticketing Services</span></Link>, we go beyond regular ticket booking to cover every detail of your travel needs. Whether you are traveling for leisure, business, or education, our experts ensure that you have the right documents, comfortable arrangements, and stress-free support throughout your journey.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800">Basic Requirements for Seamless Travel</h3>
        <p className="text-gray-700 leading-relaxed">
          Before you set out on your journey, it is important to ensure that you meet the basic requirements for international or domestic travel. At <strong className="text-black">VJC Overseas</strong>, we guide you at every step so you don’t face last-minute complications.
        </p>

        {/* First 3 points vertically */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="list-disc ml-6 text-gray-700 space-y-4 leading-relaxed">
            <li><strong>Valid Passport:</strong> Your passport must have at least six months of validity from your travel date.</li>
            <li><strong>Visa Documentation:</strong> Based on your destination, you’ll need the correct visa. Our team helps you identify and apply for the most suitable category.</li>
            <li><strong>Government-Issued ID Proof:</strong> For domestic travel, carry a valid ID such as Aadhar, PAN, Driving License, or Voter ID.</li>
          </ul>
        </div>

        {/* Next 3 points beside animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-xl shadow">
          <div>
            <ul className="list-disc ml-6 text-gray-700 space-y-4 leading-relaxed">
              <li><strong>Vaccination Certificates:</strong> Many countries require proof of vaccination or health clearance.</li>
              <li><strong>Travel Insurance:</strong> Highly recommended to safeguard against medical emergencies, baggage loss, or flight cancellations.</li>
              <li><strong>Confirmed Return/Onward Ticket:</strong> Immigration authorities often ask for a return or further travel booking as proof of intention.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[300px] flex items-center justify-center">
              <Lottie animationData={requirementsAnimation} loop={true} className="w-full h-full" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          For expert assistance in visa applications and documentation, you can also reach out to <Link href="https://www.vjcoverseas.com"><span className="text-orange-500 font-bold">Best Visa Immigration Consultants</span></Link>, ensuring your journey starts smoothly.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800">Why Choose <strong className="text-black">VJC Overseas</strong>?</h3>
        <p className="text-gray-700 leading-relaxed">
          At <strong className="text-black">VJC Overseas</strong>, we believe travel should be about experiences, not struggles. That’s why we provide personalized services that make your journey stress-free and enjoyable.
        </p>

        <h3 className="text-xl font-semibold text-blue-700">What We Offer:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-3 leading-relaxed">
          <li>Customized Itineraries: We design travel plans tailored to your preferences, highlighting the best attractions and hidden gems.</li>
          <li>24/7 Assistance: Our team is available around the clock for any travel concerns or emergencies.</li>
          <li>Competitive Pricing: Transparent costs with no hidden fees, ensuring value for your investment.</li>
          <li>Expert Local Guides: Get insights into culture, history, and lifestyle from knowledgeable professionals.</li>
          <li>Safe & Reliable Travel: Verified hotels, flights, and transportation for peace of mind.</li>
          <li>Premium Hotels & Resorts: Curated stays that provide both comfort and luxury.</li>
          <li>Immersive Cultural Experiences: From local cuisine tasting to participating in traditional events, we make travel more meaningful.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          When it comes to planning international trips, our dedicated <Link href="https://www.vjcoverseas.com/visit-visas"><span className="text-orange-500 font-bold">Visit Visa Consultants</span></Link> guide travelers through the visa application process, ensuring quick and accurate approvals.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800">Complete Travel and Immigration Support</h3>
        <p className="text-gray-700 leading-relaxed">
          Travel is not just about reaching a destination—it’s also about managing immigration rules and travel formalities. That’s why we provide dedicated <Link href="https://www.vjcoverseas.com/tours-ticketing"><span className="text-orange-500 font-bold">Travel and Immigration Support</span></Link>, covering documentation, legal requirements, and pre-departure guidance. This ensures that whether you’re flying for education, work, or tourism, your journey remains completely stress-free.
        </p>

        <p className="text-gray-700 leading-relaxed">
  With our strong network and expertise, 
  <Link href="https://www.vjcoverseas.com">
    <span className="text-orange-500 font-bold"> VJC Overseas </span>
  </Link> 
  has built a reputation as one of the most trusted consultancies in the industry. If you are planning a trip abroad, from short vacations to long-term stays, our <strong className="text-black">Tours and Ticketing Services</strong> are designed to give you confidence and peace of mind every step of the way.
</p>

      </div>
    </div>
  );
}