'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Content from './Content';
import Form from './Form';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  { name: "IELTS", path: "/ielts", bg: "/bg/ielts.jpg" },
  { name: "PTE", path: "/pte", bg: "/bg/pte.jpg" },
  { name: "GRE", path: "/gre", bg: "/Start-an-Overseas-Education-Consultancy-vjc.jpg" },
  { name: "GMAT", path: "/gmat", bg: "/bg/gmat.jpg" },
  { name: "TOEFL", path: "/toefl", bg: "/Start-an-Overseas-Education-Consultancy-vjc.jpg" },
  { name: "DUOLINGO", path: "/duolingo", bg: "/bg/duolingo.jpg" },
];

export default function CoachingLayout() {
  const pathname = usePathname();
  const initialCourse = courses.find(course => course.path === pathname) || courses[0];
  const [selected, setSelected] = useState(initialCourse);
  const router = useRouter();

  return (
    <div className="w-full min-h-screen text-gray-900 font-sans">

      {/* Top Section with Changing Background */}
      <div
        className="relative w-full py-24 text-white text-center bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${selected.bg})` }}
      >
        {/* Black Overlay Only on Image */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content on top of the overlay */}
        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            VJC Overseas Coaching Programs
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Choose your course and get expert training to succeed abroad.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={course.path}>
                  <div
                    onClick={() => setSelected(course)}
                    className={`cursor-pointer text-center py-4 rounded-xl shadow-md transition-all duration-300 ${
                      selected.name === course.name
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-800 hover:underline hover:bg-orange-500'
                    }`}
                  >
                    <h3 className="font-semibold text-lg">{course.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Coaching Content + Form + Image */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          className="grid lg:grid-cols-5 grid-cols-1 gap-6 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Right: Form + Image comes first on small screens */}
          <div className="flex flex-col gap-4 lg:col-span-2 col-span-5 order-1 lg:order-2">
            <div>
              <Form />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Coaching-and-training-gre-ilets.png"
                alt="Study Coaching"
                width={400}
                height={300}
                className="object-cover max-w-[350px] h-[500px] mx-auto"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Left: Coaching Content */}
          <div className="bg-white p-6 lg:col-span-3 col-span-5 order-2 lg:order-1">
            <Content selected={selected.name} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
