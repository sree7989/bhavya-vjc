import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  // custom class to disable underline on hover & normal for links
  const noUnderlineLinkClass =
    "text-orange-600 font-bold hover:no-underline no-underline";

  return (
    <div
      style={{
        position: "relative",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          Hong Kong Dependent Visa –{" "}
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      {/* Image and first two paragraphs */}
      <div className="flex flex-col lg:flex-row items-start gap-4 mb-6">
        <div className="lg:w-2/3">
          <p style={{ marginBottom: "20px" }}>
            At{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>VJC Overseas</span>
            , we understand how important it is for families to be together,
            especially when relocating internationally. Our dedicated team
            specializes in assisting applicants for the Hong Kong Dependent
            Visa, ensuring that every step of the process is handled with
            professionalism, accuracy, and care. Whether you are joining a
            spouse, parent, or child who is already a Hong Kong resident, our
            mission is to make the visa journey stress-free so you can focus on
            reuniting with your loved ones.
          </p>
          <p style={{ marginBottom: "20px" }}>
            With years of expertise and recognition as one of the{" "}
            <Link
              href="https://www.vjcoverseas.com/"
              className={noUnderlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Best Visa Immigration Consultants
            </Link>
            , we provide a complete end-to-end service — from consultation and
            eligibility checks to document preparation, submission, and
            follow-up with immigration authorities.
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src="/hong-kongdependtentvisa.jpg"
            alt="Hong Kong Dependent Visa - VJC Overseas"
            width={500} // Replace with your image's actual width
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="px-4 lg:px-0">
          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            What is the Hong Kong Dependent Visa?
          </h3>
          <p style={{ marginBottom: "20px" }}>
            The Hong Kong Dependent Visa is designed to allow eligible family
            members of Hong Kong permanent residents or holders of visas such as
            the Hong Kong Employment Visa or Investment Visa to live in Hong
            Kong. It’s a crucial pathway for families who wish to maintain close
            bonds while one member is working, studying, or doing business in
            the city.
          </p>
          <p style={{ marginBottom: "20px" }}>Dependents under this visa category may include:</p>
          <ul style={{ marginBottom: "20px" }}>
            <li>
              Spouses: Legally married partners (including same-sex marriages
              recognized in the sponsor’s country).
            </li>
            <li>
              Children: Unmarried children under the age of 18, or adult children
              who are financially dependent due to physical or mental conditions.
            </li>
            <li>
              Parents: Dependent parents of a Hong Kong resident or visa holder.
            </li>
          </ul>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Who is Eligible to Apply?
          </h3>
          <p style={{ marginBottom: "20px" }}>
            To qualify for a Dependent Visa, the sponsor must:
          </p>
          <ul style={{ marginBottom: "20px" }}>
            <li>
              Be a Hong Kong permanent resident or hold a valid visa such as an{" "}
              <Link
                href="https://www.vjcoverseas.com/migrate/hong-kong/employment-visa"
                className={noUnderlineLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Migrate to Hong Kong Employment Visa
              </Link>
              , investment, or other eligible visa.
            </li>
            <li>
              Demonstrate financial ability to support the dependent(s) without
              relying on public assistance.
            </li>
            <li>
              Provide suitable accommodation for the dependent(s).
            </li>
          </ul>
          <p style={{ marginBottom: "20px" }}>
            In addition, the applicant must satisfy the general immigration
            requirements, such as having no criminal record and being in good
            health.
          </p>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Step-by-Step Hong Kong Dependent Visa Process
          </h3>
          <ol style={{ marginBottom: "20px" }}>
            <li>
              <strong>Consultation & Eligibility Assessment:</strong> At{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>VJC Overseas</span>, we start with an in-depth review of your
              circumstances to confirm eligibility and prepare a customized
              checklist.
            </li>
            <li>
              <strong>Document Preparation:</strong> We assist with compiling all
              essential documents, including relationship proof, sponsor’s
              identity papers, financial records, and accommodation details.
            </li>
            <li>
              <strong>Application Submission:</strong> Your application is filed
              with the Hong Kong Immigration Department, following all
              procedural guidelines.
            </li>
            <li>
              <strong>Application Review & Processing:</strong> Typical
              processing takes 4–8 weeks, though complex cases may require more
              time.
            </li>
            <li>
              <strong>Visa Issuance & Entry:</strong> Upon approval, the visa
              label or entry permit is issued, allowing you to travel and begin
              your life in Hong Kong with your family.
            </li>
          </ol>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Processing Time & Fees
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Standard Processing: Usually 4–8 weeks.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Visa Fee: HKD 230 per dependent.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Additional Costs: May apply for extensions, translations, or
            expedited services.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Our consultants at{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>VJC Overseas</span>{" "}
            will keep you informed at every stage, ensuring you always know
            where your application stands.
          </p>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Why Hong Kong is Ideal for Families
          </h3>
          <p style={{ marginBottom: "20px" }}>
            When you{" "}
            <Link
              href="https://www.vjcoverseas.com/migrate/hong-kong/"
              className={noUnderlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Migrate to Hong Kong
            </Link>{" "}
            (read more here), you’re choosing one of the safest, cleanest, and
            most modern cities in the world. Families benefit from excellent
            public transport, a low crime rate, and access to world-class
            education. If your children plan to further their academics,
            opportunities to{" "}
            <Link
              href="https://www.vjcoverseas.com/study-abroad/hongkong"
              className={noUnderlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Study in Hong Kong
            </Link>{" "}
            are abundant, with top-ranking universities and diverse
            international schools available.
          </p>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Why Choose VJC Overseas for Your Dependent Visa?
          </h3>
          <ul style={{ marginBottom: "20px" }}>
            <li>
              Proven Expertise: Years of successful Hong Kong visa applications
              from{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>VJC Overseas</span>.
            </li>
            <li>
              Personalized Guidance: Every family situation is unique, and we
              tailor our approach accordingly.
            </li>
            <li>
              Full-Service Assistance: From form filling to liaising with
              immigration, we handle everything.
            </li>
            <li>
              Transparency: Clear fee structures and no hidden charges.
            </li>
          </ul>

          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Begin Your Family’s New Chapter in Hong Kong
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Whether your goal is to join a spouse on an employment visa or to
            bring your children to one of Asia’s top education hubs,{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>VJC Overseas</span>{" "}
            is here to make it happen. We simplify the immigration process so you
            can focus on the moments that matter most — being together.
          </p>
          <p
            style={{
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Call us today at +91-9160449000 or visit our website{" "}
            <Link
              href="https://www.vjcoverseas.com/"
              className={noUnderlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              VJC Overseas
            </Link>{" "}
            to schedule your consultation and start your journey toward living
            together in Hong Kong.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;