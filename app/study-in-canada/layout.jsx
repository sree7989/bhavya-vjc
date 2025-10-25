import Script from 'next/script';

export const metadata = {
  title: 'Canada Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best Canada Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of Canada Study Visa Applications and also Check the Eligibility to Study in Canada. Get Free Canada Student Visa Processing and Documentation. Apply Canada Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best Canada Study Visa Consultants in Hyderabad, Canada Student Visa, Canada Study Visa, Student Visa for Canada, Best Canada Student Visa Consultants in Hyderabad, Canada Visa Process for Students, How To Apply for Canada Student Visa, Canada Student Visa Requirements, Canada Study Visa Application, Documents for Canada Student Visa, Canada Student Visa 2025, Canada Student Visa Checklist, Study in Canada Visa Process, Canada Student Visa Processing Time, Canada Student Visa Eligibility, Canada Visa Process',
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
