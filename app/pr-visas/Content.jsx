"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Content = ({ selectedVisa }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman] border-2 border-orange-500 rounded-xl shadow-lg bg-white"
    >
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Permanent Residency Visa -{" "}
        <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        At{" "}
        <span className="text-orange-500 font-semibold">
          <a href="https://www.vjcoverseas.com">VJC Overseas</a>
        </span>
        , we understand that securing permanent residency in a new country is a
        life-changing milestone. It opens the door to new opportunities,
        stability, and a brighter future. Whether you plan to move for work,
        higher education, family reunification, or personal growth, our team
        ensures that the complex immigration process becomes smooth and
        stress-free.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Why Choose <span className="text-orange-500">VJC Overseas</span> for
        Your Permanent Resident Visa?
      </h3>
      <p>
        As one of the{" "}
        <span className="text-orange-500 font-semibold">
          <a href="https://www.vjcoverseas.com">Best Visa Immigration Consultants</a>
        </span>
        , we have years of experience in helping individuals and families settle
        abroad successfully. Our expertise lies in delivering tailored
        immigration solutions, ensuring that every application is handled with
        precision and compliance. Our professional{" "}
        <span className="text-orange-500 font-semibold">
          <a href="https://www.vjcoverseas.com/pr-visas">PR Visa Consultants</a>
        </span>{" "}
        guide you step-by-step, from evaluating your eligibility to preparing
        documents and representing your application with confidence. We
        specialize in multiple immigration categories, making us a trusted
        choice for people aspiring to migrate permanently.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Permanent Residency – A Gateway to Your Future
      </h3>
      <ul className="list-disc list-inside pl-4 space-y-1">
        <li>
          <strong>Long-Term Stability:</strong> Live, work, and study in your
          chosen country without worrying about frequent visa renewals.
        </li>
        <li>
          <strong>Healthcare & Social Benefits:</strong> Gain access to
          essential health and social services offered to permanent residents.
        </li>
        <li>
          <strong>Pathway to Citizenship:</strong> Many PR programs serve as a
          stepping stone toward citizenship, giving you rights such as voting
          and passport privileges.
        </li>
        <li>
          <strong>Family Reunification:</strong> Sponsor your spouse, children,
          or parents and start building your new life together.
        </li>
      </ul>

      <div className="flex flex-col md:flex-row items-start gap-6 mt-8">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Our Expertise: Permanent Resident Visa Categories
          </h3>
          <ol className="list-decimal list-inside pl-4 space-y-1">
            <li>
              <strong>Skilled Worker Visa:</strong> Designed for professionals
              with in-demand skills in different countries.
            </li>
            <li>
              <strong>Family Sponsorship Visa:</strong> Reunite with your loved
              ones through legal and hassle-free sponsorship programs.
            </li>
            <li>
              <strong>Investment & Entrepreneur Visas:</strong> For those
              looking to invest or establish businesses abroad.
            </li>
            <li>
              <strong>Student to PR Pathway:</strong> Support for international
              graduates transitioning from study visas to permanent residency.
            </li>
            <li>
              <strong>Refugee & Humanitarian Visa:</strong> Assistance for
              individuals migrating on humanitarian grounds.
            </li>
          </ol>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Country-Specific PR Options
          </h3>
          <p>
            Our consultants also specialize in country-focused PR programs that
            open doors to some of the world’s top destinations. For individuals
            targeting Canada, the{" "}
            <span className="text-orange-500 font-semibold">
              <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-express-entry">
                Express Entry PR Visa
              </a>
            </span>{" "}
            is one of the fastest and most efficient immigration systems. It is
            highly popular among skilled professionals who want a transparent
            and merit-based selection process.
          </p>
          <p>
            If you are looking at opportunities in Australia, the{" "}
            <span className="text-orange-500 font-semibold">
              <a href="https://www.vjcoverseas.com/pr-visas/australia-pr">
                Australia PR Visa
              </a>
            </span>{" "}
            remains a strong choice for candidates with specialized skills,
            offering long-term settlement benefits and career growth prospects.
          </p>
          <p>
            On the other hand, families and professionals who aspire to enjoy
            global exposure often explore the{" "}
            <span className="text-orange-500 font-semibold">
              <a href="https://www.vjcoverseas.com/pr-visas/canada-pr">
                Canada PR Visa
              </a>
            </span>
            , which provides a wide range of benefits including healthcare,
            social services, and a pathway to citizenship.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            How <span className="text-orange-500">VJC Overseas</span> Can Help
            You
          </h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>Eligibility Assessment:</strong> We evaluate your profile
              and suggest the best PR pathways.
            </li>
            <li>
              <strong>Visa Strategy:</strong> A customized immigration plan
              based on your goals.
            </li>
            <li>
              <strong>Application Preparation:</strong> Professional and timely
              documentation support.
            </li>
            <li>
              <strong>Document Guidance:</strong> Assistance in compiling all
              required paperwork accurately.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Regular updates and continued
              guidance throughout your immigration journey.
            </li>
          </ul>
        </div>

        <div className="lg:mt-8">
          <Image
            src="/pr-visa-vjc-overseas.jpg"
            alt="PR Visa Support"
            width={500}
            height={450}
            unoptimized
            className="rounded-lg shadow-md border border-orange-300"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        PR Visa Support – Start Your Journey Today
      </h3>
      <p>
        At <span className="font-bold">VJC Overseas</span>, we believe that
        everyone deserves the chance to create a secure future abroad. Our
        services are designed to simplify the immigration process, ensuring you
        feel supported at every step.
      </p>
      <p>
        Whether you are applying for the first time or need expert help with an
        ongoing application, our consultants are here to guide you.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Contact Us Today!</h3>
      <p>
        Let <span className="font-bold">VJC Overseas</span> be your trusted
        partner in achieving permanent residency. Reach out to our team now and
        take your first step toward a successful migration journey.
      </p>
    </motion.div>
  );
};

export default Content;
