'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaPassport, FaSuitcaseRolling, FaTicketAlt, FaClock, FaHeadset } from 'react-icons/fa';
import Lottie from 'lottie-react';
import flightAnimation from '../../public/models/planeanimation.json';
import Form from '../components/Form'; // adjust if needed

const flightServices = [
  {
    icon: <FaPlaneDeparture />,
    title: 'Instant Bookings',
    desc: 'Fast and easy flight ticket bookings for all destinations.',
  },
  {
    icon: <FaPassport />,
    title: 'Visa Support',
    desc: 'Assistance with visa and travel documentation.',
  },
  {
    icon: <FaSuitcaseRolling />,
    title: 'Baggage Services',
    desc: 'Add-ons for extra luggage and cabin preferences.',
  },
  {
    icon: <FaTicketAlt />,
    title: 'Best Fare Guarantee',
    desc: 'Find the lowest possible fares with no hidden costs.',
  },

];

export default function FlightsWhatWeOffer() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-10">
    
      <div className="flex flex-col lg:flex-row gap-10">
      {/* RIGHT SIDE: Form */}
        <div className="w-full lg:w-1/2 flex items-start justify-center">
         
            <Form />
         
        </div>
        {/* LEFT SIDE: Heading + Animation + Services */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
         
          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto lg:mx-0 -mt-48"
          >
            <Lottie animationData={flightAnimation} loop={true} />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 -mt-14 gap-5">
            {flightServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-blue-50 border-l-4 border-orange-500 p-5 rounded-xl shadow hover:shadow-md"
              >
                <div className="text-2xl text-orange-600 mb-2">{service.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 mb-1">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
            </div>
    </div>
  );
}
