import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
        marginTop: "-7%",
      }}
    >
      <div style={{ marginBottom: "40px", marginTop: "20px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>: <b>Study in the UK – Your Gateway to World-Class Education</b>
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        At <b style={{ color: "black" }}>VJC Overseas</b>, we specialize in helping students achieve their international education goals by providing expert guidance, personalized counseling, and complete support throughout the <b style={{ color: "black" }}>UK student visa</b> process. If you're planning to{" "}
        <Link href="https://www.vjcoverseas.com/study-abroad/uk" style={{ color: "orange", fontWeight: "bold" }}>
          Study in UK
        </Link>, we are your one-stop solution for a smooth, successful, and stress-free experience.
      </p>

      <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Why Study in the UK?</h3>
      <p style={{ marginBottom: "20px" }}>
        The <b style={{ color: "black" }}>United Kingdom</b> offers academic excellence, globally recognized degrees, and access to diverse career opportunities. Whether you dream of attending top-ranked institutions or exploring vibrant cities like London, Manchester, and Edinburgh, studying in the UK can shape your personal and professional future.
        Learn more about the advantages of choosing to <b style={{ color: "black" }}>study in the UK</b>, including its world-class education system, rich cultural heritage, and student-friendly work policies.
      </p>

      <div
        className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0"
        style={{ marginBottom: "20px" }}
      >
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/UKstudimage.png"
            alt="UK Study Image"
            width={500}
            height={300}
            priority
            unoptimized
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="px-4 lg:px-0">
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
            What Makes the UK a Top Destination for Students?
          </h3>
          <ul className="list-disc ml-5 text-sm sm:text-base">
            <li>
              <b style={{ color: "black" }}>Globally Recognized Universities</b> – Institutions like Oxford, Cambridge, and Imperial College London lead global rankings.
            </li>
            <li>
              <b style={{ color: "black" }}>Research & Innovation</b> – Home to cutting-edge research programs in STEM, business, and humanities.
            </li>
            <li>
              <b style={{ color: "black" }}>Post-Study Work Opportunities</b> – Up to 2 years post-study work rights under the Graduate Route.
            </li>
            <li>
              <b style={{ color: "black" }}>Diverse & Inclusive Society</b> – Experience a multicultural environment with students from over 150 countries.
            </li>
          </ul>
          <p className="mt-4 text-sm sm:text-base">
            For students looking to eventually{" "}
            <Link href="https://www.vjcoverseas.com/migrate/united-kingdom" style={{ color: "orange", fontWeight: "bold" }}>
              Migrate to United Kingdom
            </Link>, the student visa can be a strategic first step toward building a future in the UK through work permits or{" "}
            <b style={{ color: "black" }}>skilled immigration</b>.
          </p>
        </div>
      </div>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        UK Student Visa: A Step-by-Step Guide
      </h3>
      <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>Choose Your Course & University</b> – Secure your offer letter and receive a CAS (Confirmation of Acceptance for Studies).</li>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>Fulfill Visa Requirements</b> – Provide financial proof, meet English language requirements (IELTS/PTE), and prepare your documents.</li>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>Submit Your Visa Application</b> – Apply online for the UK Student Visa through the official UKVI portal.</li>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>Biometrics & Decision</b> – Attend your biometric appointment and await your visa approval.</li>
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Top UK Universities and Tuition Fees
      </h3>
      <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>University of Oxford:</b> Approx. £26,770–£38,010 per year</li>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>University of Cambridge:</b> Approx. £22,227–£58,038 per year</li>
        <li><b style={{ color: "rgb(3, 60, 65)" }}>London School of Economics:</b> Approx. £22,000–£31,000 per year</li>
      </ul>
      <p style={{ marginBottom: "20px" }}>
        Pro Tip: Get personalized university and course selection support from our expert counselors at <b style={{ color: "black" }}>VJC Overseas</b>.
      </p>

      <h3 style={{ color: "brown", fontWeight: "bold", marginBottom: "20px" }}>Real Student Success Story</h3>
      <p style={{ marginBottom: "20px", fontFamily: "cursive", fontSize: "14px" }}>
        “I never thought studying in the UK would be so easy. Thanks to <b style={{ color: "black" }}>VJC Overseas</b>, my visa process was seamless, and I got admission to my dream university!”
        — Ravi K., Engineering Student
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Your Long-Term Future in the UK
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Many students aim to continue their journey in the UK through employment and eventually{" "}
        <Link href="https://www.vjcoverseas.com/pr-visas/uk-pr" style={{ color: "orange", fontWeight: "bold" }}>
          UK Permanent Residency
        </Link>. If that’s your goal, planning early is essential. Starting as a student gives you the perfect foundation to work your way into full-time employment and legal settlement.
        Explore our services related to{" "}
        <Link href="https://www.vjcoverseas.com/work-abroad/united-kingdom-work-permit" style={{ color: "orange", fontWeight: "bold" }}>
          UK Skilled Immigration
        </Link>{" "}
        to understand how your education can lead to permanent residency through the Skilled Worker route.
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Planning a Short Educational Trip?
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Not sure if a full degree is right for you? Explore summer schools or certificate programs through a <b style={{ color: "black" }}>UK Visit Visa</b>, suitable for short academic visits or exchange programs.
      </p>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Why Choose VJC Overseas?
      </h3>
      <ul style={{ marginBottom: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
        <li>End-to-End Support – From university applications to visa interview prep.</li>
        <li>Experienced Counselors – Get advice from professionals who understand UK immigration policies.</li>
        <li>High Success Rate – Trusted by thousands of students across India and beyond.</li>
        <li>Global Network – Partnerships with top UK institutions.</li>
      </ul>
      <p style={{ marginBottom: "20px" }}>
        Need expert help? Speak with{" "}
        <Link href="https://www.vjcoverseas.com/" style={{ color: "orange", fontWeight: "bold" }}>
          Best Visa Immigration Consultants
        </Link>{" "}
        and take the first step toward studying in the UK with confidence.
      </p>

      <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
        Start Your Journey Today
      </h3>
      <p style={{ marginBottom: "20px" }}>
        Whether you’re a high school graduate, working professional, or postgraduate applicant,{" "}
        <Link href="https://www.vjcoverseas.com/" style={{ color: "orange", fontWeight: "bold" }}>
          VJC Overseas
        </Link>{" "}
        is ready to guide you. Begin your international academic journey today—study, grow, and build your future in the UK.
      </p>
    </div>
  );
};

export default Content;