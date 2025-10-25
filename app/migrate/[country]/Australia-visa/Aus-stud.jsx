import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ausstud = () => {
  return (
    <div
      className="m-2 p-2"
      style={{
        fontFamily: "Times New Roman",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "5%" }}>
        <h3 className="text-2xl mt-4 font-semibold text-black text-center">
          Migrate to Australia with -{" "}
          <span className="text-orange-600">VJC Overseas</span>
          : Start Your New Life in One of the World's Safest & Most Livable
          Countries
        </h3>
      </div>

      <p className="m-2 text-gray-800">
        Australia has become one of the top choices for skilled professionals,
        families, and students seeking a better quality of life, strong job
        market, and vibrant multicultural environment. With multiple immigration
        pathways and a transparent points-based system, migrating to Australia
        has never been more accessible. At{" "}
        <Link href="https://www.vjcoverseas.com/" target="_blank">
          <span className="text-orange-600 font-semibold">VJC Overseas</span>
        </Link>
        , we help you understand the best visa options suited to your profile and guide you through every
        step of your migration journey.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-australia.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <div className="px-4 lg:px-0">
        <h3 className="text-sky-600 font-semibold mb-2 text-md sm:text-lg">
          Why Migrate to Australia?
        </h3>
        <ul className="list-disc pl-4 mb-6 text-gray-800">
          <li>
            <b className="text-black">High Quality of Life:</b> Australia
            ranks high for safety, healthcare, education, and work-life balance.
          </li>
          <li>
            <b className="text-black">Thriving Job Market:</b> Great
            opportunities in healthcare, IT, engineering, and more.
          </li>
          <li>
            <b className="text-black">Permanent Residency Pathways:</b>{" "}
            Pathways like Subclass 189, 190, and 491 visas lead to PR.
          </li>
          <li>
            <b className="text-black">Multicultural Society:</b> A
            welcoming, diverse, and inclusive community.
          </li>
          <li>
            <b className="text-black">Free Education and Healthcare:</b> PR
            holders enjoy subsidized services.
          </li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Popular Australian Skilled Migration Visas
        </h4>
        <ul className="list-disc ml-8 mb-6 text-gray-800">
          <li>
            <b>Subclass 189:</b> Skilled Independent Visa – no sponsorship
            required.
          </li>
          <li>
            <b>Subclass 190:</b> Skilled Nominated Visa – state/territory
            nomination.
          </li>
          <li>
            <b>Subclass 491:</b> Regional Visa – for regional work and
            residence.
          </li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Australia PR Eligibility Checklist
        </h4>
        <ol className="ml-8 mb-6 text-gray-800 list-decimal">
          <li>
            <b>Age:</b> Under 45 years at invitation.
          </li>
          <li>
            <b>Occupation:</b> Listed on Skilled Occupation List (SOL).
          </li>
          <li>
            <b>Points Score:</b> Minimum of 65 points.
          </li>
          <li>
            <b>English Language:</b> IELTS, PTE, TOEFL, etc.
          </li>
          <li>
            <b>Skill Assessment:</b> From authorized authority.
          </li>
          <li>
            <b>Health & Character:</b> Clearance required.
          </li>
        </ol>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Step-by-Step Process to Migrate
        </h4>
        <ol className="ml-8 mb-6 text-gray-800 list-decimal">
          <li>Check Eligibility – points calculator.</li>
          <li>Skill Assessment – verify qualifications.</li>
          <li>English Test – meet language requirements.</li>
          <li>Submit EOI – via SkillSelect.</li>
          <li>Receive ITA – Invitation to Apply.</li>
          <li>Apply for PR Visa – with documents.</li>
          <li>Visa Decision – 4 to 8 months wait.</li>
        </ol>

        <h4 className="mb-2 font-semibold text-sky-600">
          How VJC Overseas Supports You
        </h4>
        <p className="mb-4 text-gray-800">
  With over a decade of expertise, our certified consultants provide:
</p>


        <ul className="list-disc ml-8 mb-6 text-gray-800">
          <li>Free eligibility check & consultation</li>
          <li>Skill assessment & EOI guidance</li>
          <li>Tailored documentation support</li>
          <li>Job search and relocation help</li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Start Your Journey Today!
        </h4>
        <p className="mb-6 text-gray-800">
          Ready for a new life in Australia?{" "}
          <span className="text-orange-600 font-semibold">
            contact VJC Overseas
          </span>{" "}
          and begin your migration journey with expert guidance.
        </p>

        <div className="mb-8 text-gray-800">
          <h4 className="text-sky-600 font-semibold mb-2">
            Migrate to Australia with{" "}
            <b className="text-gray-900">VJC Overseas</b> – Your Trusted Partner
            for a Better Life
          </h4>
          <p>
            Australia remains a top destination for individuals and families
            looking to build a secure and prosperous future. From skilled
            professionals and students to entrepreneurs and permanent residents,
            the country offers dynamic opportunities across various sectors. At{" "}
            <b className="text-gray-900">VJC Overseas</b>, we make your dream to
            migrate to Australia a seamless reality with customized visa
            support, expert consultation, and a step-by-step application process.
          </p>
          <br />
          <h4 className="text-sky-600 font-semibold mb-2">
            Why Choose Australia for Migration?
          </h4>
          <ul className="list-disc ml-6">
            <li>
              <b className="text-black">
                Robust Economy & Job Market:
              </b>{" "}
              With booming industries like IT, engineering, construction, and
              healthcare, there is high demand for skilled workers.
            </li>
            <li>
              <b className="text-black">High Quality of Life:</b> Excellent
              healthcare, world-class education, safety, and a strong work-life
              balance make it a top choice for families.
            </li>
            <li>
              <b className="text-black">Pathways to PR & Citizenship:</b>{" "}
              Migrating to Australia can be your gateway to{" "}
              <Link
                href="https://www.vjcoverseas.com/pr-visas/australia-pr"
                target="_blank"
              >
                <span className="text-orange-600">
                  Australia Permanent Residency
                </span>
              </Link>{" "}
              and eventually, Australian citizenship.
            </li>
            <li>
              <b className="text-black">Multicultural Society:</b>{" "}
              Australia is welcoming, diverse, and inclusive—perfect for a fresh
              start.
            </li>
          </ul>
          <br />
          <h4 className="text-sky-600 font-semibold mb-2">
            Explore Your Best Visa Options
          </h4>
          <p>
            Whether you're a skilled worker, graduate, or sponsored employee, we
            help you choose the most suitable visa route. For individuals
            looking to live and work in Australia, the{" "}
            <Link
              href="https://www.vjcoverseas.com/work-abroad/australia-work-permit"
              target="_blank"
            >
              <span className="text-orange-600">Australia Work Visa</span>
            </Link>{" "}
            is one of the most efficient ways to start your journey. This visa
            provides access to a wide range of employment sectors and can even
            lead to permanent settlement.
          </p>
          <p className="mt-2">
            Are you planning to stay long-term? Our experts will guide you
            through the process of applying for{" "}
            <b className="text-gray-900">Australia Permanent Residency</b>,
            helping you take full advantage of healthcare, education benefits,
            and long-term security.
          </p>
          <br />
          <h4 className="text-sky-600 font-semibold mb-2">
            Skilled Professionals – Make the Most of Australia's Demand
          </h4>
          <p>
            If you are a skilled individual with qualifications that match
            Australia's needs, then{" "}
            <Link
              href="https://www.vjcoverseas.com/work-abroad/australia-work-permit/nomited-visa-subclass-190"
              target="_blank"
            >
              <span className="text-orange-600">Australia Skilled Migration</span>
            </Link>{" "}
            programs like Subclass 190 or Subclass 189 are tailored for you.
            These visa subclasses are part of Australia’s General Skilled
            Migration (GSM) pathway, which uses a points-based system to select
            eligible candidates.
          </p>
          <br />
          <h4 className="text-sky-600 font-semibold mb-2">
            Work with the Best in the Industry
          </h4>
          <p>
            With thousands of successful visa approvals and years of experience,{" "}
            <Link href="https://www.vjcoverseas.com/" target="_blank">
              <span className="text-orange-600">
                Best Visa Immigration Consultants
              </span>
            </Link>{" "}
            From evaluating your profile and preparing your documents to
            handling submissions and updates, our team ensures a stress-free
            experience throughout your migration journey.
          </p>
          <br />
          <h4 className="text-sky-600 font-semibold mb-2">
            Begin Your Australian Dream with{" "}
            <b className="text-blue-600">VJC Overseas</b>
          </h4>
          <p>
            Don’t let complicated procedures stop your migration goals. At{" "}
            <b className="text-gray-900">VJC Overseas</b>, we simplify the visa
            process and provide personalized support every step of the way.
            Whether you're applying for a work visa, skilled migration, or PR,
            we are here to ensure your move is smooth, fast, and successful.
            <br />
            <br />
            Get in touch with us today to start your Australia migration process with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ausstud;