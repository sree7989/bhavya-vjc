'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const EuropeTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Europe Tourist Visa Process with Affordable Europe Tour Packages
      </h1>
      <p className="text-lg md:text-xl font-medium text-center mb-6">
  Travel Made Easy with <span className="text-orange-500 font-bold">VJC Overseas</span>
</p>


      {/* Image and text side by side */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        {/* Image Box with hover overlay */}
        <div className="md:w-1/2 w-full relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/europe-tour-ticketing.jpg"
            alt="Europe Tour Visa Guidance by VJC Overseas"
            title="Europe Tourist Visa Support by VJC Overseas"
            width={700}
            height={300}
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg font-semibold">Europe Tour by <strong className="text-black">VJC Overseas</strong></p>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-justify">
          <p>
            Dreaming of a European getaway filled with iconic cities, charming villages, scenic landscapes, and rich cultural experiences? At <strong className="text-black">VJC Overseas</strong>, we provide more than just visa support — we deliver end-to-end travel assistance with <Link href="https://www.vjcoverseas.com/tours-ticketing/europe"><span className="text-orange-500 font-bold">European Holiday Packages</span></Link> designed to suit your preferences, budget, and schedule.
          </p>
          <p className="mt-4">
            From Paris to Prague, Rome to Amsterdam, Europe is a destination that promises diverse experiences for every kind of traveler. Whether it’s exploring historic castles, indulging in authentic cuisine, or enjoying the snow-capped Alps, we make sure your journey is seamless and stress-free.
          </p>
        </div>
      </div>

      {/* Remaining Section */}
      <h2 className="text-xl mt-4 font-semibold text-orange-700">Your Gateway to Europe: Tourist Visa Assistance</h2>
      <p>
        To travel across Europe legally, most Indian travelers require a  Visa, which allows entry to 27 countries in the Schengen Zone with a single visa. Our team of <Link href="https://www.vjcoverseas.com/visit-visas"><span className="text-orange-500 font-bold">Visit Visa Consultants</span></Link> ensures that your visa application process is smooth, accurate, and quick.
      </p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Valid passport (at least 6 months validity)</li>
        <li>Passport-size photographs as per embassy specs</li>
        <li>Confirmed flight tickets and hotel bookings</li>
        <li>Travel itinerary covering each country of visit</li>
        <li>Proof of financial stability (bank statements)</li>
        <li>Employment proof or business registration</li>
        <li>Travel insurance with €30,000 coverage</li>
        <li>Visa application form and cover letter</li>
      </ul>
      <p className="mt-2">
        At <strong className="text-black">VJC Overseas</strong>, we meticulously prepare and verify your documents to maximize approval chances and avoid unnecessary delays.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Step-by-Step Visa Guidance</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Free Travel & Visa Consultation</li>
        <li>Customized Document Checklist</li>
        <li>Application Form Filling & Review</li>
        <li>Embassy Appointment Scheduling</li>
        <li>Mock Interview Guidance (if required)</li>
        <li>Visa Tracking with Real-time Updates</li>
      </ul>
      <p className="mt-2">
        Our consultants are recognized among the <Link href="https://www.vjcoverseas.com"><span className="text-orange-500 font-bold">Best Visa Immigration Consultants</span></Link> for their expertise and attention to detail. With in-depth knowledge of embassy procedures, we make sure your application is always in safe hands.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Affordable Europe Tour Packages – Tailored for You</h2>
      <p className="mt-2">
        Traveling is not just about reaching a destination — it’s about the experience. Along with visa support, we also provide complete <Link href="https://www.vjcoverseas.com/tours-ticketing"><span className="text-orange-500 font-bold">Tours and Ticketing Services</span></Link> that include:
      </p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Round-trip flight booking assistance</li>
        <li>Hotel stays from budget to luxury options</li>
        <li>Inter-country transfers and local transport</li>
        <li>Guided sightseeing tours and city passes</li>
        <li>Currency exchange and travel insurance support</li>
        <li>Personalized itinerary planning</li>
      </ul>
      <p className="mt-2">
        Whether you are planning a romantic trip to Paris, a family adventure across Italy and Switzerland, or cultural explorations through Spain and Germany, our exclusive packages cover every detail.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Why Choose <strong className="text-black">VJC Overseas</strong>?</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Visa + Travel Package in One Place</li>
        <li>High Visa Approval Rate</li>
        <li>Cost-effective and customizable packages</li>
        <li>End-to-end assistance from travel to ticketing</li>
        <li>Experienced advisors with a personal touch</li>
      </ul>
      <p className="mt-2">
        When it comes to international travel, planning with professionals ensures peace of mind. That’s why so many travelers trust <strong className="text-black">VJC Overseas</strong> to create memorable experiences.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Explore Beyond – A Taste of New York City</h2>
      <p className="mt-2">
        While Europe is a dream destination, many travelers also combine it with iconic cities like New York. From New York City sightseeing tours to exploring Europe’s cultural heart, we can plan multi-destination trips that give you the best of both worlds.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Start Your Journey Today</h2>
      <p className="mt-2">
  The world is waiting, and Europe is calling. With <strong className="text-black">European Holiday Packages</strong> from <Link href="https://www.vjcoverseas.com"><span className="text-orange-500 font-bold">VJC Overseas</span></Link>, you don’t just travel — you create memories that last a lifetime.
</p>

      <p className="mt-4">
  Get in touch with us today to explore visa guidance, affordable tours, and complete travel solutions. Let our expert <strong className="text-black font-bold">Visit Visa Consultants</strong> handle the paperwork while you enjoy the adventure.
</p>

    </div>
  );
};

export default EuropeTour;