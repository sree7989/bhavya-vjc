"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Form from "./Form";
import Link from "next/link";

// Helper to render text with optional link buttons
function renderInfoWithLinks(info, infoLinks) {
  if (!infoLinks || infoLinks.length === 0) return info;
  let result = [];
  let lastIndex = 0;
  infoLinks.forEach((link, idx) => {
    const labelIndex = info.indexOf(link.label, lastIndex);
    if (labelIndex !== -1) {
      if (labelIndex > lastIndex) {
        result.push(info.substring(lastIndex, labelIndex));
      }
      result.push(
        <a
          key={link.label + idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded font-semibold mx-1 transition"
        >
          {link.label}
        </a>
      );
      lastIndex = labelIndex + link.label.length;
    }
  });
  if (lastIndex < info.length) {
    result.push(info.substring(lastIndex));
  }
  return result;
}

export default function Migrate() {
  const router = useRouter();
  const pathname = usePathname();
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);

  useEffect(() => {
    async function fetchVisas() {
      try {
        const res = await fetch("/api/visas");
        const data = await res.json();
        setVisas(data);
        const slug = pathname.split("/").pop();
        const found = data.find((v) => v.slug === slug);
        setSelectedVisa(found || null);
      } catch (err) {
        console.error(err);
      }
    }
    fetchVisas();
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(`/jobseeker-visas/${visa.slug}`);
  };

  return (
    <>
      <Head>
        <title>
          {selectedVisa?.metaTitle || selectedVisa?.name || "Visa Not Found"}
        </title>
        <meta
          name="description"
          content={
            selectedVisa?.metaDescription ||
            selectedVisa?.description ||
            "No visa found for this country."
          }
        />
      </Head>
      <div className="w-full min-h-screen flex flex-col">
        {/* TOP SECTION */}
        {selectedVisa ? (
          <div
            className="relative w-full min-h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${selectedVisa.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 py-8">
              <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
                <motion.div
                  className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                    {selectedVisa.name}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                    {selectedVisa.description}
                  </p>
                </motion.div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
                  <Form />
                </div>
              </div>
            </div>
          </div>
       ) : (
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <h2 className="text-2xl text-red-600 font-bold mb-4">
              Wrong URL! No visa found for this country.
            </h2>
            <button
              onClick={() => router.push("/jobseeker-visas")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold shadow transition"
            >
              Go Home
            </button>
          </div>
        )}

        {/* BOTTOM SECTION */}
        <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
          <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-16">
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
              <span className="block md:text-left text-center">
                Secure Dream Job,
              </span>
              <span className="block text-center">Through Seeker Visa</span>
            </h2>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            {/* Visa Buttons */}
            <div className="w-full md:w-1/3">
              {visas.map((visa, i) => (
                <div key={i} className="mb-4 w-full">
                  <Link
                    href={`/jobseeker-visas/${visa.slug}`}
                    className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg cursor-pointer ${
                      selectedVisa && selectedVisa.slug === visa.slug
                        ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                        : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {visa.name}
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Visa Info Box - only text/HTML, no extra image */}
          <div
  className="w-full md:w-2/3 p-4 md:p-6 lg:-mt-24 rounded-xl border border-gray-300 shadow-md relative"
  style={{
    maxHeight: "700px",
    minHeight: "450px",
    overflowY: "auto",
  }}
>
  <div
    className="text-gray-700 text-lg leading-relaxed"
    dangerouslySetInnerHTML={{
      __html: selectedVisa
        ? selectedVisa.info
        : "No visa found for this country.",
    }}
  />
</div>

          </div>
        </div>
      </div>
    </>
  );
}
