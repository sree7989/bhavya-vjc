"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const points = [
  {
    title: "1. Tailored Career Pathways",
    description:
      "We understand that each individual’s career journey is unique. Our expert consultants work closely with you to understand your skills, experience, and aspirations, helping you find the perfect job abroad that matches your goals. Whether you're a healthcare professional, engineer, IT specialist, or tradesperson, we have the right opportunities waiting for you.We take the time to evaluate your professional profile in detail, ensuring that every recommendation we make is aligned with your long-term ambitions. With access to top-tier employers and global markets, we not only help you secure a job, but also empower you to build a meaningful and sustainable international career. Our personalized guidance ensures that you step into your new role with confidence and clarity.",
    showImage: true,
  },
  {
    title: "2. Global Network of Employers",
    description:
      "Our extensive network of trusted international employers spans across various industries and countries. From Canada and the Middle East to Australia and Europe, we collaborate with leading companies looking to hire qualified professionals from diverse fields. With VJC Overseas, you’ll have access to some of the best job offers available worldwide.",
    showImage: false,
  },
  {
    title: "3. Hassle-Free Immigration and Relocation Support",
    description:
      "We know that moving abroad can be overwhelming, which is why we provide end-to-end support, from visa and work permit assistance to relocation advice. Our dedicated team ensures you navigate the entire process smoothly, so you can focus on what truly matters – your career growth and new experiences.",
    showImage: false,
  },
  {
    title: "4. Long-Term Success",
    description:
      "Our commitment to your success doesn't end with securing a job. We are here for the long haul, offering guidance and support throughout your overseas employment, helping you adapt to your new workplace and environment, and ensuring you thrive in your international career.",
    showImage: false,
  },
];

const WbContent = () => {
  return (
    <div className="w-full bg-white py-12 px-6  lg:px-20">
      {/* OUTSIDE Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
      >
        Work Abroad with <span className="text-orange-500">VJC Overseas</span>
        <br />
        <span className="text-xl font-medium">
          Unlock Global Career Opportunities
        </span>
      </motion.h3>

      {/* Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-7xl mx-auto text-gray-900 border-4 border-orange-500 rounded-3xl p-8"
      >
        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-base lg:text-lg mb-6 text-center"
        >
          At{" "}
          <span className="text-orange-500 font-semibold">
            <Link href="https://www.vjcoverseas.com">VJC Overseas</Link>
          </span>
          , we believe that the world is full of exciting career opportunities
          waiting for talented individuals like you. Whether you're looking to
          advance your career, experience new cultures, or seek better work-life
          balance, we specialize in connecting skilled professionals with
          top-tier employers worldwide.
        </motion.p>

        {/* Why Choose Title */}
        <motion.h4
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Why Choose <span className="font-bold text-black">VJC Overseas</span>?
        </motion.h4>

        {/* Points */}
        <div className="space-y-12">
          {points.map((point, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col lg:flex-row items-start gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div>
                    <h5 className="text-lg font-semibold">{point.title}</h5>
                    <p className="text-gray-700 mt-2">{point.description}</p>
                  </div>
                </div>

                {point.showImage && (
                  <div className="w-full lg:flex-1">
                    <Image
                      src="/Work-Abroad-for-a-Year.png"
                      alt="Work Abroad"
                      width={400}
                      height={300}
                      className="w-full h-auto max-w-md mx-auto rounded object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Extra Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 space-y-6 text-base lg:text-lg text-gray-800"
        >
          <p>
            Explore Opportunities to{" "}
            <span className="text-orange-500">
              <Link href="https://www.vjcoverseas.com/work-abroad">
                Work Abroad Opportunities
              </Link>
            </span>{" "}
            Discover exciting job opportunities worldwide and kickstart your
            international career with trusted guidance. Our team at{" "}
            <span className="font-bold text-black">VJC Overseas</span> is
            dedicated to helping skilled professionals like you navigate every
            step of the process – from identifying the right job, applying for a
            visa, to settling comfortably in your new home country.
          </p>

          <p>
            Work Abroad with <span className="font-bold text-black">VJC Overseas</span> – Unlock Global Career Opportunities At{" "}
            <span className="font-bold text-black">VJC Overseas</span>, we believe the world is filled with countless
            possibilities. Many ambitious professionals aspire to{" "}
            <span className="font-bold text-black">
              Work Abroad Opportunities
            </span>{" "}
            that allow them to grow in their careers, gain international
            exposure, and experience new lifestyles. Whether you are looking to
            improve your skills, enjoy better financial prospects, or embrace
            cultural diversity, we are here to connect you with the right
            employers and destinations.
          </p>

          <p>
            Why Choose <span className="font-bold text-black">VJC Overseas</span>? 1. Tailored Career Pathways We
            recognize that every candidate has unique strengths and goals. As
            one of the{" "}
            <span className="text-orange-500">
              <Link href="https://www.vjcoverseas.com">
                Best Visa Immigration Consultants
              </Link>
            </span>
            , we take time to evaluate your profile, qualifications, and
            aspirations before recommending the right career pathway. From
            engineering and IT roles to healthcare and skilled trades, our
            guidance ensures that your move abroad is meaningful and
            sustainable.
          </p>

          <p>
            2. Global Network of Employers Our global employer network is one of
            our greatest strengths. With opportunities spanning Europe,
            Australia, Canada, and the Middle East, we ensure access to premium
            job markets. If you are seeking a{" "}
            <span className="text-orange-500">
              <Link href="https://www.vjcoverseas.com/work-abroad/germany-work-permit">
                Germany Work Permit
              </Link>
            </span>
            , for instance, we help you understand eligibility, documentation,
            and connect you with top employers hiring skilled workers in
            Germany.
          </p>

          <p>
            3. Hassle-Free Immigration & Relocation Support Relocating abroad is
            more than securing a job – it involves visas, paperwork, and a
            smooth transition. Our experts provide comprehensive support,
            including guidance on visa categories like the{" "}
            <span className="text-orange-500">
              <Link href="https://www.vjcoverseas.com/work-abroad/united-kingdom-work-permit/uk-skilled-worker-visa">
                UK Skilled Worker Visa
              </Link>
            </span>
            , relocation planning, and pre-departure counseling, so you are
            fully prepared before your journey.
          </p>

          <p>
            4. Long-Term Success and Settlement At{" "}
            <span className="font-bold text-black">VJC Overseas</span>, we are
            committed to your success beyond just job placement. Our team
            continues to support you even after you move abroad, ensuring that
            you adapt comfortably to your workplace, understand cultural
            nuances, and build a successful career in your chosen destination.
          </p>

          <p>
            Start Your Global Career Journey Today Your international career
            dream is closer than you think. With the right opportunities, expert
            guidance, and personalized support, you can build a rewarding life
            abroad. Partner with <span className="font-bold text-black">VJC Overseas</span> today to explore the best{" "}
            <span className="font-bold text-black">
              Work Abroad Opportunities
            </span>{" "}
            in leading countries, secure your future with trusted programs like
            the{" "}
            <span className="font-bold text-black">Germany Work Permit</span>,
            and take the next step with options such as the{" "}
            <span className="font-bold text-black">UK Skilled Worker Visa</span>
            . The world is waiting – it’s time to step into new horizons and
            create the global career you deserve.
          </p>
        </motion.div>

        {/* Final Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-center text-base lg:text-lg"
        >
          Start your journey towards an exciting new career abroad today with{" "}
          <span className="font-bold text-black">VJC Overseas</span>. Explore
          endless opportunities, enhance your professional skills, and embrace
          new horizons with us.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default WbContent;
