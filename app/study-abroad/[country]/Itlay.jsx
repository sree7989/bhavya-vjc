import React from 'react';
import Image from 'next/image';

const StudyInItaly = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Italy - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="w-full md:w-2/3">
          <p className="mb-6">
            Welcome to <span className="font-bold text-black">VJC Overseas</span>, your trusted partner in making your dream of studying in Italy a reality. 
            Known for its rich heritage, breathtaking architecture, and top-tier education system, Italy has long been a favorite choice for students worldwide. 
            Partnering with <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">Best Visa Immigration Consultants</a> ensures that your journey is smooth, guided, and successful from start to finish.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src="/study-in-itlay.webp"
            alt="Study in Italy"
            width={500}
            height={500}
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-2 mb-2">Why Study in Italy?</h2>
      <p className="leading-relaxed mb-4">
        Choosing to <a href="https://www.vjcoverseas.com/study-abroad/italy" className="text-orange-500 font-bold">Study Abroad in Italy</a> is more than just earning a degree—it’s about experiencing a lifestyle enriched with history, art, and modern innovation. 
        Italy is home to universities that have shaped education for centuries and continues to inspire students worldwide.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Quality Education:</strong> Italian universities consistently rank among the top in global education lists.</li>
        <li><strong>Cultural Heritage:</strong> Immerse yourself in Italy’s centuries-old traditions, art treasures, and architectural wonders.</li>
        <li><strong>Affordable Tuition Fees:</strong> Italy offers a budget-friendly education without compromising quality.</li>
        <li><strong>Scholarships & Financial Aid:</strong> From regional grants to international scholarships, there are numerous opportunities for funding.</li>
        <li><strong>International Career Opportunities:</strong> A degree from Italy is respected globally, opening doors to international career growth.</li>
        <li><strong>Vibrant Student Life:</strong> From enjoying authentic cuisine to exploring stunning landscapes, Italy offers a truly unforgettable experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Top Italian Universities & Colleges</h2>
      <p className="leading-relaxed mb-4">
        When working with <a href="https://www.vjcoverseas.com/study-abroad/italy" className="text-orange-500 font-bold">Italy Study Visa Consultants</a>, you gain guidance in selecting the right institution for your goals. Some of the best universities include:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>University of Bologna:</strong> The oldest university in the world, offering diverse programs.</li>
        <li><strong>Sapienza University of Rome:</strong> Known for excellence in engineering, economics, and medicine.</li>
        <li><strong>Politecnico di Milano:</strong> Specializing in engineering, architecture, and design.</li>
        <li><strong>University of Padua:</strong> Recognized for scientific research and innovation.</li>
        <li><strong>Bocconi University:</strong> Highly ranked for business, economics, and management studies.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Tuition Fees in Italy</h2>
      <p className="leading-relaxed mb-4">
        Studying in Italy is surprisingly affordable compared to other countries.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Undergraduate Programs:</strong> €1,000 - €4,000/year</li>
        <li><strong>Postgraduate Programs:</strong> €1,500 - €4,500/year</li>
        <li><strong>Ph.D. Programs:</strong> €2,000 - €5,000/year</li>
        <li><strong>Language Courses:</strong> €300 - €1,000/semester</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Cost of Living</h2>
      <p className="leading-relaxed mb-4">
        Students should budget between €700 and €1,000 per month to cover accommodation, food, transportation, and other daily expenses.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Scholarships & Financial Aid</h2>
      <p className="leading-relaxed mb-4">
        Working with experienced <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500 font-bold">Study Visa Consultants</a> ensures you don’t miss opportunities for financial support. Popular options include:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Regional Scholarships</li>
        <li>Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>Erasmus+ Scholarships (for EU students)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Personalized Counseling</li>
        <li>Application Assistance</li>
        <li>Visa Support</li>
        <li>Pre-Departure Guidance</li>
        <li>Post-Arrival Support</li>
        <li>Career Guidance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Get Started Today!</h2>
      <p className="leading-relaxed">
        Your academic dreams deserve expert support. Whether you’re aiming for a degree, specialized training, or language studies, <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">VJC Overseas</a> will help you every step of the way. Partner with the <strong>Best Visa Immigration Consultants</strong> to make your Italy education journey smooth, stress-free, and rewarding.
      </p>
    </div>
  );
};

export default StudyInItaly;