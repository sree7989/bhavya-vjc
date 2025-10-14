import Script from 'next/script';
export const metadata = {
  title: 'Singapore Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best Singapore Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of Singapore Study Visa Applications and also Check the Eligibility to Study in Singapore. Get Free Singapore Student Visa Processing and Documentation. Apply Singapore Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best Singapore Study Visa Consultants in Hyderabad, Singapore Student Visa, Singapore Study Visa, Student Visa for Singapore, Best Singapore Student Visa Consultants in Hyderabad, Singapore Visa Process for Students, How To Apply for Singapore Student Visa, Singapore Student Visa Requirements, Singapore Study Visa Application, Documents for Singapore Student Visa, Singapore Student Visa 2025, Singapore Student Visa Checklist, Study in Singapore Visa Process, Singapore Student Visa Processing Time, Singapore Student Visa Eligibility, Singapore Visa Process',
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
