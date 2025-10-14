import Script from 'next/script';

export const metadata = {
  title: 'Germany Opportunity Card Visa for IT Professional Skilled Workers Chancenkarte Visa ',
  description: 'Germany Opportunity Card Visa for IT Professionals also for Skilled Workers to Settle in Germany and Get Work Permit Visa for Germany with High Demand IT Jobs Apply Online Germany Chancenkarte Visa and Know the Documents Requirements for Opportunity Card for Germany Visa Online Check Free Eligibility and Free Assessment for Germany Opportunity Card with Points Calculator then Settle your future in Germany ',
  keywords: 'Germany Opportunity Card Visa, Opportunity Card Visa, Germany Opportunity Card, Opportunity Card Visa for Germany, Chancenkarte Visa, Germany Chancenkarte Visa, IT Professionals, IT Professionals for Germany, Check Free Eligibility, Germany Check Free Eligibility, Germany Free Assessment, Free Assessment, Points Calculator, Germany Points Calculator, Documents Requirements, Germany Documents Requirements',
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
