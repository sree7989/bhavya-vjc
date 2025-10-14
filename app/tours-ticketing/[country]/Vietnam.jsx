'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const VietnamTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Vietnam Tourist Visa Process with Affordable Vietnam Tour Packages
      </h1>
      <p className="text-lg md:text-xl font-medium text-center mb-6">
        Your Trusted Travel Partner – <span className="text-green-500">VJC Overseas</span>
      </p>

      {/* Image + Text side by side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <div className="md:w-1/2 w-full group overflow-hidden rounded-lg">
          <Image
            src="/vietnam-tours-vjc.png"
            alt="Explore Vietnam with VJC Overseas - Visa and Travel Experts"
            width={700}
            height={300}
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            priority
            unoptimized
          />
        </div>
        <div className="md:w-1/2 text-justify">
          <p>
            Planning a trip to Vietnam for vacation, a family visit, or adventure? Vietnam welcomes travelers with spectacular destinations like Hanoi, Ha Long Bay, Ho Chi Minh City, Ninh Binh, Hue, and the Mekong Delta. At <strong className="text-black font-semi bold">VJC Overseas</strong>, we simplify your Vietnam tourist visa process and offer affordable tour packages for a seamless travel experience.
          </p>
          <p>
            As one of the <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link> in India, we assist in visa applications, ticket bookings, hotel reservations, customized itineraries, and guided tours across Vietnam, ensuring stress-free and memorable journeys.
          </p>
        </div>
      </div>

      <p>
        Vietnam visa and budget-friendly travel solutions include flights, accommodations, and sightseeing itineraries tailored for every traveler.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Understanding the Vietnam Tourist Visa (E-Visa)
      </h2>
      <p>
        The Vietnam E-Visa is issued for tourism and short visits, valid for up to 90 days (single/multiple entry) for Indian citizens, with quick online application and processing.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Vietnam Tourist Visa Requirements
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Valid passport with minimum 6-month validity and 2 blank pages</li>
        <li>Recent passport-size photographs as per Vietnam visa norms</li>
        <li>Completed online E-Visa application form</li>
        <li>Visa fee payment receipt (starting from 25 USD / 2045 INR)</li>
        <li>Proof of financial stability (bank statements, income proof)</li>
        <li>Purpose of visit and travel itinerary</li>
        <li>Return flight tickets and hotel bookings</li>
        <li>Invitation letter (if visiting family/friends)</li>
      </ul>
      <p>
        At <strong className="text-black">VJC Overseas</strong>, our visa experts support document preparation, error-free applications, and guidance for smooth approval.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Our Step-by-Step Vietnam Visa Process
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Free Initial Consultation – Understanding your travel goals</li>
        <li>E-Visa/DS-160 Form Assistance – Fast and accurate submission</li>
        <li>Visa Fee & Appointment Scheduling – Payment guidance and bookings</li>
        <li>Document Checklist – Personalized requirements for your profile</li>
        <li>Updates & Status Tracking – Stay informed at every stage</li>
      </ul>
      <p>
        As trusted <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500 font-bold">Visit Visa Consultants</Link>, we provide reliable support throughout the Vietnam visa process.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Affordable Vietnam Tour Packages – Tailored for Every Traveler
      </h2>
      <p>
        We handle your visa and also help you explore Vietnam with curated <Link href="https://www.vjcoverseas.com/tours-ticketing/vietnam" className="text-orange-500 font-bold">Vietnam Destination Tours</Link>. Our services include flights, 3-star & 4-star hotel stays, sightseeing tours, and local experiences.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Round-trip flights and airport transfers</li>
        <li>Hotel accommodations (Hanoi, Ho Chi Minh City, Ninh Binh, Ha Long Bay, Hue)</li>
        <li>Sightseeing in top places: Mekong Delta, Sapa, Phong Nha, Phu Quoc</li>
        <li>Entry to popular attractions and adventure spots</li>
        <li>Travel insurance & currency/forex assistance</li>
        <li>Custom itineraries for solo travelers, families, and groups</li>
      </ul>
      <p>
        Experience the highlights of Vietnam, such as Ha Long Bay cruises, exploring Hanoi Old Quarter, Vietnamese street food tours, and visiting historic sites in Hue and Ho Chi Minh City[web:8][web:13].
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Why Choose <strong className="text-orange-500">VJC Overseas</strong>?
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Recognized as top <strong className="text-black">Visa Immigration Consultants</strong> in India</li>
        <li>Complete end-to-end services: visa, flights, hotels, tours</li>
        <li>Affordable and transparent pricing for Vietnam packages</li>
        <li>Expert guidance from knowledgeable professionals</li>
        <li>High success rate for Vietnam visa applications</li>
        <li>Personalized service for your travel needs</li>
      </ul>

      <h2 className="text-xl mt-4 font-semibold text-[#000000]">
        Ready to Discover Vietnam?
      </h2>
      <p>
        Make your dream of visiting Vietnam a reality with{" "}
        <Link href="https://www.vjcoverseas.com/tours-ticketing/vietnam">
          <span className="text-orange-500 font-bold">VJC Overseas</span>
        </Link>
        . Let us guide you through the Vietnam tourist visa process and design your affordable travel package.
      </p>
      <p>
        For family vacations, business visits, or leisure adventures, enjoy seamless Vietnam travel planning with our expert team. Contact us today for your Vietnam travel plans.
      </p>
      <p className="font-medium text-green-600">
        Reach out now to start your Vietnam journey with expert guidance and unbeatable savings!
      </p>
    </div>
  );
};

export default VietnamTour;
