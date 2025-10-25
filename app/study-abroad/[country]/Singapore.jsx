import React from "react";
import Image from 'next/image';

const StudyInSingapore = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in the Singapore - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="w-full md:w-2/3">
          <p>
            Are you aiming to pursue higher education in one of Asia’s most dynamic academic destinations? Welcome to <a href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</a>, your trusted partner for international education guidance. We take pride in being among the <span className="font-bold text-black">Best Visa Immigration Consultants</span>, helping students achieve their dreams of global study opportunities.
          </p>
          <p className="mt-3">
            If you are considering <a href="https://www.vjcoverseas.com/study-abroad/singapore" className="text-orange-500">Study Abroad in Singapore</a>, you’ll find it to be a country known for innovation, world-class universities, and a rich cultural experience. Our team of experienced consultants will walk you through every stage of the process, from selecting the right course to submitting your application.
          </p>
          <p className="mt-3">
            When it comes to obtaining a <a href="https://www.vjcoverseas.com/study-abroad/singapore" className="text-orange-500">Singapore Study Visa</a>, we provide step-by-step assistance to make your transition smooth and stress-free. From admission guidance to scholarship support, our services are tailored to ensure you get the most out of your academic journey.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <Image
            src="/study-in-singapore.webp"
            alt="Study in Singapore"
            width={500}
            height={700}
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Why Study in Singapore?</h2>
      <p>
        Singapore offers a unique blend of Eastern and Western education styles, making it a preferred choice for students worldwide. Here’s why it stands out:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>World-Class Universities & Colleges:</strong> Prestigious institutions such as the National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), and Singapore University of Technology and Design (SUTD) consistently rank among the top in global rankings.</li>
        <li><strong>Cultural Diversity:</strong> Enjoy a cosmopolitan environment where you can interact with peers from diverse backgrounds, enriching both your academic and personal life.</li>
        <li><strong>Post-Graduation Opportunities:</strong> With its thriving economy, Singapore offers abundant career opportunities for international graduates.</li>
        <li><strong>High Quality of Life:</strong> Known for its safety, cleanliness, and world-class infrastructure, Singapore provides an ideal environment for students.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Top Universities and Colleges in Singapore</h2>
      <p>Here’s a quick look at some leading institutions and their fee ranges:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>National University of Singapore (NUS)</strong> – SGD 17,550 to SGD 56,000/year (Undergraduate), SGD 26,000 to SGD 58,000/year (Graduate)</li>
        <li><strong>Nanyang Technological University (NTU)</strong> – SGD 18,000 to SGD 47,000/year (Undergraduate), SGD 24,000 to SGD 48,000/year (Graduate)</li>
        <li><strong>Singapore Management University (SMU)</strong> – SGD 29,000 to SGD 50,000/year (Undergraduate), SGD 30,000 to SGD 65,000/year (Graduate)</li>
        <li><strong>Singapore University of Technology and Design (SUTD)</strong> – SGD 18,000 to SGD 40,000/year (Undergraduate), SGD 20,000 to SGD 50,000/year (Graduate)</li>
        <li><strong>INSEAD Asia Campus</strong> – SGD 115,000 (MBA Program)</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Benefits of Studying in Singapore</h2>
      <p>Choosing Singapore for higher education offers numerous advantages:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>High-Quality Education & Global Recognition</li>
        <li>Strategic Location Connecting Asia and the World</li>
        <li>Affordable Education Compared to Other Global Hubs</li>
        <li>Excellent Infrastructure & Student Facilities</li>
        <li>Work and Stay Opportunities for Graduates</li>
      </ul>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Popular Courses</h2>
      <p>Students in Singapore often choose from a wide range of programs, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Business Management</li>
        <li>Engineering & Technology</li>
        <li>Computer Science & IT</li>
        <li>Finance & Banking</li>
        <li>Biological & Life Sciences</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Study in Singapore with VJC Overseas</h2>
      <p>
        At <a href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</a>, we’re committed to helping you achieve your academic goals. Our services include: <span className="font-bold text-black">VJC Overseas</span>
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>University & College Admission Guidance</li>
        <li>Scholarship Application Assistance</li>
        <li>Visa Process Support</li>
        <li>Accommodation and Living Guidance</li>
        <li>Pre-Departure and Post-Arrival Assistance</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-semibold">Take the First Step Toward Your Future Today</h2>
      <p>
        Your academic journey in Singapore starts with expert planning and the right support. With <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500">Study Visa Consultants</a>, you’re not just applying to a university—you’re opening doors to a world of opportunities.
      </p>
    </div>
  );
};

export default StudyInSingapore;