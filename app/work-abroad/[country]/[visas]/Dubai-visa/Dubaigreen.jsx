import React from "react";
import Image from "next/image";
import Link from "next/link";

const DubaiGreenVisa = () => {
  return (
    <div className="font-[Times New Roman] p-5 mt-6 leading-relaxed">
      <h1 className="text-2xl font-bold text-center mb-4 text-black">
        Dubai Green Visa – <span className="text-black-600">Unlock a New Future in the UAE with VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-4">
        <div className="flex-1">
          <p>
            Are you an Indian professional, investor, or skilled freelancer looking to live and work in Dubai
            without the need for a local sponsor? The <strong className="text-black">5-Year Green Visa UAE</strong> is your gateway to long-term residency and career growth in one of the fastest-growing economies in the world. At <strong>VJC Overseas</strong>, we provide expert assistance in understanding the process, guiding you from eligibility checks to settlement support.
          </p>
        </div>
        <Image
          src="/dubaigreenvisa.jpg"
          alt="Dubai Green Visa"
          width={300}
          height={200}
          className="rounded-md shadow-lg mt-4 md:mt-0"
          unoptimized
        />
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> What is the Dubai Green Visa?</h2>
      <p>
        The Dubai Work Permit Visa framework has been expanded by the UAE government to include the Green Visa, designed to attract global talent. Unlike traditional employment visas, this visa is valid for five years and provides freedom from employer sponsorship. It is ideal for skilled professionals, investors, freelancers, and entrepreneurs who wish to establish themselves in Dubai. Explore more about <Link href="https://www.vjcoverseas.com/work-abroad/dubai-work-permit/dubai-green-visa" className="text-orange-500 font-semibold">5-Year Green Visa UAE</Link>.
      </p>
      <p className="mt-2">
        The Green Visa is a forward-thinking initiative introduced to diversify the UAE’s economy, making it easier for foreign professionals and families to build stable futures. It is a key <strong className="text-black">Work Abroad Opportunities</strong> resource for Indians seeking career growth.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> Who is Eligible for the Dubai Green Visa?</h2>
      <ul className="list-disc pl-6">
        <li>Skilled professionals with valid employment contracts and a minimum monthly salary of AED 15,000</li>
        <li>Freelancers with UAE-recognized permits and relevant qualifications</li>
        <li>Investors and commercial partners in approved business activities. Learn more via <Link href="https://www.vjcoverseas.com/work-abroad" className="text-orange-500 font-semibold">Work Abroad Opportunities</Link></li>
        <li>Entrepreneurs with proven track records or start-up potential</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black">✅ Key Benefits of the Dubai Green Visa for Indians</h2>
      <ul className="list-disc pl-6">
        <li>No need for a local sponsor, ensuring freedom in career decisions</li>
        <li>5-year validity with renewable options for long-term stability</li>
        <li>Family sponsorship available for spouse, children (up to 25 years), and even parents</li>
        <li>Business and freelance flexibility with the ability to operate legally in Dubai</li>
        <li>Access to world-class healthcare, banking, real estate, and educational facilities</li>
        <li>
          Full guidance from{" "}
          <Link href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">
            Best Visa Immigration Consultants
          </Link>
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> Cost of Living in Dubai for Indian Expats (on Green Visa)</h2>
      <div className="border border-black-400 rounded-lg p-4 bg-black-50">
        <ul className="list-disc pl-6">
          <li><strong>Accommodation:</strong> ₹75,000 – ₹1,50,000 (1BHK to 2BHK apartments in popular expat areas)</li>
          <li><strong>Groceries & Food:</strong> ₹15,000 – ₹25,000 (Indian products widely available)</li>
          <li><strong>Transportation:</strong> ₹5,000 – ₹10,000 (public transport and ride-hailing services)</li>
          <li><strong>Health Insurance:</strong> ₹10,000 – ₹20,000 (mandatory for all residents)</li>
          <li><strong>Schooling:</strong> ₹25,000 – ₹70,000 (affordable Indian curriculum schools are available)</li>
        </ul>
        <p className="mt-2 text-base text-black">
          Tip: Indian communities thrive in areas like Bur Dubai, Karama, and Al Nahda — great for networking & cultural comfort. Check out{" "}
          <Link href="https://www.vjcoverseas.com/work-abroad/dubai-work-permit" className="text-orange-500 font-semibold">
            Dubai Work Permit Visa
          </Link>.
        </p>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> Why Choose Dubai as Your Career Destination?</h2>
      <ul className="list-disc pl-6">
        <li>Tax-Free Income: No personal income tax, maximizing savings</li>
        <li>Global Business Hub: Home to Fortune 500 companies and over 200 nationalities</li>
        <li>World-Class Infrastructure: Renowned for its airports, transport, and real estate</li>
        <li>Safe & Secure: Ranked among the safest cities worldwide</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> Apply for Dubai Green Visa with VJC Overseas – Your Trusted UAE Visa Experts</h2>
      <p>
        At <strong>VJC Overseas</strong>, we have over a decade of expertise in simplifying the Green Visa application process. From free eligibility checks to complete documentation support, our team ensures smooth guidance at every stage. Services include consulting from <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-semibold">VJC Overseas</Link>.
      </p>
      <ul className="list-disc pl-6">
        <li>Eligibility verification and consultation</li>
        <li>Document preparation and government approvals</li>
        <li>Business or freelance setup guidance</li>
        <li>Family visa processing and relocation support</li>
        <li>Post-arrival assistance in Dubai</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2 text-black"> Take the First Step Toward Your Dubai Dream</h2>
      <p>
  If you’re ready to secure your Dubai Green Visa, contact <strong className="text-black">VJC Overseas</strong> today. We specialize in helping Indian professionals and families establish themselves abroad with confidence and clarity.
</p>

    </div>
  );
};

export default DubaiGreenVisa;
