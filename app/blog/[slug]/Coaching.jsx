"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CoachingTraining = () => {
  const courses = [
    { name: "IELTS", path: "/ielts" },
    { name: "PTE", path: "/pte" },
    { name: "GRE", path: "/gre" },
    { name: "GMAT", path: "/gmat" },
    { name: "TOEFL", path: "/toefl" },
    { name: "DUOLINGO", path: "/duolingo" },
  ];

  const [studentsCount, setStudentsCount] = useState(1);
  const [partnersCount, setPartnersCount] = useState(1);

  const maxStudents = 10000;
  const maxPartners = 120;

  useEffect(() => {
    let s = 1, p = 1;

    const studentInterval = setInterval(() => {
      s += 200;
      setStudentsCount(s > maxStudents ? maxStudents : s);
      if (s >= maxStudents) clearInterval(studentInterval);
    }, 20);

    const partnerInterval = setInterval(() => {
      p += 2;
      setPartnersCount(p > maxPartners ? maxPartners : p);
      if (p >= maxPartners) clearInterval(partnerInterval);
    }, 30);

    return () => {
      clearInterval(studentInterval);
      clearInterval(partnerInterval);
    };
  }, [maxStudents, maxPartners]); // ✅ Added dependencies

  const bgImages = [
    "/student-in-germany-student-visa.png",
    "/student-working-with-a-college-counsleor.jpg",
    "/study-sycess.jpg",
    "/studying-abroad-1.webp",
  ];
  
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bgImages.length]); // ✅ Added dependency

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 text-center">
        Crack Your Dream Exam with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Course Buttons */}
      <div
        className="rounded-xl p-6 mb-8 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Choose Your Test Prep Course
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <Link key={i} href={course.path}>
              <div className="px-4 py-3 bg-white/70 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
                {course.name} Coaching
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Coaching Info Section */}
      <div className="max-w-3xl mx-auto space-y-4 text-sm text-gray-700 text-justify">
        <p>
          At <span className="text-orange-500">VJC Overseas</span>, we prepare you for top international exams through result-driven strategies, expert coaching, and tech-enabled learning.
        </p>
        <p>
          Whether you aim to crack the IELTS, PTE, GRE, or GMAT – we tailor sessions with certified trainers, personalized feedback, and full-length mock tests aligned with global test standards.
        </p>
        <p>
          Each program includes interactive modules, practice drills, doubt-clearing sessions, and detailed performance analytics to help you improve continuously.
        </p>
        <p>
          We blend digital resources with physical classes to ensure flexible learning. Our AI-based mock testing system replicates real exam environments to build your confidence.
        </p>
        <p>
          Thousands of our students have scored 7+ in IELTS and 320+ in GRE with our intensive coaching methods.
        </p>
      </div>

      {/* Coaching Process Breakdown */}
      <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-8">
        <div className="space-y-2 text-gray-800 text-sm">
          <div>
            <h3 className="text-base font-semibold text-orange-500">1. Diagnostic Evaluation</h3>
            <p className="text-[14px] leading-relaxed">
              We start with a diagnostic test to assess your level and design a personalized prep strategy.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-orange-500">2. Expert-Led Coaching</h3>
            <p className="text-[14px] leading-relaxed">
              Learn from certified trainers with international teaching credentials and years of success records.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-orange-500">3. Real-Time Practice & Feedback</h3>
            <p className="text-[14px] leading-relaxed">
              Engage in structured practice modules and receive live feedback with improvement tips.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-orange-500">4. Final Mocks & Strategy Sessions</h3>
            <p className="text-[14px] leading-relaxed">
              Appear for full-length simulations followed by intensive score-boosting masterclasses.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/Coaching-and-training.png"
            alt="Coaching Process"
            width={256}
            height={256}
            unoptimized
          />
        </div>
      </div>

      {/* Video Embed */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto mt-6">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
          title="VJC Overseas Migration Services"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* CTA Stats Section */}
      <div
        className="mt-12 rounded-xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/study-sycess.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="px-6 py-10 sm:py-14 max-w-5xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-8 sm:gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white">{studentsCount.toLocaleString()} +</h2>
            <p className="mt-1 text-white text-sm font-medium">Students Prepped</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">{courses.length}</h2>
            <p className="mt-1 text-white text-sm font-medium">Courses Offered</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">{partnersCount}+</h2>
            <p className="mt-1 text-white text-sm font-medium">Expert Trainers & Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingTraining;
