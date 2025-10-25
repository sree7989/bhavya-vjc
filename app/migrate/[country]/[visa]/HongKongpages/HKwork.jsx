import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  const KeywordLink = ({ href, children }) => (
    <Link
      href={href}
      style={{ color: "rgb(220, 4, 4)", fontWeight: "normal", textDecoration: "none" }}
    >
      {children}
    </Link>
  );

  const BoldKeyword = ({ children }) => (
    <strong style={{ color: "black", fontWeight: "bold" }}>{children}</strong>
  );

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
          Hong Kong Work Visa –
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        If you’re looking to work in one of the world’s most dynamic and
        exciting cities, a{" "}
        <KeywordLink href="https://www.vjcoverseas.com/migrate/hong-kong/employment-visa">
          Migrate To Hong Kong Employment Visa
        </KeywordLink>{" "}
        is your key to unlocking career opportunities in this global financial
        hub. At{" "}
        <BoldKeyword>VJC Overseas</BoldKeyword>,
        we provide expert guidance and streamlined services to help you
        navigate the process of obtaining a work visa for Hong Kong, ensuring a
        smooth transition for both you and your career.
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Why Choose Hong Kong for Work?
      </h3>
      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/ukimage5.webp"
            alt="Image description"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
            priority
            unoptimized
          />
        </div>
        <p style={{ marginBottom: "20px" }}>
          Hong Kong is not only a major financial centre but also a gateway to
          China and other parts of Asia. With a vibrant economy, high-quality
          infrastructure, and a highly skilled workforce, it offers exceptional
          career opportunities in various sectors, including finance,
          technology, logistics, and hospitality. Whether you’re an
          entrepreneur, skilled worker, or professional looking to expand your
          horizons,{" "}
          <KeywordLink href="https://www.vjcoverseas.com/migrate/hong-kong">
            Migrate to Hong Kong
          </KeywordLink>{" "}
          provides a favourable environment for growth and development.
        </p>
      </div>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Types of Hong Kong Work Visas
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Hong Kong offers various types of work visas depending on your
        profession and qualifications. The most common types include:
      </p>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          <strong>General Employment Policy (GEP) Visa:</strong> For foreign
          nationals who have been offered a job in Hong Kong and have skills or
          qualifications that are in demand in the region.
        </li>
        <li>
          <strong>Employment as a Professional Visa:</strong> For highly skilled
          individuals with a degree or relevant qualifications, such as in
          finance, IT, engineering, or healthcare.
        </li>
        <li>
          <strong>Inbound Tour Operator Visa:</strong> For individuals involved
          in the tourism industry, including tour guides and operators.
        </li>
        <li>
          <strong>Training Visa:</strong> For those coming to Hong Kong to
          receive training that will enhance their professional development.
        </li>
        <li>
          <strong>
            Entrepreneur Visa (Also called{" "}
            <BoldKeyword>VJC Overseas</BoldKeyword>{" "}
            Investment Visa):
          </strong>{" "}
          For business owners and investors who plan to start a new business or
          join an existing one in Hong Kong.
        </li>
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Eligibility Criteria for a Hong Kong Work Visa
      </h3>
      <p style={{ marginBottom: "20px" }}>
        To be eligible for a Hong Kong work visa, you must meet several
        criteria, including:
      </p>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          A job offer from a Hong Kong employer – You must have secured
          employment with a company that is registered and licensed in Hong
          Kong.
        </li>
        <li>
          Proof of qualifications and work experience – Applicants must have the
          relevant educational background, professional qualifications, and
          experience.
        </li>
        <li>
          Demonstrating a special skill or expertise – Your employment should
          fill a specific need or gap in the local workforce.
        </li>
        <li>
          Good character – You must not have any criminal record and must comply
          with all Hong Kong immigration regulations. For more details, visit{" "}
          <KeywordLink href="https://www.vjcoverseas.com/study-abroad/hongkong">
            Study In Hong Kong
          </KeywordLink>
          .
        </li>
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Processing Time for a Hong Kong Work Visa
      </h3>
      <p style={{ marginBottom: "20px" }}>
        The processing time for a Hong Kong work visa typically takes around 4
        to 8 weeks from the date of application submission. However, this can
        vary depending on the complexity of your application, the specific visa
        category, and the volume of applications being processed at the time.
      </p>
      <p style={{ marginBottom: "20px" }}>
        At{" "}
        <BoldKeyword>
          VJC Overseas
        </BoldKeyword>{" "}
        , we ensure that your application is completed accurately and submitted
        in a timely manner to avoid unnecessary delays.
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Hong Kong Work Visa Fees
      </h3>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          <strong>
            General Employment Visa / Employment as a Professional Visa:
          </strong>
          <ul>
            <li>HKD 190 (for the initial application)</li>
            <li>Additional fees may apply for extension or renewal.</li>
          </ul>
        </li>
        <li>
          <strong>Investment Visa (Entrepreneur Visa):</strong>
          <ul>
            <li>HKD 190 (initial application)</li>
            <li>Additional charges for dependents (if applicable).</li>
          </ul>
        </li>
        <li>
          <strong>Training Visa:</strong> HKD 190 (initial application)
        </li>
      </ul>
      <p style={{ marginBottom: "20px" }}>
        Please note that fees are subject to change, and there may be additional
        charges depending on the processing requirements. For trusted advice,
        consult the{" "}
        <KeywordLink href="https://www.vjcoverseas.com/">
          Best Visa Immigration Consultants
        </KeywordLink>
        .
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        How VJC Overseas Can Help
      </h3>
      <ul style={{ marginBottom: "20px" }}>
        <li>
          <strong>Personalized Consultation:</strong> We assess your unique
          situation and recommend the best visa category.
        </li>
        <li>
          <strong>Application Preparation:</strong> We handle all the paperwork
          and ensure that everything is in order before submission.
        </li>
        <li>
          <strong>Timely Updates:</strong> We keep you informed of your
          application status every step of the way.
        </li>
        <li>
          <strong>Post-Visa Services:</strong> From visa extensions to bringing
          in family members, we offer comprehensive support throughout your stay
          in Hong Kong.
        </li>
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Get Started Today
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Are you ready to take the next step in your career by working in Hong
        Kong? Contact{" "}
        <KeywordLink href="https://www.vjcoverseas.com/">VJC Overseas</KeywordLink>{" "}
        today for expert assistance with your Hong Kong work visa application.
        Let us help you make your Hong Kong dream a reality!
      </p>
      <p style={{ marginBottom: "20px", fontWeight: "bold", fontSize: "15px" }}>
        Call us at +91-9160449000 or email info@vjcoverseas.com to schedule a
        consultation with one of our visa specialists.
      </p>
    </div>
  );
};

export default Content;