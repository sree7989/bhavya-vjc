import Script from 'next/script';
export const metadata = {
  title: 'Germany Student Study Abroad Visa Consultants in Hyderabad Requirements and Processing Time',
  description: 'Best Germany Student or Abroad Study Visa Consultants in Hyderabad to know the Requirements of Germany Study Visa Applications and also Check the Eligibility to Study in Germany. Get Free Germany Student Visa Processing and Documentation. Apply Germany Student Visa Process with Experts of VJC Overseas.',
  keywords: 'Best Germany Study Visa Consultants in Hyderabad, Germany Student Visa, Germany Study Visa, Student Visa for Germany, Best Germany Student Visa Consultants in Hyderabad, Germany Visa Process for Students, How To Apply for Germany Student Visa, Germany Student Visa Requirements, Germany Study Visa Application, Documents for Germany Student Visa, Germany Student Visa 2025, Germany Student Visa Checklist, Study in Germany Visa Process, Germany Student Visa Processing Time, Germany Student Visa Eligibility, Germany Visa Process',
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
