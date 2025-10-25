'use client';
import Image from 'next/image';

const PassportServices = () => {
  return (
    <div className="w-full p-6 md:p-8">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        <span className="text-orange-500">Passport Services for VJC Overseas</span>: Your Trusted Partner for Smooth Travel Documentation
      </h1>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-10 gap-6">
        {/* Image Block - 35% width */}
        <div className="w-full md:w-[35%]">
          <Image
            src="/passport.jpg"
            alt="Passport Services"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full h-auto"
            priority
            unoptimized
          />
        </div>

        {/* Text Block - 65% width */}
        <div className="w-full md:w-[65%] text-black font-serif" style={{ fontFamily: 'Times New Roman' }}>
          <p className="text-lg mb-4">
            At <span className="text-orange-500">VJC Overseas</span>, we know that your passport is more than just a document — it’s your key to the world. Whether you’re embarking on a journey for education, leisure, work, or a new life abroad, having a valid passport is the foundation of your travel dream. Our expert-led, customer-first passport services are tailored to remove the stress and confusion from the process, allowing you to focus on your future, not the paperwork.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why People Trust <span className="text-orange-500">VJC Overseas</span></h2>
          <ul className="list-disc pl-6 mb-4 space-y-3">
            <li><strong>Expert Guidance, Every Step:</strong> Our trained consultants provide detailed walkthroughs of each passport process — from form filling to submission and follow-up — so you're never lost or confused.</li>
            <li><strong>Time-Saving Support:</strong> We eliminate the guesswork and reduce your time spent standing in queues, correcting forms, or facing rejections.</li>
            <li><strong>100% Transparency:</strong> You’ll be informed at every stage. No surprises, no hidden costs — just simple, reliable service.</li>
            <li><strong>End-to-End Assistance:</strong> Whether you need a new passport, a renewal, or a correction — we cover it all, right from documentation to dispatch tracking.</li>
          </ul>
        </div>
      </div>

      {/* Detailed Service Info */}
      <div className="text-black font-serif" style={{ fontFamily: 'Times New Roman' }}>
        <h2 className="text-2xl font-semibold mb-4">What Services Do We Offer?</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li><strong>First-Time Passport Application:</strong> If you're applying for a passport for the first time, our team ensures that all the documents are properly arranged and submitted on time. We’ll help you book appointments, verify identity documents, and avoid common application errors that lead to rejections.</li>
          <li><strong>Passport Renewal:</strong> Expiring or expired passport? We take care of the complete renewal process so you don't miss out on travel plans. With reminders, document prep, and timely submission, we fast-track your renewal for smooth travel ahead.</li>
          <li><strong>Corrections and Updates:</strong> If your passport has incorrect data like name misspellings, wrong birth dates, or needs updates like marriage name change or gender updates — we handle it accurately and promptly to avoid future travel issues.</li>
          <li><strong>Lost/Damaged Passport Replacement:</strong> Misplaced your passport? Don’t worry — we’ll guide you through the police complaint, affidavit, and reissue process with care and urgency.</li>
          <li><strong>Child and Minor Passports:</strong> Planning to travel with children? We offer a smooth process for minors' passport applications, ensuring all guardian/parental approvals and documentation are correctly handled.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">How We Make It Easy For You</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li><strong>Step-by-Step Consultation:</strong> We guide you from the very first step until your passport is in your hands. Whether it’s a government form or uploading documents, we do the heavy lifting.</li>
          <li><strong>On-Time Submissions:</strong> We work on your behalf to ensure timely slot bookings, no missed deadlines, and smooth approval timelines.</li>
          <li><strong>Custom Checklists:</strong> Get a personalized checklist based on your case — saving you from endless Googling and guesswork.</li>
          <li><strong>Affordable Fees:</strong> We offer service packages that suit students, families, and professionals alike — with no extra fees hidden in the fine print.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Client Testimonials & Trust</h2>
        <p className="text-lg mb-4">
          Thousands of happy clients have received their passports without stress through our expert support. Our team is known for its friendly approach, deep knowledge, and personal care for every applicant — no matter how simple or complex their case.
        </p>
        <p className="text-lg mb-6">
          Our offices regularly handle urgent travel cases, student visa documentation, name change processes post-marriage, and much more — all with professionalism and a smile.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li><strong>Is Tatkal service available?</strong> Yes! We help you get Tatkal slots and prep your case for same-week delivery if you have urgent travel plans.</li>
          <li><strong>How long does the passport process take?</strong> Typically 5–15 working days depending on location and type — and we keep you updated every step of the way.</li>
          <li><strong>What if I don’t have all documents?</strong> Don’t worry. We’ll help you gather alternate proofs and provide affidavits wherever needed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Take the First Step — Reach Out to Us Today</h2>
        <p className="text-lg mb-4">
          No more confusion, no more wasted time. Let <span className="text-orange-500">VJC Overseas</span> handle your passport journey so you can focus on your travel, studies, or new job abroad. Whether you’re renewing or applying for the first time, we’re here to ensure a smooth ride from start to finish.
        </p>

        <div className="mt-6 flex justify-center">
          
        </div>
      </div>
    </div>
  );
};

export default PassportServices;
