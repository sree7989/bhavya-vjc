"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Desc from "@/app/components/Scroll/components/Description";
import NewSteps from "@/app/components/NewSteps";
import ServicesDec from "@/app/components/ServicesDec";
import Awardsection from "@/app/components/Awardsection";

// Dynamic Imports (only for heavy/rarely used components)
const Scroll = dynamic(() => import('@/app/components/Scroll/index'), { ssr: false });
const CTA = dynamic(() => import('@/app/components/CTA'), { ssr: false });
const Parallex = dynamic(() => import('@/app/components/Parallex/parallex'), { ssr: false });

// Loading indicator component
function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {/* Critical Content: Render immediately */}
      <Hero />
      <Desc />
      <Awardsection />
      <ServicesDec />
      <NewSteps />

      {/* Lazy load heavy components with separate Suspense boundaries */}
      <Suspense fallback={<LoadingIndicator />}>
        <Scroll />
      </Suspense>

      <Suspense fallback={<LoadingIndicator />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<LoadingIndicator />}>
        <Parallex />
      </Suspense>
    </>
  );
}
