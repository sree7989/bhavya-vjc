import Script from 'next/script';

export const metadata = {
 title: "Free Immigration Assessment | VJC Overseas Visa Experts",
  description: "Get expert visa & immigration help with VJC Overseas. Take our free assessment to explore top opportunities and start your global journey today.",
  keywords:"work permit, canada immigration, new zealand, singapore visa, permanent residency, visa for united states, permanent residency usa, canada visa, visa uk visa, usa visa application, visa appointment us, visa schengen visa, usa visa, visa application for us visa, visit visa uae dubai"
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
        async
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {children}
    </>
  );
}
