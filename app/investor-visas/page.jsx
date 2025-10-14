"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load Two component
const Two = dynamic(() => import("./Two"), {
  ssr: false, // optional: avoids server-side render cost if it's client-only
  loading: () => <p className="text-center py-10">Loading...</p>,
});

const ContactPage = () => {
  return (
    <>
      <Suspense fallback={<p className="text-center py-10">Loading Content...</p>}>
        <Two />
      </Suspense>
    </>
  );
};

export default ContactPage;
