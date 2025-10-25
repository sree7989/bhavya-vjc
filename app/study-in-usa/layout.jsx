import Script from 'next/script';


  export const metadata = {
  title: 'USA Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best USA Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of USA Study Visa Applications and also Check the Eligibility to Study in USA. Get Free USA Student Visa Processing and Documentation. Apply USA Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best USA Study Visa Consultants in Hyderabad, USA Student Visa, USA Study Visa, Student Visa for USA, Best USA Student Visa Consultants in Hyderabad, USA Visa Process for Students, How To Apply for USA Student Visa, USA Student Visa Requirements, USA Study Visa Application, Documents for USA Student Visa, USA Student Visa 2025, USA Student Visa Checklist, Study in USA Visa Process, USA Student Visa Processing Time, USA Student Visa Eligibility, USA Visa Process',
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
