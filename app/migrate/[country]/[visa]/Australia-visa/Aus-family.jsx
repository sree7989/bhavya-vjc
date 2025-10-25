import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ausfamily = () => {
  return (
    <div
      className="m-2 p-4"
      style={{
        fontFamily: "Times New Roman",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "5%" }}>
        <h3 className="text-2xl mt-4 font-semibold text-black text-center">
          Australia Family Visa -{" "}
          <span className="text-red-600">VJC Overseas</span>
        </h3>
      </div>

      {/* NEW CONTENT STARTS HERE */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-black mb-4">
          <b className="text-black">Australia Family Visa</b> –{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>
        </h3>

        <p className="mb-6">
          Australia is a dream destination for many families around the world, known for its safety, world-class
          healthcare, excellent education system, and a multicultural society.
          If your goal is to reunite with your loved ones, the{" "}
          <b className="text-black">Australia Family Visa</b> provides the
          perfect pathway to build a life together in this vibrant and
          prosperous country.
        </p>
        <p className="mb-6">
          Whether you want to sponsor a spouse, child, parent, or other
          dependent relatives,{" "}
          <Link
            href="https://www.vjcoverseas.com/"
            className="text-orange-500 font-semibold"
          >
            VJC Overseas
          </Link>{" "}
          offers expert support throughout the process, ensuring each family reunification journey is handled
          with care, accuracy, and speed.
        </p>

        <h4 className="font-semibold mb-2">Family Visa Categories in Australia</h4>
        <p className="mb-6">
          Australia offers several visa streams
          under the family migration program, tailored to different
          circumstances and relationships. Here are the main types:
        </p>

        {/* IMAGE MOVED TO THIS SECTION */}
        <div className="flex justify-center my-6">
          <Image
            src="/assets/Ausfamily.png"
            alt="Australia Family Visa"
            width={500}
            height={300}
            className="w-full text-center max-w-xs sm:max-w-sm md:max-w-md lg:w-full lg:h-70 object-contain shadow-lg rounded-lg"
            priority
            unoptimized
          />
        </div>

        <h5 className="font-semibold">1. Partner Visa (Subclass 820 & 801)</h5>
        <p className="mb-6">
          For individuals in genuine relationships with 
          Australian citizens or permanent
          residents, the Partner Visa allows temporary and eventually permanent
          residency. It includes:
        </p>
        <ul className="ml-8 list-disc mb-6">
          <li>
            <b>Temporary Visa (Subclass 820)</b> – for staying in 
            Australia during application processing
          </li>
          <li>
            <b>Permanent Visa (Subclass 801)</b> – granted after demonstrating
            the stability of your relationship
          </li>
        </ul>
        <p className="mb-6">
          This visa supports both married and de facto couples, including
          same-sex relationships.
        </p>

        <h5 className="font-semibold">2. Parent Visa (Subclass 103 & 804)</h5>
        <p className="mb-6">
          Parents of Australian citizens or
          permanent residents may apply to live in 
          Australia permanently. Popular options
          include:
        </p>
        <ul className="ml-8 list-disc mb-6">
          <li>
            <b>Parent Visa (Subclass 103)</b> – standard processing and lower
            cost
          </li>
          <li>
            <b>Contributory Parent Visa (Subclass 143)</b> – faster processing
            with a higher fee
          </li>
        </ul>

        <h5 className="font-semibold">3. Child Visa (Subclass 101 & 802)</h5>
        <p className="mb-6">
          Designed for dependent children of 
          Australian citizens or permanent
          residents:
        </p>
        <ul className="ml-8 list-disc mb-6">
          <li>
            <b>Child Visa (Subclass 101)</b> – for children outside 
            Australia
          </li>
          <li>
            <b>Adoption Visa (Subclass 102)</b> – for adopted children or legal
            wards
          </li>
          <li>
            <b>Child Visa (Subclass 802)</b> – for children already in 
            Australia
          </li>
        </ul>

        <h5 className="font-semibold">4. Other Family Visas</h5>
        <ul className="ml-8 list-disc mb-6">
          <li>
            <b>Aged Dependent Relative Visa (Subclass 114)</b> – for elderly
            relatives financially reliant on an 
            Australian sponsor
          </li>
          <li>
            <b>Remaining Relative Visa (Subclass 115)</b> – for individuals who
            have no other close family outside 
            Australia
          </li>
          <li>
            <b>Carer Visa (Subclass 116)</b> – for family members providing
            long-term care to a relative with a serious medical condition
          </li>
        </ul>

        <h5 className="font-semibold">5. Visitor Visas for Family</h5>
        <p className="mb-6">
          If your goal is short-term visitation rather than migration, the{" "}
          <b>Visitor Visa (Subclass 600)</b> enables family visits of up to 12
          months. It's ideal for spending quality time with your loved ones
          without the need for permanent relocation.
        </p>

        <h4 className="font-semibold mb-2">Why Work with VJC Overseas?</h4>
        <ul className="mb-6 list-disc ml-8">
          <li>
            <b>Personalized Strategy:</b> Every family’s situation is different.
            We help you identify the best visa stream and ensure your application
            meets all immigration requirements.
          </li>
          <li>
            <b>End-to-End Support:</b> From assessing eligibility to gathering
            documents and lodging your application, we’re with you at every
            stage.
          </li>
          <li>
            <b>Faster, Accurate Processing:</b> Our experienced consultants
            streamline your case to avoid unnecessary delays and minimize the
            risk of rejections.
          </li>
          <li>
            <b>Ethical & Transparent Services:</b> You’ll receive honest advice,
            a clear roadmap, and transparent pricing—no surprises, ever.
          </li>
        </ul>

        <h4 className="font-semibold mb-2">A New Life Together Starts Here</h4>
        <p className="mb-6">
          Choosing to reunite with family through migration is a significant and
          rewarding journey. Whether you're starting life with a partner,
          bringing your children to access better opportunities, or supporting
          aging parents, 
          Australia provides a stable and
          supportive environment to grow together.
        </p>
        <p className="mb-6">
          For those who wish to{" "}
          <Link
            href="https://www.vjcoverseas.com/migrate/australia"
            className="text-orange-500 font-semibold"
          >
            Migrate to Australia
          </Link>{" "}
          through family sponsorship or any skilled program,{" "}
          <b className="text-black">VJC Overseas</b> provides customized support
          and guidance.
        </p>
        <p className="mb-6">
          Families who pursue educational opportunities for their children can
          also explore the{" "}
          <Link
            href="https://www.vjcoverseas.com/migrate/australia/student-visa"
            className="text-orange-500 font-semibold"
          >
            Study in Australia
          </Link>{" "}
          visa options, while staying connected through family reunification.
        </p>
        <p className="mb-6">
          Additionally, if you're planning to sponsor family while working in 
          Australia, you may want to check out the{" "}
          <Link
            href="https://www.vjcoverseas.com/work-abroad/australia-work-permit"
            className="text-orange-500 font-semibold"
          >
            Australia Work Visa
          </Link>{" "}
          options, which offer flexibility and support for both primary
          applicants and dependents.
        </p>
        <p className="mb-6">
          Permanent residents can also invite their families through long-term
          solutions under{" "}
          <Link
            href="https://www.vjcoverseas.com/pr-visas/australia-pr"
            className="text-orange-500 font-semibold"
          >
            Australia Permanent Residency
          </Link>
          , offering security and access to benefits in 
          Australia.
        </p>
        <p className="mb-6">
          If you're eligible under a skill-based category,{" "}
          <Link
            href="https://www.vjcoverseas.com/work-abroad/australia-work-permit/nomited-visa-subclass-190"
            className="text-orange-500 font-semibold"
          >
            Australia Skilled Migration
          </Link>{" "}
          pathways open the door for your entire household to thrive.
        </p>
        <p className="mb-6">
          As one of the{" "}
          <Link
            href="https://www.vjcoverseas.com/"
            className="text-orange-500 font-semibold"
          >
            Best Visa Immigration Consultants
          </Link>{" "}
          in the industry, we’re proud to stand by your side in every step of
          your migration journey.
        </p>

        <h4 className="font-semibold mb-2">Ready to Reunite with Your Family in Australia?</h4>
        <p className="mb-6">
          Contact{" "}
          <b className="text-black">VJC Overseas</b> today to start your{" "}
          <b className="text-black">Australia Family Visa</b> application. Let
          us help you bring your family closer—because no one should be
          separated from those they love.
        </p>
      </div>
    </div>
  );
};

export default Ausfamily;