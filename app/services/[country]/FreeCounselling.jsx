import Image from 'next/image';
import Link from 'next/link';

export default function VJCOverseas() {
  return (
    <div className="bg-white text-black p-6 font-[Times New Roman]">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">
          Free Counseling for Abroad Study, Jobseeker Visa, Permanent Residency Visa & Work Abroad - 
          <span className="text-orange-500"> VJC Overseas</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <Image 
          src="/Counselling-1.jpg" 
          alt="VJC Overseas" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg mb-6"
          unoptimized
        />
      </div>
      <p className="text-lg leading-relaxed">
        Welcome to <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">VJC Overseas</Link>, your trusted partner in pursuing opportunities abroad. Whether you're looking to study overseas, secure a jobseeker visa, apply for permanent residency, or explore work opportunities internationally, we offer expert guidance and <Link href="https://www.vjcoverseas.com/services/free-counselling" className="text-orange-500 font-bold">Free Counseling</Link> to help you achieve your dreams...
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li>Free Counseling: Receive personalized advice and detailed guidance with support from our <Link href="https://www.vjcoverseas.com/services" className="text-orange-500 font-bold">Immigration Support Services</Link>.</li>
        <li>Expert Consultants: Our experienced team is well-versed in immigration laws and study options.</li>
        <li>End-to-End Support: From application assistance to post-arrival services.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Our Services</h2>
      <p className="mt-2">
        We offer assistance with Study Abroad Counseling, Jobseeker Visas, Permanent Residency, and Work Abroad Opportunities. Many students rely on our <Link href="https://www.vjcoverseas.com/study-abroad" className="text-orange-500 font-bold">Study Abroad Consultants</Link> for success.
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Countries We Specialize In</h2>
      <p className="mt-2">
        Canada, Australia, Germany, USA, UK, New Zealand, and more — guided by our <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500 font-bold">Visit Visa Consultants</Link>.
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-2">How It Works</h2>
      <ol className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li>Get in Touch: Contact us to schedule your free session.</li>
        <li>Discuss Your Goals: Receive tailored advice.</li>
        <li>Receive a Roadmap: Get a step-by-step plan with help from the <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link>.</li>
        <li>Ongoing Support: Assistance throughout your journey.</li>
      </ol>
      
      <div className="text-center mt-6 mb-2">
        <p className="text-lg font-semibold">
          Recognized as <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link> in Hyderabad and Bangalore for PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, and Work Permit Visa.
        </p>
      </div>
    </div>
  );
}
