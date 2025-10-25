import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div className="relative px-6 py-12 bg-white font-[Times_New_Roman] overflow-hidden">
      {/* Title */}
      <div className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-orange-600 text-center">
          Migrate to Germany – Your Gateway to a Brighter Future
        </h3>
      </div>

      {/* Intro Paragraph */}
      <p className="mb-6 text-gray-800 leading-relaxed">
        Dreaming of a fresh start in one of Europe’s strongest economies?{" "}
        <Link
          href="https://www.vjcoverseas.com/migrate/germany"
          className="font-bold text-orange-500 hover:underline"
        >
          Migrate to Germany
        </Link>{" "}
        with the right guidance and support. Germany offers a wealth of
        opportunities for skilled professionals, students, entrepreneurs, and
        families. Whether you're seeking world-class education, high-paying jobs,
        or a stable lifestyle — moving to Germany could be your smartest decision yet.
      </p>

      {/* Why Choose Germany */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Why Choose Germany?
      </h3>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-2">
        <li>
          <strong className="text-sky-600">Thriving Job Market:</strong> Germany
          is actively seeking international talent in IT, engineering,
          healthcare, and more through options like the{" "}
          <Link
            href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/work-permit-visa"
            className="font-bold text-orange-500 hover:underline"
          >
            Germany Skilled Worker Visa
          </Link>
          .
        </li>
        <li>
          <strong className="text-sky-600">Free or Low-Cost Education:</strong>{" "}
          Study at prestigious public universities without heavy tuition fees.
        </li>
        <li>
          <strong className="text-sky-600">Stable Economy & High Living Standards:</strong>{" "}
          Enjoy a safe, efficient, and high-quality lifestyle.
        </li>
        <li>
          <strong className="text-sky-600">Path to Permanent Residency:</strong>{" "}
          Explore long-term career growth and security through the{" "}
          <Link
            href="https://www.vjcoverseas.com/pr-visas/germany-blue-card"
            className="font-bold text-orange-500 hover:underline"
          >
            Germany PR Visa
          </Link>
          .
        </li>
      </ul>

      {/* Opportunity Card */}
      <p className="mb-2 text-black font-bold">
        Explore the Germany Opportunity Card – A New Pathway to Work in Germany.
      </p>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Germany has recently introduced the{" "}
        <Link
          href="https://www.vjcoverseas.com/work-abroad/germany-work-permit/opportunity-card"
          className="font-bold text-orange-500 hover:underline"
        >
          Germany Opportunity Card
        </Link>
        , a points-based immigration pathway designed to attract skilled foreign
        professionals. This initiative allows qualified individuals to enter
        Germany without a prior job offer, search for employment, and transition
        smoothly into the workforce. It’s an ideal route for those with
        education, experience, language skills, and adaptability.{" "}
        <strong className="text-black">Germany Opportunity Card</strong> could
        be the perfect alternative to traditional work visas.
      </p>

      {/* Popular Visa Options */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Popular German Visa Options
      </h3>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-2">
        <li>
          <strong className="text-black">Germany Skilled Worker Visa</strong>:
          For professionals with recognized qualifications and work experience.
        </li>
        <li>
          <strong className="text-black">Germany Opportunity Card:</strong> A
          points-based pathway to live and work in Germany.
        </li>
        <li>
          <strong className="text-black">Student Visa:</strong> Study in
          top-ranked universities with global recognition.
        </li>
        <li>
          <strong className="text-black">Germany Job Seeker Visa:</strong> Stay
          in Germany for up to 6 months while finding employment.
        </li>
        <li>
          <strong className="text-black">Family Reunion Visa:</strong> Join your
          spouse or family already living in Germany.
        </li>
      </ul>

      {/* Migration Services */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Your Migration Journey, Simplified
      </h3>
      <p className="mb-4">
        At{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="font-bold text-orange-500 hover:underline"
        >
          Best Visa Immigration Consultants
        </Link>
        , we turn your migration dream into a well-planned reality.
      </p>
      <p className="mb-2 font-semibold">We offer:</p>
      <ul className="mb-6 list-disc pl-5 text-gray-800 space-y-1">
        <li>Free Eligibility Assessment</li>
        <li>Document Verification & Application Guidance</li>
        <li>Visa Filing & Interview Preparation</li>
        <li>Pre-Departure and Settlement Support</li>
      </ul>
      <p className="mb-6 text-gray-800">
        Our dedicated team helps you at every step — from choosing the right visa
        to securing a smooth transition to your new life in Germany.
      </p>

      {/* Who Can Apply */}
      <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3">
        Who Can Apply?
      </h3>
      <ul className="mb-10 list-disc pl-5 text-gray-800 space-y-1">
        <li>Professionals with degrees/diplomas</li>
        <li>Students looking for world-class education</li>
        <li>Entrepreneurs and freelancers</li>
        <li>Recent graduates aiming for global careers</li>
      </ul>

      {/* Image Section */}
      <div className="relative my-10 mx-auto w-fit p-2 lg:p-4 bg-gradient-to-r from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src="/migrate/migrate-germany.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] rounded-xl object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Closing */}
      <p className="text-center font-medium leading-relaxed">
        Ready to Migrate to Germany? <br />
        Choose{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="font-bold text-orange-500 hover:underline"
        >
          VJC Overseas
        </Link>
        , your trusted partner in global migration. Whether it's the{" "}
        <strong className="text-black">Germany Skilled Worker Visa</strong>,{" "}
        <strong className="text-black">Germany Job Seeker Visa</strong> or{" "}
        <strong className="text-black">Germany PR Visa</strong> — we provide
        expert consultation and reliable visa processing support.
      </p>
    </div>
  );
};

export default Content;
