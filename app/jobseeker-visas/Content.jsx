"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const paragraphs = [
  {
    text: (
      <>
        At{" "}
        <Link
          href="https://www.vjcoverseas.com"
          className="font-bold text-orange-600 hover:underline"
        >
          VJC Overseas
        </Link>
        , we specialize in guiding professionals through the Job Seeker Visa
        process. Our consultants carefully evaluate your profile and recommend
        the most suitable countries like Germany, Austria, and Sweden based on
        your career goals. We also explain visa success rates, employment
        trends, and legal requirements in detail. This ensures you have complete
        clarity about where your skills are in the highest demand. Choosing us
        means getting reliable insights and strategies that save you time,
        effort, and unnecessary rejections.
      </>
    ),
    image: "/Job-Seeker-Visa-Guide.jpg",
  },
  {
    text: (
      <>
        Our team of{" "}
        <Link
          href="https://www.vjcoverseas.com/jobseeker-visas"
          className="font-bold text-orange-600 hover:underline"
        >
          Job Seeker Visa Consultants
        </Link>{" "}
        helps you craft resumes and cover letters that meet international hiring
        standards. We highlight your skills using ATS-friendly formats so your
        CV passes recruiter filters easily. Each cover letter is customized to
        fit the role, country, and industry you’re applying for. With expert
        guidance, your application stands out to global employers. This tailored
        approach gives you a competitive edge and makes recruiters notice you
        faster.
      </>
    ),
    image: "/job_seeker_visa_1.png",
  },
  {
    text: (
      <>
        From documentation to interview scheduling, we manage everything under
        one roof. Applying through{" "}
        <Link
          href="https://www.vjcoverseas.com/jobseeker-visas"
          className="font-bold text-orange-600 hover:underline"
        >
          Job Seeker Visas
        </Link>{" "}
        becomes seamless when our experts handle your file. We assist in
        compiling educational, professional, and financial documents that meet
        embassy standards. Our team also coordinates embassy appointments and
        interview slots without hassle. This reduces rejection risks and speeds
        up your migration timeline, giving you peace of mind at every step.
      </>
    ),
    image: "/JOB-SEEKER-VISA.png",
  },
  {
    text: (
      <>
        Unlock exclusive{" "}
        <Link
          href="https://www.vjcoverseas.com/work-abroad"
          className="font-bold text-orange-600 hover:underline"
        >
          Work Abroad Opportunities
        </Link>{" "}
        with our employer outreach and job portal access services. We guide you
        on building strong profiles on international platforms and writing
        recruiter-focused emails. To boost your confidence, we also conduct mock
        interviews that simulate real employer scenarios. With these strategies,
        you build meaningful professional connections and stand out in
        competitive global markets.
      </>
    ),
    image: "/jobseeker1.png",
  },
  {
    text: (
      <>
        As one of the{" "}
        <Link
          href="https://www.vjcoverseas.com"
          className="font-bold text-orange-600 hover:underline"
        >
          Best Visa Immigration Consultants
        </Link>
        , our support doesn’t stop once you land abroad. We help you with
        accommodation search, transportation guidance, and cultural orientation.
        From registering with local authorities to finding networking
        opportunities, we stay with you throughout your transition. This
        post-arrival support ensures you feel confident, safe, and ready to
        start your career abroad successfully.
      </>
    ),
    image: "/jobseekwe.avif",
  },
];

const JobSeekerHelp = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("animate-scroll-text");
            el.classList.remove("before-scroll");
          } else {
            el.classList.remove("animate-scroll-text");
            el.classList.add("before-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [...refs.current]; // ✅ snapshot copy
    elements.forEach((ref) => ref && observer.observe(ref));

    return () => {
      elements.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="py-10 px-4 md:px-12 font-times">
      <style jsx>{`
        .font-times {
          font-family: "Times New Roman", Times, serif;
        }
        .before-scroll {
          opacity: 0;
          transform: translateY(40px);
        }
        .animate-scroll-text {
          opacity: 1 !important;
          transform: translateY(0px) !important;
          transition: all 0.9s ease-out;
        }
      `}</style>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        How VJC Overseas Supports Your Job Seeker Visa Journey
      </h2>

      <div className="space-y-10 ml-6 md:ml-14 mr-6 md:mr-14">
        {paragraphs.map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`before-scroll flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 md:gap-10`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="md:w-3/4">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <Image
                src={item.image}
                alt={`Job Seeker Help ${index + 1}`}
                width={600}
                height={350}
                className="object-cover object-center w-full h-[250px] max-w-[400px] rounded-md"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerHelp;
