import Script from 'next/script';

export const metadata = {
  title: 'Dubai Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best Dubai Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of Dubai Study Visa Applications and also Check the Eligibility to Study in Dubai. Get Free Dubai Student Visa Processing and Documentation. Apply for Dubai Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best Dubai Study Visa Consultants in Hyderabad, Dubai Student Visa, Dubai Study Visa, Student Visa for Dubai, Best Dubai Student Visa Consultants in Hyderabad, Dubai Visa Process for Students, How To Apply for Dubai Student Visa, Dubai Student Visa Requirements, Dubai Study Visa Application, Documents for Dubai Student Visa, Dubai Student Visa 2025, Dubai Student Visa Checklist, Study in Dubai Visa Process, Dubai Student Visa Processing Time, Dubai Student Visa Eligibility, Dubai Visa Process',
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
