import Script from 'next/script';

export const metadata = {
  title: 'Apply for Visit Visa Process USA Canada Australia UK Dubai Denmark Austria Italy Schengen',
    description: 'Get Visit Visa for USA Canada Australia Canada UK Dubai Denmark Austria Italy Schengen with Best Visit Visa Consultants in Hyderabad and Bangalore and Apply Online also know the Documents Check List and Know the Requirements for Visit Visa Process Online for USA Visit Visa or Canada Visit Visa, Australia Visit Visa Consultancy, Dubai Visit Visa with Invitation or get other Documents for Schengen Visit Visa Process with Best Visa and Immigration Consultants',
    keywords: 'Visit Visa Process, Online Visit Visa Process, USA Visit Visa Process, USA B1B2 Visa Process, Canada Visit Visa Process, Australia Visit Visa Process, UK Visit Visa Process, Dubai Visit Visa Process, Schengen Visit Visa Process, Visit Visa Documents Check List, Requirements for Visit Visa Process, Best Visa and Immigration Consultants, Best Visa and Immigration Consultants in Hyderabad, Visa and Immigration Consultants, Best Visa and Immigration Consultants in Bangalore',
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
