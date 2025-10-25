import Script from 'next/script';

export const metadata = {
title: 'Permanent Residency PR Visa for Canada Australia Express Entry PR Visa Process Requirements',
  description: 'Apply for Permanent Residency Visa in Canada and Australia it is also called as Canada PR Visa Process or Australia PR Visa Process also know the Benefits for Canada Express Entry Program and Australia PR Visa Apply Online now and get Requirements for Canada PR Visa and Australia PR Visa Process in 2025 get Australia Immigration PR Visa Process and Canada Immigration PR Visa Process with VJC Overseas',
  keywords: 'Permanent Residency Visa, PR Visa, Canada Permanent Residency Visa, Australia Permanent Residency Visa, Canada Express Entry, PR Visa Process, PR Visa Requirements, Permanent Residency Visa Requirements, PR Visa Benefits, Canada PR Visa Benefits, Australia PR Visa Benefits, Canada PR Visa Process, Australia PR Visa Process, Canada Permanent Residence Visa, Australia Permanent Residence Visa',
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
