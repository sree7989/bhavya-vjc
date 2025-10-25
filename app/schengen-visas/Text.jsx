import {
  FaMapMarkedAlt,
  FaPassport,
  FaPlane,
  FaUmbrellaBeach,
  FaGlobeEurope,
} from 'react-icons/fa';
import Link from "next/link";

const SchengenHighlight = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/austriavisit.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 z-10">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Explore Europe with a Schengen Visa –{" "}
            <span className="text-orange-500">Your Gateway to 27 Stunning Countries</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Planning to explore the romantic streets of Paris, breathtaking landscapes of Switzerland, or historic sites of Rome? With a Schengen tourist visa, you can travel across 27 European countries with a single visa!
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            Whether you're dreaming of a relaxing holiday, cultural adventure, or scenic road trip — the Schengen visa makes it easy and accessible.
          </p>
          <p className="text-base sm:text-lg text-gray-300 font-semibold">
            Apply with us now for a seamless experience from visa submission to boarding your flight!
          </p>

          <Link href="/assessment">
            <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group w-fit mt-2">
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-blue-400 transition-all duration-500 ease-out group-hover:left-0"></span>
            </button>
          </Link>
        </div>

        {/* Right: Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaGlobeEurope />,
              title: "What is a Schengen Visa?",
              desc: "A single visa to explore 27 European countries for tourism, family visits, or adventure.",
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Countries You Can Visit",
              desc: "France, Germany, Italy, Greece, Netherlands, Spain, Switzerland & more.",
            },
            {
              icon: <FaUmbrellaBeach />,
              title: "Why Tourists Love It",
              desc: "Access snowy Alps, sunny beaches, and vibrant cities—all under one visa.",
            },
            {
              icon: <FaPassport />,
              title: "Simple & Efficient",
              desc: "Avoid the hassle of multiple visas with one application for all.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-5 rounded-xl shadow-lg hover:bg-white/20 transition backdrop-blur-lg"
            >
              <div className="text-3xl mb-4 text-orange-500">{icon}</div>
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-sm text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchengenHighlight;
