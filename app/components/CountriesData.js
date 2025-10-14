import Link from 'next/link';
import Image from "next/image";// Updated list with 15 countries (removed duplicate Spain)
export const countries = [
{
  name: "Canada Study Visa",
  image: "/c3.jpg",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-2">
      <p>
        <span className="font-semibold">Canada</span> is a top destination for international students, offering world-class education, post-study work options, and a diverse culture. A <span className="font-semibold">Study Permit</span> is required to study in Canada.
      </p>

      <h3 className="text-base md:text-lg font-bold text-red-600 mt-2">Canada Study Visa Process</h3>

      <div>
        <h4 className="font-semibold text-orange-600">1. Apply to a DLI</h4>
        <p>Choose a recognized college or university and get a Letter of Acceptance (LOA).</p>
      </div>

      <div>
        <h4 className="font-semibold text-orange-600">2. Gather Documents</h4>
        <ul className="list-disc pl-5">
          <li>LOA</li>
          <li>Valid passport & photographs</li>
          <li>Proof of funds (CAD 20,635/year)</li>
          <li>SOP</li>
          <li>IELTS/TOEFL scores</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-orange-600">3. Apply Online or via VAC</h4>
        <p>
          Submit via IRCC or VAC. <br />
          Fees: <span className="font-medium">CAD 150 (Application)</span>,{" "}
          <span className="font-medium">CAD 85 (Biometrics)</span>
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-orange-600">4. Biometrics & Medical</h4>
        <p>Attend biometric appointment and medical if required.</p>
      </div>

      <div>
        <h4 className="font-semibold text-orange-600">5. Visa Approval</h4>
        <p>
          Once approved, receive: <br />
          • Port of Entry Letter <br />
          • TRV (if applicable)
        </p>
      </div>

      

      <div className="pt-2">
        <Link
          href="/study-abroad/canada"
          className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-blue-400 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  ),
  color: "bg-gradient-to-r from-red-600 to-white",
  Link: "/study-abroad/canada"
}
,

  {
  name: "Australia Study Visa",
  image: "/c4.png",
  color: "bg-gradient-to-r from-blue-700 to-white",
  link: "/study-abroad/australia",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-2">
      <p>
        <span className="font-semibold">Australia</span> is a leading destination for international students offering quality education, diverse culture, and strong post-study work options.
      </p>
      <p>
        To study here, you need a <span className="font-semibold">Subclass 500 Student Visa</span>.
      </p>

      <h3 className="text-base md:text-lg font-bold text-blue-700"> Visa Process Overview</h3>

      <div>
        <span className="font-semibold text-blue-600">1. Choose Course & Institution:</span>{" "}
        Pick a CRICOS-registered course and get your CoE.
      </div>

      <div>
        <span className="font-semibold text-blue-600">2. Documents Required:</span>{" "}
        Academic transcripts, IELTS/PTE/TOEFL, SOP, passport, financials.
      </div>

      <div>
        <span className="font-semibold text-blue-600">3. Create ImmiAccount:</span>{" "}
        Register on the immigration portal to apply online.
      </div>

      <div>
        <span className="font-semibold text-blue-600">4. Submit Application:</span>{" "}
        Upload documents, pay AUD 710, attach CoE & OSHC.
      </div>

      <div>
        <span className="font-semibold text-blue-600">5. Biometrics & Medical:</span>{" "}
        Complete your biometric & medical exam via a panel physician.
      </div>

      <div>
        <span className="font-semibold text-blue-600">6. Visa Outcome:</span>{" "}
        Typically processed in 4–8 weeks. You’ll receive a visa grant letter via email.
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Bonus:</span> Apply for Temporary Graduate Visa post studies for job opportunities.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/australia"
          className="inline-block px-4 py-2 bg-orange-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},

 {
  name: "USA Study Visa",
  image: "/c2.png",
  color: "bg-gradient-to-r from-red-600 to-red-600",
  link: "/study-abraod/usa",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-2">
      <p>
        <span className="font-semibold">USA</span> is a global leader in education, innovation, and job opportunities, attracting students from all over the world.
      </p>
      <p>
        To study in the U.S., you’ll need to apply for an <span className="font-semibold">F-1 Student Visa</span>.
      </p>

      <h3 className="text-base md:text-lg font-bold text-red-700">USA Study Visa Process</h3>

      <div>
        <span className="font-semibold text-red-600">1. Apply & Get Accepted:</span>{" "}
        Choose a SEVP-approved school. Once accepted, receive your Form I-20.
      </div>

      <div>
        <span className="font-semibold text-red-600">2. Pay SEVIS Fee:</span>{" "}
        Pay the I-901 SEVIS fee ($350) at least 3 days before applying for the visa.
      </div>

      <div>
        <span className="font-semibold text-red-600">3. Complete DS-160:</span>{" "}
        Fill the DS-160 online visa application and upload a photo as per U.S. specs.
      </div>

      <div>
        <span className="font-semibold text-red-600">4. Schedule Visa Interview:</span>{" "}
        Book your slot at the nearest U.S. Embassy or Consulate and pay ~$185 visa fee.
      </div>

      <div>
        <span className="font-semibold text-red-600">5. Attend Interview:</span>{" "}
        Bring Form I-20, DS-160 confirmation, SEVIS receipt, financial and academic docs, and your passport. Be confident and honest.
      </div>

      <div>
        <span className="font-semibold text-red-600">6. Visa Approval:</span>{" "}
        Once approved, your F-1 Visa will be stamped. Entry is allowed up to 30 days before classes start.
      </div>

      <div className="bg-red-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Note:</span> Strong academic and financial backing improves your visa approval chances.
      </div>

      <div className="pt-2">
        <Link
          href="/usa"
          className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},

  {
  name: "Germany Study Visa",
  image: "/c5.png",
  color: "bg-gradient-to-r from-black to-yellow-600",
  link: "/study-abroad/germany",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-3">
      <p>
        <span className="font-semibold">Germany</span> offers world-class education with low or no tuition fees in many public universities, combined with a strong economy and rich culture.
      </p>

      <p>
        For studies longer than 90 days, you need a <span className="font-semibold">German National (D-Type) Student Visa</span>.
      </p>

      <h3 className="text-base md:text-lg font-bold text-yellow-600 mt-2">Germany Study Visa Process</h3>

      <div>
        <span className="font-semibold text-yellow-600">1. Secure Admission:</span>{" "}
        Apply and get your Letter of Admission or Conditional Offer.
      </div>

      <div>
        <span className="font-semibold text-yellow-600">2. Open a Blocked Account:</span>{" "}
        Proof of financial means (€11,208/year) via a Blocked Account is mandatory.
      </div>

      <div>
        <span className="font-semibold text-yellow-600">3. Health Insurance:</span>{" "}
        Purchase valid German health insurance (public or private).
      </div>

      <div>
        <span className="font-semibold text-yellow-600">4. Prepare Documents:</span>{" "}
        Gather passport, admission letter, proof of funds, transcripts, motivation letter, and insurance proof.
      </div>

      <div>
        <span className="font-semibold text-yellow-600">5. Schedule Visa Appointment:</span>{" "}
        Book interview at the German embassy/consulate and pay ~€75 visa fee.
      </div>

      <div>
        <span className="font-semibold text-yellow-600">6. Attend Interview:</span>{" "}
        Be confident; processing takes 4–12 weeks.
      </div>

      <div className="bg-yellow-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Tip:</span> Early preparation and complete documentation speed up approval.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/germany"
          className="inline-block px-4 py-2 bg-yellow-600 text-black text-sm font-medium rounded-md hover:bg-yellow-700 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},
 {
  name: "UK Study Visa",
  image: "/c1.png",
  color: "bg-gradient-to-r from-red-700 to-blue-700",
  link: "/study-abroad/uk",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-3">
      <p>
        The <span className="font-semibold">UK</span> is a top choice for students with world-class universities and a vibrant multicultural environment.
      </p>

      <p>
        To study here, you need a <span className="font-semibold">Student Visa</span> (formerly Tier 4).
      </p>

      <h3 className="text-base md:text-lg font-bold text-blue-700 mt-2">🇬🇧 UK Study Visa Process</h3>

      <div>
        <span className="font-semibold text-blue-600">1. Get Offer & CAS:</span>{" "}
        Receive an unconditional offer and CAS from your UK institution.
      </div>

      <div>
        <span className="font-semibold text-blue-600">2. Check Eligibility & Funds:</span>{" "}
        Meet English language requirements and show sufficient funds.
      </div>

      <div>
        <span className="font-semibold text-blue-600">3. Apply Online:</span>{" "}
        Fill the UK Student Visa application, pay visa fee (~£490) and IHS.
      </div>

      <div>
        <span className="font-semibold text-blue-600">4. Biometrics & Interview:</span>{" "}
        Book appointment at VFS, submit biometrics and documents; some may attend interviews.
      </div>

      <div>
        <span className="font-semibold text-blue-600">5. Visa Decision:</span>{" "}
        Processing takes 3–6 weeks; travel allowed 1 month before course start.
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Bonus:</span> Work part-time during studies & get a 2-year Graduate Route post-study work visa.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/uk"
          className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},
 {
  name: "France Study Visa",
  image: "/c6.png",
  color: "bg-gradient-to-r from-blue-500 to-white",
  link: "/study-abroad/france",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-2">
      <p>
        <span className="font-semibold">France</span> is famed for art, cuisine, and rich culture. It offers affordable tuition and prestigious universities.
      </p>

      <p>
        To study here over 90 days, you’ll need a <span className="font-semibold">Long-Stay Student Visa (VLS-TS)</span>.
      </p>

      <h3 className="text-base md:text-lg font-bold text-blue-700 mt-2"> France Study Visa Process</h3>

      <div>
        <span className="font-semibold text-blue-600">1. Secure Admission:</span>{" "}
        Get your official admission letter from a French university or institution.
      </div>

      <div>
        <span className="font-semibold text-blue-600">2. Register on Campus France:</span>{" "}
        Create an account on Campus France portal, complete your application, and attend an interview (if required).
      </div>

      <div>
        <span className="font-semibold text-blue-600">3. Prepare Documents:</span>{" "}
        Passport, admission letter, Campus France approval, accommodation proof, finances (€615/month), insurance, transcripts.
      </div>

      <div>
        <span className="font-semibold text-blue-600">4. Apply for Visa:</span>{" "}
        Submit via France-Visas, schedule biometric appointment at VFS/French consulate.
      </div>

      <div>
        <span className="font-semibold text-blue-600">5. Visa Decision:</span>{" "}
        After approval, receive your VLS-TS visa that also acts as residence permit after validation.
      </div>

      <div>
        <span className="font-semibold text-blue-600">6. Post-Arrival Formalities:</span>{" "}
        Validate your visa online within 3 months of arrival and register with local authorities.
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Bonus:</span> France combines academic excellence with a vibrant lifestyle.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abraod/france"
          className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},
 {
  name: "Italy Study Visa",
  image: "/c7.png",
  description: "Italy is famous for its art, architecture, and cuisine.",
  color: "bg-gradient-to-r from-green-600 to-white",
  link: "/italy",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed space-y-2 break-words">
      <p>
        Italy blends centuries of cultural heritage with world-class education. With top universities like the University of Bologna, Sapienza Rome, and Politecnico di Milano, it offers globally recognized degrees in design, business, engineering, medicine, and humanities.
      </p>

      <h3 className="text-base md:text-lg font-semibold text-green-700">🎓 Why Study in Italy?</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Affordable tuition and cost of living.</li>
        <li>Programs in English at top-ranked universities.</li>
        <li>Vibrant student life in historic cities.</li>
        <li>Scholarship options for international students.</li>
        <li>Easy access to travel across Europe.</li>
      </ul>

      <div className="bg-green-100 p-3 rounded-md">
      Study in Italy to experience academic excellence alongside unforgettable food, fashion, and history.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abraod/italy"
          className="inline-block px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-md hover:bg-green-800 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "Spain Study Visa",
  image: "/c13.png",
  description: "Spain is known for its vibrant culture, food, and festivals.",
  color: "bg-gradient-to-r from-red-600 to-yellow-600",
  link: "/spain",
   description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed space-y-3">
      <p>
        Spain is a top destination for international students, offering world-class universities like the University of Barcelona and IE Business School. With affordable tuition, English-taught programs, and a lively culture, it’s the perfect blend of education and lifestyle.
      </p>

      <h3 className="text-base md:text-lg font-semibold text-red-700">🎓 Why Study in Spain?</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Globally ranked universities and innovative teaching.</li>
        <li>Programs available in both Spanish and English.</li>
        <li>Low tuition fees and numerous scholarships.</li>
        <li>Student-friendly cities like Madrid, Valencia, and Granada.</li>
        <li>Rich culture, sunny climate, and exciting student life.</li>
      </ul>

      <div className="bg-yellow-100 p-3 rounded-md">
        🇪🇸 Studying in Spain offers more than a degree — it's a cultural, academic, and personal adventure.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/spain"
          className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
 {
  name: "Netherlands Study Visa",
  image: "/c15.png",
  color: "bg-gradient-to-r from-red-600 to-blue-600",
  link: "/studyabroad/netherlands",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        The Netherlands offers world-class, innovation-driven education with over 2,000 English-taught programs at globally recognized universities like TU Delft, University of Amsterdam, and Erasmus University.
      </p>

      <h3 className="text-base md:text-lg font-semibold text-blue-700 mt-2">🎓 Why Study in the Netherlands?</h3>

      <ul className="list-disc list-inside space-y-1">
        <li>Top-ranked institutions with a global outlook.</li>
        <li>Affordable tuition & scholarships for internationals.</li>
        <li>English-taught degrees in diverse fields.</li>
        <li>Safe, inclusive society with high living standards.</li>
        <li>Strategic location for easy European travel.</li>
        <li>Interactive and research-based learning.</li>
        <li>Student cities like Amsterdam & Utrecht full of culture.</li>
      </ul>

      <div className="bg-blue-100 p-3 rounded-md">
        🇳🇱 Experience Europe from the center—live, learn, and thrive in a globally connected environment.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/netherlands"
          className="inline-block px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "UAE Study Visa",
  image: "/c16.png",
  color: "bg-gradient-to-r from-green-700 to-white",
  link: "/study-abroad/uae",
  description: (
    <div className="text-gray-800 text-sm md:text-base leading-relaxed break-words max-w-full space-y-2">
      <p>
        The <span className="font-semibold">UAE</span> blends ancient traditions with cutting-edge technology, making it a rising global education hub.
      </p>

      <p>
        To study in Dubai, you need a <span className="font-semibold">UAE Student Residence Visa</span>, sponsored by your university or a UAE-based guardian.
      </p>

      <h3 className="text-base md:text-lg font-bold text-green-700 mt-2"> Dubai Study Visa Process</h3>

      <div>
        <span className="font-semibold text-green-600">1. Apply to a Recognized University:</span>{" "}
        Get admission from a licensed Dubai university that will sponsor your visa.
      </div>

      <div>
        <span className="font-semibold text-green-600">2. Receive Offer Letter:</span>{" "}
        Obtain your formal admission letter to start the visa process.
      </div>

      <div>
        <span className="font-semibold text-green-600">3. Submit Required Documents:</span>{" "}
        Passport, photos, transcripts, admission letter, medical report, visa form.
      </div>

      <div>
        <span className="font-semibold text-green-600">4. Medical Check & Emirates ID:</span>{" "}
        Complete mandatory medical exam and apply for Emirates ID.
      </div>

      <div>
        <span className="font-semibold text-green-600">5. Visa Issuance:</span>{" "}
        Sponsor applies for your student visa, valid for 12 months and renewable.
      </div>

      <div>
        <span className="font-semibold text-green-600">6. Post-Visa Arrival:</span>{" "}
        Travel to Dubai and start your studies; part-time work permits are available.
      </div>

      <div className="bg-green-100 p-3 rounded-md">
        🎓 <span className="font-semibold">Bonus:</span> Dubai offers quality education with a safe, cosmopolitan lifestyle.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/uae"
          className="inline-block px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-md hover:bg-green-800 transition"
        >
          Know More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "Switzerland Study Visa",
  image: "/c9.png",
  color: "bg-gradient-to-r from-red-600 to-white",
  link: "/switzerland",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        Switzerland is famed for its Alps, chocolates, and top-tier financial services.
        It offers world-class education and an exceptional quality of life.
      </p>

      <h3 className="text-base md:text-lg font-bold text-red-600 mt-2"> Switzerland Study Visa Process</h3>

      <div>
        <span className="font-semibold text-red-700">1. Apply and Get Accepted:</span>{" "}
        Get admission from a recognized Swiss university with an official admission letter.
      </div>

      <div>
        <span className="font-semibold text-red-700">2. Prepare Your Documents:</span>{" "}
        Passport, admission letter, proof of financial support (~CHF 21,000/year), academic certificates, motivation letter, accommodation proof.
      </div>

      <div>
        <span className="font-semibold text-red-700">3. Submit Your Application:</span>{" "}
        Apply at your local Swiss Embassy/Consulate 10–12 weeks before course start, submit docs and pay visa fee.
      </div>

      <div>
        <span className="font-semibold text-red-700">4. Wait for Approval:</span>{" "}
        Visa processing takes several weeks; authorities will review your application.
      </div>

      <div>
        <span className="font-semibold text-red-700">5. Enter Switzerland:</span>{" "}
        Upon approval, receive visa, register at Residents’ Registration Office, and apply for residence permit.
      </div>

      <div className="bg-red-100 p-3 rounded-md">
        🎓 Start your journey toward Swiss excellence in education today!
      </div>

      <div className="pt-2">
        <Link
          href="/study-abraod/switzerland"
          className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "Sweden Study Visa",
  image: "/c13.png",
  color: "bg-gradient-to-r from-blue-500 to-yellow-500",
  link: "/sweden",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        Sweden is renowned for its cutting-edge design, technology, and sustainability, 
        hosting globally ranked universities in a welcoming environment.
      </p>

      <h3 className="text-base md:text-lg font-bold text-blue-600 mt-2"> Sweden Study Visa Process</h3>

      <div>
        <span className="font-semibold text-blue-700">1. Get Admission:</span>{" "}
        Apply through UniversityAdmissions.se and receive your official admission letter.
      </div>

      <div>
        <span className="font-semibold text-blue-700">2. Arrange Financial Proof:</span>{" "}
        Show you can support yourself (~SEK 10,314/month) via bank statements or scholarships.
      </div>

      <div>
        <span className="font-semibold text-blue-700">3. Apply Online:</span>{" "}
        Submit application on the Swedish Migration Agency website with all documents and pay SEK 1,500 fee.
      </div>

      <div>
        <span className="font-semibold text-blue-700">4. Wait for Decision:</span>{" "}
        Processing takes 1–3 months; apply early to avoid delays.
      </div>

      <div>
        <span className="font-semibold text-blue-700">5. Residence Permit & Travel:</span>{" "}
        Receive Residence Permit Card, allowing entry and stay during your studies.
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        🎓 Study in Sweden for academic excellence, modern learning, and great post-study opportunities!
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/sweden"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "South Africa Study Visa",
  image: "/c12.png",
  color: "bg-gradient-to-r from-green-500 to-yellow-500",
  link: "/studyinsouthafrica",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        South Africa offers quality education, affordable tuition, and a culturally immersive experience. Universities like UCT, Wits, and Stellenbosch provide top programs in English.
      </p>

      <h3 className="text-base md:text-lg font-bold text-green-700 mt-2">🎓 Why Study in South Africa?</h3>

      <ul className="list-disc list-inside space-y-1">
        <li>World-class universities with strong global rankings.</li>
        <li>Programs taught in English across diverse disciplines.</li>
        <li>Lower tuition and living costs than many Western nations.</li>
        <li>Scholarships available for international students.</li>
        <li>Innovative, real-world focused teaching.</li>
        <li>Beautiful landscapes & vibrant student lifestyle.</li>
        <li>Opens doors to careers across Africa and globally.</li>
      </ul>

      <div className="bg-yellow-100 p-3 rounded-md">
        🦁 Explore a dynamic mix of academics, culture, and adventure—from Cape Town's beaches to Kruger’s wildlife!
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/southafrica"
          className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  {
  name: "Singapore Study Visa",
  image: "/c11.png",
  color: "bg-gradient-to-r from-red-500 to-white",
  link: "/singapore",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        Singapore is a global education hub, known for world-class universities, a strong economy, and a safe, multicultural environment.
      </p>

      <h3 className="text-base md:text-lg font-bold text-red-600 mt-2">Singapore Study Visa Process</h3>

      <div>
        <span className="font-semibold text-red-700">1. Apply and Get Accepted:</span>{" "}
        Apply to approved institutions like NUS, NTU, or SIM, who will register your details in the SOLAR system.
      </div>

      <div>
        <span className="font-semibold text-red-700">2. Submit Student Pass Application:</span>{" "}
        Complete eForm 16 on the ICA website at least one month before your course starts.
      </div>

      <div>
        <span className="font-semibold text-red-700">3. Prepare Documents:</span>{" "}
        Upload passport copy, admission letter, photo, and proof of financial support; medical check-ups may be required.
      </div>

      <div>
        <span className="font-semibold text-red-700">4. Receive IPA Letter:</span>{" "}
        Get your In-Principle Approval letter, which serves as visa approval and entry permit.
      </div>

      <div>
        <span className="font-semibold text-red-700">5. Travel & Complete Formalities:</span>{" "}
        Upon arrival, visit ICA for fingerprinting and Student Pass collection.
      </div>

      <div className="bg-red-100 p-3 rounded-md">
        🎓 Singapore combines academic rigor with innovation — ideal for ambitious students!
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/singapore"
          className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
 {
  name: "New Zealand Study Visa",
  image: "/c10.png",
  color: "bg-gradient-to-r from-blue-500 to-white",
  link: "/studyinnewzealand",
  description: (
    <div className="text-gray-900 text-sm md:text-base leading-relaxed max-w-full space-y-2 break-words">
      <p>
        New Zealand is famous for its beautiful nature, lakes, and high education standards, making it a top choice for international students.
      </p>

      <h3 className="text-base md:text-lg font-bold text-blue-600 mt-2"> New Zealand Study Visa Process</h3>

      <div>
        <span className="font-semibold text-blue-700">1. Apply and Get Accepted:</span>{" "}
        Apply to an NZQA-approved institution and receive your Offer of Place.
      </div>

      <div>
        <span className="font-semibold text-blue-700">2. Show Proof of Funds:</span>{" "}
        Provide evidence of financial support, including tuition fees and at least NZD $20,000/year for living expenses.
      </div>

      <div>
        <span className="font-semibold text-blue-700">3. Health & Character Checks:</span>{" "}
        Submit medical certificate, chest X-ray (if staying over 6 months), and police clearance certificate.
      </div>

      <div>
        <span className="font-semibold text-blue-700">4. Apply Online or via VFS:</span>{" "}
        Submit your application and documents through Immigration New Zealand's portal or authorized VFS center.
      </div>

      <div>
        <span className="font-semibold text-blue-700">5. Receive Your Visa:</span>{" "}
        Upon approval, get your eVisa or sticker visa in your passport.
      </div>

      <div className="bg-blue-100 p-3 rounded-md">
        🎓 With your visa, study full-time and work up to 20 hours per week during semesters.
      </div>

      <div className="pt-2">
        <Link
          href="/study-abroad/newzealand"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
},
  
];
 