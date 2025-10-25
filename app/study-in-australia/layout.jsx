import Script from 'next/script';

export const metadata = {
  title: 'Australia Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best Australia Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of Australia Study Visa Applications and also Check the Eligibility to Study in Australia. Get Free Australia Student Visa Processing and Documentation. Apply for Australia Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best Australia Study Visa Consultants in Hyderabad, Australia Student Visa, Australia Study Visa, Student Visa for Australia, Best Australia Student Visa Consultants in Hyderabad, Australia Visa Process for Students, How To Apply for Australia Student Visa, Australia Student Visa Requirements, Australia Study Visa Application, Documents for Australia Student Visa, Australia Student Visa 2025, Australia Student Visa Checklist, Study in Australia Visa Process, Australia Student Visa Processing Time, Australia Student Visa Eligibility, Australia Visa Process',
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
