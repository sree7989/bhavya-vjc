import React from "react";
import Image from "next/image";
import Link from "next/link";

const CanadaMigration = () => {
  return (
    <div
      style={{
        fontFamily: "Times New Roman, serif",
        fontSize: "1.1rem",
      }}
      className="px-0 py-8 lg:p-[2rem]"
    >
      <h1 className="text-2xl text-center font-bold mb-6 text-orange-600">
  Migrate to Canada – Live, Work & Thrive in the Land of Opportunities
</h1>


      <p className="mb-4 text-base">
        Looking to begin a new chapter in a country that offers exceptional
        quality of life, world-class healthcare, and a strong sense of
        community? Canada welcomes over 400,000 newcomers annually through a
        range of immigration pathways — and you could be one of them. Whether
        you’re seeking global education, career growth, or a safe environment
        for your family, Canada offers unmatched
        opportunities to turn your aspirations into reality.
      </p>

      <p className="mb-4 text-base">
        As one of the{" "}
        <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold">
          Best Visa Immigration Consultants
        </Link>
        ,{" "}
        <b className="text-black font-bold">VJC Overseas</b> specializes in
        helping individuals and families navigate the Canadian immigration
        system with ease. From eligibility checks to post-landing assistance,
        we ensure your move is smooth, stress-free, and successful.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-canada.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h2 className="text-1xl font-semibold mb-2 text-black">Why Move to Canada?</h2>
      <ul className="list-disc mb-4 text-base">
        <li>
          <strong>High Demand for Skilled Workers –</strong> Canada’s thriving
          industries, from technology to healthcare, are always seeking global
          talent.
        </li>
        <li>
          <strong>Free Public Healthcare –</strong> Enjoy access to top-tier
          medical services at no cost.
        </li>
        <li>
          <strong>Education Excellence –</strong> Affordable, globally
          recognized institutions make it the ideal destination to{" "}
          <Link href="https://www.vjcoverseas.com/study-abroad/canada" className="text-orange-600 font-bold">
            Study in Canada
          </Link>
          .
        </li>
        <li>
          <strong>Safe & Welcoming Society –</strong> Consistently ranked among
          the safest countries in the world.
        </li>
        <li>
          <strong>Clear PR & Citizenship Pathway –</strong> Multiple immigration
          programs make it easier to transition from temporary to permanent
          residency.
        </li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-black">
        Popular Canadian Immigration Pathways
      </h2>
      <ul className="list-disc mb-4 text-base">
        <li>
          <span className="font-bold text-black">Express Entry</span> – A competitive points-based system for skilled professionals.
        </li>
        <li>
          <span className="font-bold text-black">Provincial Nominee Program (PNP)</span> – Provincial governments nominate skilled candidates for permanent residency.
        </li>
        <li>
          <span className="font-bold text-black">Student Visa</span> – A direct path for those who want to study and later transition to PR.
        </li>
        <li>
          <span className="font-bold text-black">Canada Work Permit</span> – Work legally in Canada through employer sponsorship or LMIA.
        </li>
        <li>
          <span className="font-bold text-black">Family Sponsorship</span> – Bring your spouse, children, or parents to join you in Canada.
        </li>
        <li>
          <span className="font-bold text-black">Start-Up Visa</span> – For entrepreneurs with innovative business ventures.
        </li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-black">
        Who Should Consider Migrating to Canada?
      </h2>
      <ul className="list-disc mb-4 text-base">
        <li>IT professionals, engineers, and healthcare experts seeking global career opportunities.</li>
        <li>Students and graduates who want to combine education with work experience.</li>
        <li>Families aiming for a safer, more prosperous future.</li>
        <li>Entrepreneurs eager to expand internationally.</li>
        <li>
          Whether your aim is temporary employment, higher education, or{" "}
          <Link href="https://www.vjcoverseas.com/pr-visas" className="text-orange-600 font-bold">
            Canada Permanent Residency
          </Link>
          , there’s a pathway suited to your ambitions.
        </li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-black">How VJC Overseas Can Help</h2>
      <p className="mb-4 text-base">
        Migrating to a new country can be complex — but it doesn’t have to be
        overwhelming. At{" "}
        <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold">
          VJC Overseas
        </Link>
        , our comprehensive services include:
      </p>
      <ul className="list-disc mb-4 text-base">
        <li>Free Eligibility Assessment to identify the best immigration stream for you.</li>
        <li>Customized visa strategy aligned with your personal and professional goals.</li>
        <li>Complete document preparation and application support.</li>
        <li>IELTS guidance and test preparation.</li>
        <li>Post-landing assistance to help you settle smoothly in Canada.</li>
      </ul>

      <p className="text-base">
        We take the guesswork out of immigration, ensuring that your journey from
        application to arrival is seamless.
      </p>

      <h2 className="text-1xl font-semibold mb-2 text-black">Your Canadian Dream Starts Now</h2>
      <p className="text-base">
        Whether your goal is to secure a{" "}
        <Link href="https://www.vjcoverseas.com/migrate/canada/work-permit" className="text-orange-600 font-bold">
          Canada Work Permit
        </Link>
        , enroll in a top-ranked university, or apply for{" "}
        <b className="text-black font-bold">Canada Permanent Residency</b>,{" "}
        Canada offers life-changing
        opportunities for individuals and families worldwide.
      </p>
      <p className="text-base">
        With the expertise of{" "}
        <b className="text-black font-bold">VJC Overseas</b>, you can take confident steps
        toward your future in Canada — a country where safety, diversity, and
        opportunity are part of everyday life.
      </p>
      <p className="text-base">
        Contact us today to start your journey and turn your dream of living in{" "}
        Canada into reality.
      </p>
    </div>
  );
};

export default CanadaMigration;