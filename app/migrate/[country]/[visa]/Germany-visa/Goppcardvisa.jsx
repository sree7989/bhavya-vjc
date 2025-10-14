import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="overflow-x-hidden px-4 sm:px-6 lg:px-8 py-8 bg-white font-times-new-roman text-base">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-black text-center leading-snug">
          <strong>Germany Opportunity Card</strong> – Your Gateway to a Bright Future -{" "}
          <strong style={{ color: "orange" }}>VJC Overseas</strong>
        </h1>
      </div>

      {/* Intro Paragraph */}
      <p className="mb-6 leading-relaxed">
        At{" "}
        <Link href="https://www.vjcoverseas.com/">
          <span style={{ color: "orange" }}><strong>VJC Overseas</strong></span>
        </Link>
        , we take immense pride in offering one of the most promising immigration
        solutions to secure your future in Germany — the{" "}
        <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong>. This innovative, points-based initiative has opened exciting doors for
        skilled professionals to migrate and build successful careers in one of Europe’s most thriving economies.
      </p>

      {/* Image + Explanation Section */}
      <div className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-6 lg:space-y-0 mb-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mx-auto">
          <Image
            src="/gocimg.png"
            alt="Germany Opportunity Card"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto object-contain rounded-lg shadow-md"
            priority
            unoptimized
          />
          <ul className="hidden lg:block mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>No job offer needed to enter Germany and search locally.</li>
            <li>Points-based pathway for skilled professionals.</li>
            <li>Faster processing & potential path to residency.</li>
            <li>In-demand fields: IT, Engineering, Healthcare.</li>
          </ul>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-black font-bold mb-3 text-lg sm:text-xl">
            <strong>What is the Germany Opportunity Card?</strong>
          </h2>
          <p className="leading-relaxed">
            The <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong> is a strategic immigration pathway designed for highly skilled professionals from outside the European Union to live and work in Germany. Introduced as part of Germany’s new points-based immigration system, it offers a flexible and faster route to residency — especially in fields experiencing critical skill shortages like IT, engineering, and healthcare. Whether you're aiming to expand your professional journey or looking to settle in one of the world’s most developed countries, this card provides the ideal path to{" "}
            <Link href="https://www.vjcoverseas.com/migrate/germany/">
              <span style={{ color: "orange" }}><strong>Migrate to Germany</strong></span>
            </Link>{" "}
            and explore abundant opportunities.
          </p>
        </div>
      </div>

      {/* Why Choose VJC */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        <strong>Why Choose VJC Overseas?</strong>
      </h2>
      <p className="mb-6 leading-relaxed">
        At <strong style={{ color: "#000000" }}>VJC Overseas</strong>, we understand that applying for an international visa can feel overwhelming. Our mission is to simplify the process for skilled professionals and ensure that each stage of the application is completed with precision, clarity, and speed. As one of the leading consultancies in India with offices in Hyderabad and Bangalore, we bring unmatched experience in guiding applicants through the <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong> process. If you're looking for trusted professionals, we are among the{" "}
        <Link href="https://www.vjcoverseas.com/">
          <span style={{ color: "orange" }}><strong>Best Visa Immigration Consultants</strong></span>
        </Link>
        .
      </p>

      {/* Game Changer */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        <strong>Why is the Germany Opportunity Card a Game Changer?</strong>
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Faster Processing Times:</strong> The card offers quicker visa approvals, helping you enter the German job market with minimal delays.
        </li>
        <li>
          <strong>Job Flexibility Without an Offer Letter:</strong> One major advantage of the <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong> is that it allows you to enter Germany without a job offer and search for relevant employment while you're there.
        </li>
        <li>
          <strong>Pathway to Permanent Residency:</strong> With continued employment and successful integration, you may become eligible for permanent residency in Germany — a key benefit of this program.
        </li>
        <li>
          <strong>Optimized Application Support:</strong> Through our expertise and proven methods, we ensure each application has a high chance of approval — reducing delays and increasing confidence.
        </li>
      </ul>

      {/* VJC Partner */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">
        <strong>VJC Overseas – Your Trusted Partner for Success</strong>
      </h2>
      <p className="mb-6 leading-relaxed">
        As leading Germany visa consultants, we take pride in offering full-spectrum guidance from consultation to visa approval. With a success rate that includes approvals every alternate day, our process speaks for itself. Our team ensures top-notch advice whether you're applying from Hyderabad, Bangalore, or across India. You can begin by checking your{" "}
        <Link href="https://www.vjcoverseas.com/assessment">
          <span style={{ color: "orange" }}><strong>Eligibility for the Germany Opportunity Card</strong></span>
        </Link>
        .
      </p>

      {/* VJC Advantage */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">The VJC Overseas Advantage:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Expert Consultation:</strong> We provide detailed evaluations and roadmaps for your successful relocation.
        </li>
        <li>
          <strong>Customized Job Search Assistance:</strong> Our network of recruiters and employers in Germany helps you connect with relevant job opportunities in your domain.
        </li>
        <li>
          <strong>End-to-End Visa Support:</strong> From document verification to embassy submission, we offer complete assistance in ensuring your application is flawless.
        </li>
        <li>
          <strong>Proven Results:</strong> We consistently deliver successful outcomes, which has positioned us as a top choice for skilled immigration services.
        </li>
      </ul>

      {/* Testimonial */}
      <h2 className="text-xl font-bold text-black mt-6 mb-3">Success Stories</h2>
      <p className="mb-6 leading-relaxed">
        I never thought that applying for the{" "}
        <Link href="https://www.vjcoverseas.com/germany-opportunity-card">
          <span style={{ color: "orange" }}><strong>Germany Opportunity Card</strong></span>
        </Link>{" "}
        would be this easy. Thanks to <strong style={{ color: "#000000" }}>VJC Overseas</strong>, my visa was approved quickly, and I found a great job within just a few months. — Anjali S., Software Developer
      </p>

      {/* Final CTA Section */}
      <div className="mt-6 mb-4">
        <p className="leading-relaxed font-bold text-black">
          Start Your Journey Today
        </p>
        <p className="mt-2 leading-relaxed font-bold text-black">
          Are you ready to build your future in Germany?
        </p>
        <p className="mt-2 leading-relaxed">
  The <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong> offers the ideal opportunity for you to live, work, and settle in Germany, backed by a streamlined process and professional guidance. Check your{" "}
  <strong style={{ color: "#000000" }}>Eligibility for the Germany Opportunity Card</strong> today to take the first step. Whether you're looking for migration, career advancement, or long-term residency, <strong style={{ color: "#000000" }}>VJC Overseas</strong> is here to make your dream a reality.
</p>

        <p className="mt-2 leading-relaxed font-bold text-black">
          Book a Free Consultation today and let our experts guide you through every step of your <strong style={{ color: "#000000" }}>Germany Opportunity Card</strong> journey.
        </p>
      </div>
    </div>
  );
};

export default Content;