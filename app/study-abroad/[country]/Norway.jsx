import React from "react";
import Image from 'next/image';

const StudyInNorway = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in Norway - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p className="mt-4 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        Norway is not only known for its breathtaking landscapes and high standard of living, but it also offers exceptional education that attracts students from across the world. For many aspiring international students, choosing the right destination is a crucial decision, and 
        <a href="https://www.vjcoverseas.com/study-abroad/norway" style={{ color: 'orange' }}> Study Abroad in Norway</a> has become one of the most popular options because of its affordability, quality, and global recognition. 
        At <b>VJC Overseas</b>, we understand that planning your education in a foreign country can be overwhelming. That’s why we provide complete guidance for students who want to explore higher education opportunities in Norway. From the application process to living arrangements, our role is to ensure a smooth transition into your academic journey.
      </p>

      <div className="mt-3 ml-6 mb-4">
        <Image
          src="/study-in-norway.jpg"
          alt="Study in Norway - Vjc Overseas"
          width={700}
          height={600}
          priority
          unoptimized
        />
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Why Study in Norway?</h2>
      <ul className="list-disc pl-6 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li><strong>No Tuition Fees at Public Universities:</strong> Most universities offer world-class education without charging tuition fees, making Norway a dream study destination.</li>
        <li><strong>Globally Recognized Institutions:</strong> Universities rank among the top 200 worldwide, offering advanced research and learning opportunities.</li>
        <li><strong>Student-Friendly Environment:</strong> Safe, diverse, and inclusive communities that welcome students from every corner of the globe.</li>
        <li><strong>Work While Studying:</strong> Students are allowed to take part-time jobs during their studies, supporting living expenses.</li>
        <li><strong>High Quality of Life:</strong> A progressive, eco-friendly society with a focus on sustainability and student welfare.</li>
      </ul>

      <p className="mt-4 text-lg">
        For students seeking guidance, connecting with <a href="https://www.vjcoverseas.com/study-abroad/" style={{ color: 'orange' }}>Study Visa Consultants</a> can make a huge difference. Professional consultants provide insights into university selection, documentation, and visa requirements.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Cost of Studying in Norway</h2>
      <p className="text-lg">Studying abroad requires planning, especially when it comes to finances. Norway offers affordable education, but living expenses should be considered:</p>
      <ul className="list-disc pl-6 text-lg" style={{ fontFamily: 'Times New Roman' }}>
        <li><strong>Application Fees:</strong> Most public universities do not charge application fees.</li>
        <li><strong>Living Expenses:</strong> Approx. NOK 10,000–12,000 per month, depending on lifestyle and location.</li>
        <li><strong>Accommodation:</strong> Costs range from NOK 4,000–6,000 per month.</li>
        <li><strong>Books & Materials:</strong> Around NOK 2,000–4,000 annually.</li>
        <li><strong>Health Insurance:</strong> Compulsory for international students.</li>
      </ul>
      <p className="mt-2 text-lg">
        When compared with other destinations, Norway provides significant value since students benefit from free education and only have to manage their cost of living. For families who want professional support, 
        <a href="https://www.vjcoverseas.com/" style={{ color: 'orange' }}> Best Visa Immigration Consultants</a> play an important role in ensuring the process is efficient and stress-free.
      </p>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Visa & Admission Information</h2>
      <p className="mb-4">
        Non-EU/EEA students must apply for a <a href="https://www.vjcoverseas.com/study-abroad/norway" style={{ color: 'orange' }}>Norway Student Visa</a>, also referred to as a student residence permit. Requirements typically include an admission letter from a recognized university, proof of accommodation, and sufficient funds (approx. NOK 137,907/year) to cover living expenses. Applications are reviewed by the Norwegian Directorate of Immigration (UDI), and students are advised to start their application process early to avoid delays. Many students seek help from <b>VJC Overseas</b> to streamline this process and ensure that all documents meet the requirements.
      </p>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Work Opportunities for Students</h2>
      <p className="mb-4">
        One of the highlights of studying in Norway is the opportunity to gain international work experience while studying. International students can work up to 20 hours per week during semesters and full-time during holidays. After graduation, they can apply for a job seeker visa that allows them to stay in Norway and explore employment opportunities in their field.
      </p>

      <h2 className="text-xl font-semibold text-black mt-4 mb-2">Top Universities in Norway</h2>
      <ul className="list-disc list-inside mb-4">
        <li>University of Oslo</li>
        <li>Norwegian University of Science and Technology (NTNU)</li>
        <li>University of Bergen</li>
        <li>BI Norwegian Business School</li>
        <li>University of Tromsø – The Arctic University of Norway</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Scholarships & Financial Aid</h2>
      <p className="text-lg" style={{ fontFamily: 'Times New Roman' }}>
        While tuition is free in most cases, students can also apply for scholarships to support living expenses. Some universities provide scholarships specifically for international students, while government-sponsored programs are available for students from developing countries.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2" style={{ fontFamily: 'Times New Roman' }}>Apply Now with <span style={{ color: 'orange' }}>VJC Overseas</span></h2>
      <p className="text-lg" style={{ fontFamily: 'Times New Roman' }}>
        Making the right choice for your study abroad journey requires professional guidance. <a href="https://www.vjcoverseas.com/" style={{ color: 'orange' }}>VJC Overseas</a> provides personalized counseling, application support, and complete visa assistance to students who dream of studying in Norway. From university selection to preparing for life in a new country, our team ensures that you are confident at every step. If you are ready to take the first step towards your future, connect with us today. With expert guidance from trusted consultants, your journey to Norway can be smooth and successful.
      </p>

      {/* Bold mentions without links */}
      <div className="hidden">
        <b>Best Visa Immigration Consultants</b>
        <b>VJC Overseas</b>
        <b>Study Visa Consultants</b>
        <b>Study Abroad in Norway</b>
        <b>Norway Student Visa</b>
      </div>
    </div>
  );
};

export default StudyInNorway;