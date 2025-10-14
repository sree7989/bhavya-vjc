import Image from "next/image";
import { FaCheckCircle, FaMapMarkerAlt, FaRegLightbulb, FaGlobeAmericas } from "react-icons/fa";
import Form from './Form'; // adjust your import if it's from another path

export default function InvestorVisaSection() {
  return (
    <div className="relative z-10 mt-[100px] w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6">
      {/* LEFT SIDE: Image + Form */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
        {/* Image Section */}
        <div className="w-full flex justify-center md:justify-start -mt-20 md:-mt-6">
          <Image
            src="/investor-visa.webp"
            alt="Investor Visa Image"
            width={600}
            height={400}
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="w-full">
          <Form />
        </div>
      </div>

      {/* RIGHT SIDE: Text Content */}
      <div
        className="w-full md:w-1/2 max-w-full h-[150vh] overflow-y-auto pr-4 order-1 md:order-2"
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          <span className="text-orange-600">VJC Overseas</span> – Start Your Investment Journey
        </h2>

        <p className="text-base sm:text-lg mb-3 text-gray-800 flex items-start gap-2">
          <FaRegLightbulb className="text-orange-500 mt-1" />
          We specialize in turning migration dreams into reality through investment-led visa solutions tailored to your profile. 
          Recognized as <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900">Best Visa Immigration Consultants</a>.
        </p>

        <p className="text-base sm:text-lg mb-3 text-gray-800 flex items-start gap-2">
          <FaCheckCircle className="text-orange-500 mt-1" />
          Fill out the form and let our consultants guide you through every step of the investor visa process with the trusted support of 
          <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900"> VJC Overseas</a>.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800 pl-5">
          <li><FaCheckCircle className="inline text-orange-500 mr-2" /> Expert Visa Consultation</li>
          <li><FaCheckCircle className="inline text-orange-500 mr-2" /> Tailored Investment Pathways</li>
          <li><FaCheckCircle className="inline text-orange-500 mr-2" /> End-to-End Support</li>
          <li><FaGlobeAmericas className="inline text-orange-500 mr-2" /> Global Opportunities Await</li>
        </ul>

        <p className="text-base sm:text-lg text-gray-800 italic">Global Visions. Trusted Guidance.</p>
        <p className="text-base sm:text-lg text-gray-800 italic">Your Bridge to a Brighter Future.</p>
        <p className="text-base sm:text-lg text-gray-800 font-semibold">
          Seamless Migration Starts with <span className="text-orange-600">VJC Overseas</span>.
        </p>
        <p className="mt-4 font-medium text-gray-700">
          Trusted by thousands of investors worldwide through 
          <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900"> Investor Visa Services</a>.
        </p>

        {/* Detailed Content */}
        <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-800">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Investor Visa Services by <span className="text-orange-600">VJC Overseas</span>
          </h3>

          <p>
            We are one of India’s most trusted Investor Visa consultants, empowering clients to invest, live, and work globally 
            with access to exclusive <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900"> Golden Visa Programs</a>.
          </p>

          <p>
            Whether you're in <FaMapMarkerAlt className="inline text-orange-600" /> Hyderabad, Bengaluru, or any other city, our experts are ready to help you with tailored 
            <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900"> Investor Visa Program</a> options.
          </p>

          <h4 className="text-lg font-semibold mt-4">Why Choose Us?</h4>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li><strong>Trusted Expertise:</strong> In-depth knowledge of global investor programs.</li>
            <li><strong>Personalized Approach:</strong> Support for new and seasoned investors.</li>
            <li><strong>Pan-India Support:</strong> Local presence, global reach.</li>
            <li><strong>Multiple Countries:</strong> USA, Canada, UK, Australia, Europe & more.</li>
            <li><strong>High Success Rate:</strong> Numerous successful investor visa cases.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Programs We Offer</h4>
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li><strong>USA EB-5:</strong> Invest in a business, create 10 jobs for a Green Card.</li>
            <li><strong>Canada Investor Visa:</strong> Quebec & provincial investor pathways.</li>
            <li><strong>UK Tier 1:</strong> HNW investment starting from £2 million.</li>
            <li><strong>Australia:</strong> Business Innovation & Significant Investor Visa.</li>
            <li><strong>Europe:</strong> Residency by Investment – Portugal, Greece, Spain.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Our Process</h4>
          <ol className="list-decimal list-inside space-y-2 pl-5">
            <li><strong>Consultation:</strong> Understand your financial goals.</li>
            <li><strong>Strategy:</strong> Tailor a visa & investment plan.</li>
            <li><strong>Documentation:</strong> Accurate and complete filings.</li>
            <li><strong>Application:</strong> We submit and monitor your case.</li>
            <li><strong>Post-Approval:</strong> Relocation, business, and legal setup support.</li>
          </ol>

          <p className="mt-4">
            <strong>Contact Us Today!</strong> Your gateway to international investment begins with 
            <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900"> VJC Overseas</a>.
          </p>
          <p>Get in touch for a free consultation and let us help you expand globally.</p>
          <p className="font-semibold text-orange-600">VJC Overseas – Empowering Your Global Dreams, One Visa at a Time.</p>
        </div>
      </div>
    </div>
  );
}
