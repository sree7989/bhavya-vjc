"use client";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Poland Tourist Visa from India – Fast Application | VJC Overseas",
  description:
    "Apply for a Poland Tourist Visa from India with VJC Overseas. Get expert help with documentation, visa fees, and travel plans. Explore top attractions in Poland hassle-free!",
};

export default function PolandTouristVisa() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-10 -mt-10"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Heading */}
      <h1 className="flex flex-col items-center text-lg sm:text-2xl md:text-2xl font-bold mb-4 text-center">
  <span>Poland Visit/Tourist Visa –</span>
  <span>
    Explore the Heart of Europe with <strong className="text-orange-500 font-bold">VJC Overseas</strong>
  </span>
</h1>


      {/* Left Side Text */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl font-bold mb-4">
            Discover Poland – A Hidden Gem of Europe
          </h2>
          <p className="mb-6">
            Poland is a captivating country where medieval charm meets modern
            vibrancy. From the cobbled streets of Kraków to the majestic Tatra
            Mountains, Poland offers a rich tapestry of culture, history, and
            natural beauty. Whether you're drawn by stunning castles,
            picturesque towns, or the warmth of Polish hospitality, your
            unforgettable European journey starts with a{" "}
            <Link
              href="https://www.vjcoverseas.com/schengen-visas/poland"
              className="text-orange-500 font-bold"
            >
              Poland Schengen Visa
            </Link>
            .
          </p>
          <p className="mb-6">
            Let <strong className="text-black font-bold">VJC Overseas</strong>{" "}
            be your trusted visa partner in making this dream trip a reality.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/polandtouristcontent.jpg"
            alt="Poland Tourist Attractions"
            width={500}
            height={700}
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Visit Poland?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          Rich Cultural Heritage – Explore UNESCO World Heritage Sites like
          Auschwitz-Birkenau and the Wieliczka Salt Mine.
        </li>
        <li>Affordable European Destination – Get the best of Europe without breaking the bank.</li>
        <li>Breathtaking Natural Landscapes – Visit the serene Masurian Lake District and snow-capped Carpathian Mountains.</li>
        <li>Vibrant Cities – Dive into the lively streets of Warsaw, Kraków, and Gdańsk.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Poland Tourist Visa Information</h2>
      <p className="mb-2">
        <strong>Visa Validity:</strong> The Schengen Tourist Visa for Poland is valid for up to 90 days within a 180-day period. You can travel freely within the Schengen Area during this period.
      </p>
      <p className="mb-6">
        <strong>Visa Fees (As of 2024):</strong>
        <br />
        Adults: €80
        <br />
        Children (6–12 years): €40
        <br />
        Children below 6 years: Free
        <br />
        <em>
          Note: <Link
            href="https://www.vjcoverseas.com/"
            className="text-orange-500 font-bold"
          >
            VJC Overseas
          </Link>{" "}
          charges a nominal service fee for visa consultation and processing assistance.
        </em>
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Documents Required for Poland Visit Visa
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Valid passport (minimum 6 months validity)</li>
        <li>Completed and signed visa application form</li>
        <li>2 recent passport-size photographs</li>
        <li>Confirmed round-trip flight tickets</li>
        <li>Proof of accommodation (hotel bookings or invitation letter)</li>
        <li>Travel insurance (minimum coverage of €30,000)</li>
        <li>Proof of sufficient financial means (bank statements, ITRs)</li>
        <li>No Objection Certificate (if employed or studying)</li>
        <li>Visa fee payment receipt</li>
      </ul>

      <p className="mb-6">
        <strong>VJC Tip:</strong> Our experts help ensure every document meets embassy standards to avoid delays or rejections. Learn the full{" "}
        <Link
          href="https://www.vjcoverseas.com/visit-visas"
          className="text-orange-500 font-bold"
        >
          Visit Visa Process
        </Link>{" "}
        for a smooth approval.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Must-Visit Places in Poland</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Kraków:</strong> Wander through the historic Old Town, visit Wawel Castle, and experience vibrant local culture.</li>
        <li><strong>Warsaw:</strong> Modern capital full of museums, parks, and stunning architecture.</li>
        <li><strong>Zakopane & Tatra Mountains:</strong> Nature lovers’ paradise for hiking and winter sports.</li>
        <li><strong>Gdańsk:</strong> Colourful port city known for maritime history and Baltic Sea views.</li>
        <li><strong>Wrocław:</strong> Famous for beautiful bridges and quirky gnome statues across the city.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose VJC Overseas?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Expert Visa Guidance</li>
        <li>End-to-End Documentation Support</li>
        <li>Fast & Hassle-Free Processing</li>
        <li>Customized Travel Advice</li>
      </ul>
      <p className="mt-4">
  Your dream trip to Europe starts with the right support system – and that’s exactly what{" "}
  <Link
    href="https://www.vjcoverseas.com/"
    className="text-orange-500 font-bold"
  >
    VJC Overseas
  </Link>{" "}
  provides.
</p>
<p className="text-lg font-bold text-black mt-6">
  ✅ Apply for Schengen Visit Visa Today with VJC Overseas!
</p>



      <p className="mt-4">
        Your European journey is just a click away. Contact our visa experts now and get personalized assistance for your Poland travel plans. With our professional guidance as one of the{" "}
        <Link
          href="https://www.vjcoverseas.com/"
          className="text-orange-500 font-bold"
        >
          Best Visa Immigration Consultants
        </Link>
        , your dream trip becomes reality.
      </p>
    </div>
  );
}
