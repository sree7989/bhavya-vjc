import { useState, useEffect } from "react";
import Form from "./Form";

const images = [
  "/studying-abroad-1.webp",
  "/workabroad.jpg",
  "/workabroad.webp",
  
];

export default function WorkAbroad() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Previous Image - Fades Out */}
      {prevIndex !== null && (
        <div
          key={`prev-${prevIndex}`}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform scale-110 opacity-0 z-0"
          style={{ backgroundImage: `url('${images[prevIndex]}')` }}
        />
      )}

      {/* Current Image - Fades In with slight scale */}
      <div
        key={`current-${currentIndex}`}
        className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out transform ${
          fade ? "opacity-100 scale-110" : "opacity-0 scale-100"
        } z-0`}
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col md:flex-row min-h-screen px-6 sm:px-12 md:px-20 py-16 md:py-20 items-center justify-center md:justify-between max-w-7xl mx-auto gap-12 md:gap-0">
        {/* Left Content */}
        <div className="max-w-lg text-white space-y-8">
          <h1 className="text-3xl sm:text-4xl mt-4 md:text-5xl font-extrabold leading-snug sm:leading-tight">
            Explore Opportunities <br /> to Work Abroad
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            Discover exciting job opportunities worldwide and kickstart your
            international career. Our expert guidance helps you navigate visa
            processes, find the right job, and settle smoothly in your new home
            abroad.
          </p>

      
        </div>

        {/* Right - Form */}
        <div className="w-full max-w-md">
          <Form />
        </div>
      </div>
    </div>
  );
}
