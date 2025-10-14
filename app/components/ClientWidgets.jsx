"use client";

import dynamic from "next/dynamic";

// Dynamically import client-only widgets
const FloatingWhatsApp = dynamic(() => import('./FloatingWhatsapp'), { ssr: false });
const TawkToChat = dynamic(() => import('./TawkToChat'), { ssr: false });
const Popupform = dynamic(() => import('./Popupform'), { ssr: false });

export default function ClientWidgets() {
  return (
    <>
      {/* Uncomment below if you want Popupform visible by default */}
      {/* <Popupform /> */}
      <FloatingWhatsApp />
      <TawkToChat />
    </>
  );
}