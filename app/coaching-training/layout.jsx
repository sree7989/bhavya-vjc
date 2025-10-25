import Script from 'next/script';

export const metadata = {
  title: 'Best Training and Coaching Consultants for Students in IELTS GMAT GRE DUOLINGO PTE TOFEL CANADA USA UK Germany',
  description: 'Get Best IELTS GMAT GRE DUOLINGO PTE TOFEL Training and Coaching in Online or Offline for Study or Settle in CANADA USA UK Germany with PR Permanent Residence Visa Process with Best Visa Immigration Educational Consultants in Hyderabad and Bangalore which provides Best Training and Coaching to International Students with good scores for Visa Processing which helps to Settle life in Abroad.',
  keywords: 'IELTS coaching for Canada, GRE Classes for USA, GMAT Training Consultants, Best PTE Coaching UK, TOEFL Classes for Germany, Duolingo Preparation, Study Abroad Coaching, English Test Preparation for Students, Overseas Education Consultants, Student Visa Training Support, Test Prep for Study in Canada USA UK Germany, best coaching for study abroad, Permanent Residence Visa Process PR Visa Process, Best Visa Immigration Educational Consultants',
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
