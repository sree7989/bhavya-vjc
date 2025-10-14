'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Form from './Form';
import Head from 'next/head';
import Link from 'next/link';

const ScrollFadeIn = ({ children, delay = 0, duration = 0.6, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function UsaPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>VJC Overseas - USA Office (Plano, TX)</title>
        <meta
          name="description"
          content="Visit VJC Overseas USA office in Plano, TX for expert visa consultancy in study abroad, PR, job seeker, and IELTS coaching."
        />
        <meta
          name="keywords"
          content="VJC Overseas USA, Plano TX visa consultancy, USA study visas, PR visa USA, IELTS coaching Plano TX"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src="/texus-vjc.jpg"
          alt="VJC Overseas USA Office Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-6 text-center">
          <ScrollFadeIn>
            <h1 className="text-5xl font-bold mb-4">Welcome to VJC Overseas USA</h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <p className="text-lg max-w-2xl">
              Your trusted visa consultancy in Plano, Texas. Achieve your American dream with VJC Overseas USA.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-3xl font-semibold text-center mb-6">About VJC Overseas – USA Office</h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <div className="text-lg leading-relaxed text-justify">
              VJC Overseas USA, located in Plano, Texas, offers premium visa consultancy and coaching services.
              <ul className="list-disc ml-5 mt-3">
                <li>Student Visas for USA</li>
                <li>PR & Work Visas</li>
                <li>Job Seeker Visas</li>
                <li>IELTS & PTE Coaching</li>
                <li>Post Landing Assistance</li>
              </ul>
              <p className="mt-4">
                We pride ourselves on transparent, reliable processes and successful visa approvals.
                Our dedicated counselors and student-focused approach make VJC Overseas USA the go-to consultancy in Texas.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                '/blogimg1.webp',
                '/vjc-clients.jpg',
                '/blogcontact.jpg',
                '/vjc-banglore.png',
              ].map((src, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    width={300}
                    height={200}
                    alt="USA Office Gallery"
                    className="rounded-xl group-hover:brightness-75 transition duration-300"
                    unoptimized
                  />
                  
                </motion.div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 bg-gray-50 px-6">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: 'FaPlane', title: "Study Abroad", link: "/study-abroad" },
            { icon: 'FaBriefcase', title: "Work Visa", link: "/work-abroad" },
            { icon: 'FaPassport', title: "PR & Immigration", link: "/pr-visas" },
            { icon: 'FaUniversity', title: "IELTS / PTE ", link: "/ielts" },
            { icon: 'FaGlobeAmericas', title: "Visit Visas ", link: "/visit-visas" },
          ].map(({ icon, title, link }, index) => {
            // Dynamically import react-icons based on icon name
            const Icon = require('react-icons/fa')[icon];
            return (
              <ScrollFadeIn key={index} delay={index * 0.1}>
                <Link href={link}>
                  <div className="p-6  rounded-lg bg-blue-200 shadow hover:shadow-xl transition cursor-pointer hover:bg-orange-50">
                    <Icon className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold">{title}</h4>
                  </div>
                </Link>
              </ScrollFadeIn>
            );
          })}
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-orange-500 to-blue-400 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <ScrollFadeIn>
            <div className="p-6 -mt-6 flex flex-col justify-between">
              <Form />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-[35rem] md:h-[32rem]">
              <h3 className="text-xl font-bold text-center mb-4 text-orange-600">Why Choose VJC USA?</h3>
              <ul className="space-y-3 text-gray-800 text-base list-disc list-inside">
                <li><strong>1,000+ Visa Success Stories</strong></li>
                <li>Certified IELTS / PTE Trainers</li>
                <li>On-Spot Profile Assessments</li>
                <li>Dedicated USA-specific Counselors</li>
                <li>Job Assistance & Post Landing Help</li>
              </ul>
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold mb-4 text-blue-500">Our Achievements</h4>
                <Image
                  src="/award-vjc.png"
                  alt="VJC Overseas Awards Collection"
                  width={450}
                  height={100}
                  className="mx-auto"
                  unoptimized
                />
              </div>
              <div className="mt-6 text-center">
                <a
                  href="tel:+16605282324"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg shadow transition"
                >
                  Call Now: +1 660-528-2324
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 bg-gray-100">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <p className="text-center text-gray-700 mb-8">
            Watch some of the genuine feedback from our clients
          </p>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['hR8BKpLhuU8', 'jCGpCQwuZa8', 'yqvp_8QjkJk'].map((videoId, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 0.2}>
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
                  title={`Client Testimonial ${idx + 1}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Google Street View Section */}
      <section className="py-12 px-6 bg-white">
        <ScrollFadeIn>
          <h2 className="text-2xl font-semibold text-center mb-4">Google Street View – VJC Overseas USA</h2>
          <p className="text-center mb-6 text-gray-700">Live view of our Plano, TX office</p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.3}>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1716801394696!6m8!1m7!1seSj7GhwXiyVQv3B5A!2m2!1d33.0544765!2d-96.7972613!3f163.9!4f2.3!5f1.3969117851851444"
              width="100%"
              height="450"
              className="max-w-5xl w-full rounded-xl shadow-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Footer CTA */}
      <section className="py-8 bg-gradient-to-tr from-orange-400 to-blue-600 text-white text-center">
        <ScrollFadeIn>
          <h3 className="text-3xl font-semibold mb-4">Ready to Start Your USA Visa Journey?</h3>
          <a
            href="tel:+16605282324"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Call Us Now: +1 660-528-2324
          </a>
        </ScrollFadeIn>
      </section>
    </div>
  );
}
