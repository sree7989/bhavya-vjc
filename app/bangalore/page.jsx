'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Form from '../components/Form';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaPlane, FaUniversity, FaBriefcase, FaPassport, FaGlobeAmericas,
} from 'react-icons/fa';
import { useRef } from 'react';

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

export default function BangalorePage() {
  const mapRef = useRef(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>VJC Overseas - Bangalore Office</title>
        <meta name="description" content="Visit VJC Overseas Bangalore office at Koramangala for expert visa consultancy in study abroad, PR, job seeker, and IELTS coaching." />
        <meta name="keywords" content="Bangalore study abroad, PR visa Bangalore, IELTS coaching Koramangala, VJC Overseas Bangalore" />
      </Head>

      <section className="relative w-full h-[60vh] overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="/Bangalore-vjc.jpg" // Your Bangalore background
      alt="Best Immigration Consultancy in Banglore"
      fill
      className="object-cover object-center"
      priority
      unoptimized
    />
  </div>
  <div className="absolute inset-0 bg-black/50 z-10" />
  <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-6 text-center">
    <ScrollFadeIn>
      <h1 className="text-5xl font-bold mb-4">Welcome to Bangalore</h1>
    </ScrollFadeIn>
    <ScrollFadeIn delay={0.2}>
      <p className="text-lg max-w-2xl">
        The IT capital of India. VJC Overseas is here to support your overseas journey in the heart of Koramangala.
      </p>
    </ScrollFadeIn>
  </div>
</section>


      <section className="py-12 px-6 max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-3xl font-semibold text-center mb-6">About VJC Overseas – Bangalore</h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollFadeIn>
            <div className="text-lg leading-relaxed text-justify">
              VJC Overseas is a leading consultancy located in Koramangala, Bangalore.
              <ul className="list-disc ml-5 mt-3">
                <li>Student Visas</li>
                <li>PR & Work Visas</li>
                <li>Job Seeker Visas</li>
                <li>IELTS & PTE Coaching</li>
                <li>Post Landing Assistance</li>
              </ul>
              <p className="mt-4">
                Our expert team and transparent approach make VJC Overseas a trusted choice across Karnataka.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {["/blogimg1.webp", "/vjc-clients.jpg", "/blogcontact.jpg", "/vjc-banglore.png"].map((src, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={idx}
                  className="relative group rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    width={300}
                    height={200}
                    alt="Gallery"
                    className="rounded-xl group-hover:brightness-75 transition duration-300"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Services</h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: FaPlane, title: "Study Abroad", link: "/study-abroad" },
            { icon: FaBriefcase, title: "Work Visa", link: "/work-abroad" },
            { icon: FaPassport, title: "PR & Immigration", link: "/pr-visas" },
            { icon: FaUniversity, title: "IELTS / PTE ", link: "/ielts" },
            { icon: FaGlobeAmericas, title: "Visit Visas ", link: "/visit-visas" },
          ].map(({ icon: Icon, title, link }, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <Link href={link}>
                <div className="p-6 rounded-lg bg-blue-200 shadow hover:shadow-xl transition cursor-pointer hover:bg-orange-50">
                  <Icon className="text-4xl text-orange-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold">{title}</h4>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-br from-orange-500 to-blue-400 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <ScrollFadeIn>
            <div className="p-6 -mt-6 flex flex-col justify-between">
              <Form />
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-[35rem] md:h-[32rem]">
              <h3 className="text-xl font-bold text-center mb-4 text-orange-600">Why Choose VJC Bangalore?</h3>
              <ul className="space-y-3 text-gray-800 text-base list-disc list-inside">
                <li>Visa Experts with 15+ Years of Experience</li>
                <li>Certified IELTS / PTE Trainers</li>
                <li>On-Spot Profile Assessments</li>
                <li>Dedicated Country-wise Counselors</li>
                <li>Post Landing Job Support</li>
              </ul>
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold mb-4 text-blue-500">Recognized for Excellence</h4>
                <Image
                  src="/award-vjc.png"
                  alt="VJC Overseas Awards"
                  width={450}
                  height={100}
                  className="mx-auto"
                  unoptimized
                />
              </div>
              <div className="mt-6 text-center">
                <a
                  href="tel:+919000011223"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg shadow transition"
                >
                  Call Now: +91 9160449000
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 px-6 bg-gray-100">
        <ScrollFadeIn>
          <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <p className="text-center text-gray-700 mb-8">Hear what clients in Bangalore say about us.</p>
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

      {/* Street View */}
      <section className="py-12 px-6 bg-white" ref={mapRef}>
  <ScrollFadeIn>
    <h2 className="text-2xl font-semibold text-center mb-4">Google Street View – VJC Overseas Bangalore</h2>
    <p className="text-center mb-6 text-gray-700">Live view of our consultancy office at Koramangala</p>
  </ScrollFadeIn>
  <ScrollFadeIn delay={0.3}>
    <div className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1716801016814!6m8!1m7!1sUlfa3rgyjFB3D1UWSpZOWg!2m2!1d12.9347157!2d77.6130821!3f157.29327!4f0!5f1.3969117851851444"
        width="100%"
        height="450"
        className="max-w-5xl w-full rounded-xl shadow-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    <div className="text-center mt-6">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=12.9344634,77.6131903"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition"
      >
        Get Directions on Google Maps
      </a>
    </div>
  </ScrollFadeIn>
</section>

    </div>
  );
}
