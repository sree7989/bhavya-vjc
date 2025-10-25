import Image from 'next/image';
import Link from 'next/link';

export default function FreeAssessment() {
  return (
    <div className="p-6 max-w-7xl bg-white mx-auto text-black" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Free Assessment for Abroad Study, Jobseeker Visa, Permanent Residency Visa & Work Abroad – <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-6">
        <Image 
          src="/ass.webp" 
          alt="Free Assessment" 
          width={400} 
          height={250} 
          className="rounded-lg mb-4 md:mb-0"
          unoptimized
        />
        <p className="text-lg">
          Welcome to <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">VJC Overseas</Link> – Your Gateway to a Global Career and Education! Whether you’re looking to study abroad, find a job, obtain permanent residency, or work overseas, we provide expert guidance through our <Link href="https://www.vjcoverseas.com/services/free-assessment" className="text-orange-500 font-bold">Free Assessment</Link> service.  
          
          Our experienced consultants evaluate your profile and goals to create a personalized roadmap tailored just for you.  
          
          With strong ties to top institutions and employers worldwide, we ensure you gain access to the best opportunities.  
          
          From choosing the right visa to preparing your application documents, we walk with you every step of the way.  
          
          Begin your global journey with confidence, clarity, and expert support from <span className="text-orange-500">VJC Overseas</span>.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-3">
        <li><strong>Study Abroad:</strong> Access top universities worldwide with tailored educational guidance. Many aspirants also benefit from our <Link href="https://www.vjcoverseas.com/study-abroad" className="text-orange-500 font-bold">Study Abroad Consultants</Link>.</li>
        <li><strong>Jobseeker Visa:</strong> Secure the right visa to explore job opportunities in top countries.</li>
        <li><strong>Permanent Residency Visa:</strong> Expert assistance in PR applications for Canada, Australia, and more.</li>
        <li><strong>Work Abroad:</strong> Smooth application process for skilled worker visas and job placements, backed by trusted <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link>.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6  mb-2">How Our Free Assessment Works</h2>
      <ol className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li><strong>Complete the Form:</strong> Fill out our quick online assessment.</li>
        <li><strong>Expert Evaluation:</strong> Our consultants analyze your profile.</li>
        <li><strong>Personalized Advice:</strong> Get tailored recommendations for visa options through our specialized <Link href="https://www.vjcoverseas.com/services" className="text-orange-500 font-bold">Immigration Support Services</Link>.</li>
        <li><strong>Step-by-Step Guidance:</strong> Assistance through document preparation and application filing.</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Popular Destinations for Study, Work & Immigration</h2>
      <ul className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li><strong>Canada:</strong> High quality of life, excellent education, and immigration-friendly policies.</li>
        <li><strong>Australia:</strong> Strong job market, top universities, and great living conditions.</li>
        <li><strong>Germany:</strong> Leading destination for skilled workers and students.</li>
        <li><strong>New Zealand:</strong> Balanced lifestyle with excellent career prospects.</li>
        <li><strong>United Kingdom:</strong> A hub for education and skilled professionals, often guided by our <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500 font-bold">Visit Visa Consultants</Link>.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Take the First Step Towards Your Global Dream</h2>
      <p className="mb-4 text-lg">
        At <span className="text-orange-500">VJC Overseas</span>, we simplify your journey to success. Start your <Link href="https://www.vjcoverseas.com/services/free-assessment" className="text-orange-500 font-bold">Free Assessment</Link> today and explore global opportunities with confidence.
      </p>
    </div>
  );
}
