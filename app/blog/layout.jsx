import Script from 'next/script';

export const metadata = {
  title: 'Blog | VJC Overseas',
  description:
    "Connect with VJC Overseas for expert guidance on visas, immigration, and study abroad services. We're here to help you start your journey smoothly.",
  keywords:
    'contact VJC, contact VJC Overseas, contact visa consultants, immigration consultants contact, study abroad experts, visa consultation contact',
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
