import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  // Define styles for colored bullets and numbers
  const bulletStyle = {
    color: "#0ea5e9", // sky-600
    fontWeight: "bold",
    marginRight: "8px",
  };

  // Keyword components with internal link styled in orange (not used elsewhere here)
  const KeywordLink = ({ href, children }) => (
    <Link href={href} legacyBehavior>
      <a
        style={{
          color: "#ea580c", // orange-600
          fontWeight: "normal",
          textDecoration: "none",
          textTransform: "capitalize",
        }}
      >
        {children}
      </a>
    </Link>
  );

  // Helper component to render bold black subheading and normal description
  const CriteriaItem = ({ title, description }) => (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "8px",
        color: "rgb(3, 60, 65)",
        fontSize: "16px",
        listStyle: "none",
      }}
    >
      <span style={bulletStyle}>•</span>
      <span>
        <span
          style={{
            fontWeight: "bold",
            color: "#000000", // dark black for subheading
            whiteSpace: "nowrap",
          }}
        >
          {title}{" "}
        </span>
        <span>– {description}</span>
      </span>
    </li>
  );

  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
        color: "#000",
      }}
    >
      <div style={{ marginBottom: "50px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          Migrate to Hong Kong –{" "}
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px", fontSize: "18px", color: "rgb(3, 60, 65)" }}>
        Looking for global career growth, world-class living, and access to Asia’s top financial hub? Migrating to Hong Kong gives you a unique advantage — blending vibrant city life, robust economic opportunity, and excellent public services in one of the safest and most modern cities in the world. Partnering with{" "}
        <Link href="https://www.vjcoverseas.com/" legacyBehavior>
          <a
            style={{
              color: "#ea580c",
              fontWeight: "normal",
              textDecoration: "none",
              textTransform: "capitalize",
            }}
          >
            Best Visa Immigration Consultants
          </a>
        </Link>{" "}
        , recognized among the <b>Best Visa Immigration Consultants</b>, ensures you receive expert guidance throughout every step of the process.
      </p>

      <p style={{ marginBottom: "20px", fontSize: "18px", color: "rgb(3, 60, 65)" }}>
        Whether you're a skilled professional, entrepreneur, student, or relocating with family, Hong Kong offers streamlined visa options and a multicultural environment perfect for building your future. Trust <b>VJC Overseas</b> to assist you every step of the way.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-uae.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Why Choose Hong Kong?
      </h3>
      <ul
        style={{
          marginBottom: "30px",
          paddingLeft: "20px",
          color: "rgb(3, 60, 65)",
          fontSize: "16px",
          listStyle: "none",
        }}
      >
        {[
          "Top Global Business Hub – Home to multinational companies, finance, tech & trade sectors.",
          "Strategic Asia-Pacific Location – Gateway to Mainland China and Southeast Asia.",
          "Safe & Efficient City – Low crime rate, excellent infrastructure, clean and modern environment.",
          "Simple Tax System – Among the lowest personal and corporate tax rates globally.",
          "International Education – World-class universities and international schools make it attractive for those who want to study in Hong Kong while enjoying an international lifestyle.",
          "Affordable Healthcare – Advanced medical system with public and private options.",
        ].map((text, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            <span style={bulletStyle}>•</span> {text}
          </li>
        ))}
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>
        Popular Hong Kong Visa Options
      </h3>

      <div
        style={{
          padding: "0",
          color: "#000",
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "40px",
        }}
      >
        <p>
          Hong Kong offers a variety of visa categories to suit different needs:
        </p>
        <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            <strong>General Employment Policy (GEP):</strong> For skilled professionals with a valid job offer in Hong Kong. No quota system; renewable and may lead to permanent residency. Those seeking this route can apply for the{" "}
            <KeywordLink href="https://www.vjcoverseas.com/migrate/hong-kong/employment-visa">
              Migrate Hong Kong Employment Visa
            </KeywordLink>{" "}
            for a smooth transition into the workforce.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Student Visa:</strong> For international students enrolled in full-time accredited programs. Eligible to work part-time on campus and full-time during breaks.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Quality Migrant Admission Scheme (QMAS):</strong> Points-based system for talented individuals (no job offer required). Open to professionals in arts, IT, finance, education, and more.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Investment Visa (Entrepreneur Visa):</strong> Perfect for aspiring entrepreneurs aiming to establish a business in the region. Applicants can explore the{" "}
            <KeywordLink href="https://www.vjcoverseas.com/migrate/hong-kong/business-visa">
               Migrate Hong Kong Business Visa
            </KeywordLink>{" "}
            to gain entry as investors or company founders.
          </li>
          <li style={{ marginBottom: "8px" }}>
            <strong>Dependent Visa:</strong> For spouses and children of visa holders or permanent residents.
          </li>
        </ul>
      </div>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Who Can Apply to Migrate to Hong Kong?
      </h3>
      <ul
        style={{
          marginBottom: "30px",
          paddingLeft: "20px",
          color: "rgb(3, 60, 65)",
          fontSize: "16px",
          listStyle: "none",
        }}
      >
        {[
          "Have recognized academic qualifications or specialized skills.",
          "Hold a valid job offer from a Hong Kong employer (for GEP).",
          "Possess expertise in fields listed under QMAS.",
          "Wish to study at an approved Hong Kong educational institution.",
          "Intend to start or join a Hong Kong-based business.",
        ].map((text, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            <span style={bulletStyle}>•</span> {text}
          </li>
        ))}
      </ul>

      {/* New section replacing Step-by-Step */}

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Eligibility Criteria for a Hong Kong Work Visa
      </h3>

      <p style={{ fontSize: "18px", color: "rgb(3, 60, 65)", marginBottom: "15px" }}>
        To be eligible for a Hong Kong work visa, you must meet several criteria, including:
      </p>

      <ul style={{ paddingLeft: "20px", marginBottom: "30px" }}>
        <CriteriaItem
          title="A job offer from a Hong Kong employer"
          description="You must have secured employment with a company that is registered and licensed in Hong Kong."
        />
        <CriteriaItem
          title="Proof of qualifications and work experience"
          description="Applicants must have the relevant educational background, professional qualifications, and experience."
        />
        <CriteriaItem
          title="Demonstrating a special skill or expertise"
          description="Your employment should fill a specific need or gap in the local workforce."
        />
        <CriteriaItem
          title="Good character"
          description="You must not have any criminal record and must comply with all Hong Kong immigration regulations."
        />
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Why Choose VJC Overseas for Hong Kong Migration?
      </h3>
      <p style={{ fontSize: "18px", color: "rgb(3, 60, 65)", marginBottom: "20px" }}>
        At <b>VJC Overseas</b>, we provide:
      </p>
      <ul
        style={{
          marginBottom: "30px",
          paddingLeft: "20px",
          color: "rgb(3, 60, 65)",
          fontSize: "16px",
          listStyle: "none",
        }}
      >
        {[
          "Expert visa consultation and document preparation.",
          "Strong track record with employment, business, and study visas.",
          "Transparent process with regular updates.",
          "Dedicated consultants who understand Hong Kong’s immigration policies.",
        ].map((text, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
          >
            <span style={bulletStyle}>•</span> {text}
          </li>
        ))}
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Ready to Start Your Hong Kong Journey?
      </h3>
      <p style={{ fontSize: "18px", color: "rgb(3, 60, 65)" }}>
        Whether your goal is career advancement, entrepreneurship, or education,{" "}
        <KeywordLink href="https://www.vjcoverseas.com/">
          VJC Overseas
        </KeywordLink>{" "}
        can guide you from application to arrival. Begin your migration process today and step into a future of opportunities in one of the most dynamic cities in the world. Explore more about{" "}
        <KeywordLink href="/study-abroad/hongkong">Study in Hong Kong</KeywordLink>{" "}
        to make an informed decision.
      </p>
    </div>
  );
};

export default Content;