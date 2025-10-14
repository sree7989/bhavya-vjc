import React from "react";
import Link from "next/link";
import Image from "next/image";

const UKInnovatorVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        UK Investor Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/uk-investor-visa.webp"
            alt="UK Investor Visa Guidance by VJC Overseas"
            width={400}
            height={100}
            className=""
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-3/4">
          <p className="mb-4">
            In today’s fast-paced global economy, the United Kingdom stands as a beacon for innovation, offering a wealth of opportunities
            for entrepreneurs looking to expand their businesses and make an impact on the world. If you’re an ambitious individual with a
            groundbreaking idea, the <a href="https://www.vjcoverseas.com/investor-visas/uk" className="font-bold text-blue-900">UK Investor Visa</a> could be your key to success.
          </p>
        </div>
      </div>

      <p className="text-lg text-justify mb-6">
        At <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900">VJC Overseas</a>, we specialize in guiding dynamic entrepreneurs like you through the UK’s immigration process.
        Whether you’re starting a new venture or scaling an existing one, the Innovator Visa offers you the chance to bring your vision
        to life in one of the most vibrant business environments on the planet.
      </p>

      <h2 className="text-xl font-bold mb-2 mt-4">What is the UK Innovator Visa?</h2>
      <p className="mb-4">
        The Innovator Visa is designed for experienced entrepreneurs who wish to establish or run a business in the UK. It is part of the
        broader <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900">Investor Visa Program</a> that allows skilled individuals to build strong business foundations in the UK.
      </p>
      <ul className="pl-6 space-y-2">
        <li className="text-lg"><span className="font-bold">•</span> <span className="font-bold">Endorsement</span> from an approved UK organization</li>
        <li className="text-lg"><span className="font-bold">•</span> <span className="font-bold">A unique, innovative, and scalable</span> business idea</li>
        <li className="text-lg"><span className="font-bold">•</span> <span className="font-bold">A clear contribution</span> to the UK economy</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Key Benefits of the UK Innovator Visa</h2>
      <ul className="space-y-1">
        <li className="text-lg"><span className="font-bold">• Flexible Entry Requirements:</span> No need for a large amount of capital upfront.</li>
        <li className="text-lg"><span className="font-bold">• Path to Permanent Residency:</span> Eligible for Indefinite Leave to Remain (ILR) after 3 years.</li>
        <li className="text-lg"><span className="font-bold">• Access to UK’s Startup Ecosystem:</span> Connections with investors and business accelerators.</li>
        <li className="text-lg"><span className="font-bold">• Family Inclusion:</span> Bring your spouse and children under 18 to the UK.</li>
        <li className="text-lg"><span className="font-bold">• No Minimum Investment Requirement:</span> Only a viable business plan is required.</li>
        <li className="text-lg"><span className="font-bold">• Freedom to Grow Your Business:</span> No work restrictions.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Eligibility Criteria</h2>
      <ul className="space-y-3">
        <li className="text-lg"><span className="font-bold">• Endorsement:</span> A recognized UK body must approve your business idea.</li>
        <li className="text-lg"><span className="font-bold">• Innovation & Scalability:</span> Your idea must be unique and capable of growth.</li>
        <li className="text-lg"><span className="font-bold">• English Proficiency:</span> Minimum CEFR Level B2 required.</li>
        <li className="text-lg"><span className="font-bold">• Financial Proof:</span> At least £1,270 in your account for 28 days before applying.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">How VJC Overseas Can Help</h2>
      <ul className="space-y-3">
        <li className="text-lg"><span className="font-bold">• Business Idea Validation:</span> Ensuring your idea meets UK immigration standards.</li>
        <li className="text-lg"><span className="font-bold">• Visa Application Support:</span> Assistance with documentation and submission.</li>
        <li className="text-lg"><span className="font-bold">• Business Plan Development:</span> Creating a compelling plan for endorsement.</li>
        <li className="text-lg"><span className="font-bold">• Post-Visa Support:</span> Helping you settle and expand your business in the UK.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Conclusion</h2>
      <p className="mb-4 text-lg">
        The UK Innovator Visa offers an exciting opportunity for entrepreneurs to bring their ideas to life in one of the world’s most dynamic economies. 
        To explore even wider opportunities, check out our <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900">Golden Visa Programs</a> that extend beyond the UK. 
        At <span className="text-orange-500 font-bold">VJC Overseas</span>, we’re committed to supporting your journey. Contact us today to get started!
      </p>
      <div className="text-center mt-6">
        <Link href="/contact-us">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-orange-600 transition-all">
            Get Started
          </button>
        </Link>
      </div>

      <div className="text-center mt-8">
        <p>
          Looking for expert advice? Connect with the <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900">Best Visa Immigration Consultants</a> today!
        </p>
      </div>
    </div>
  );
};

export default UKInnovatorVisa;
