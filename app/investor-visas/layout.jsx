import Script from 'next/script';

export const metadata = {
  title: 'Investor Visa Process for EB5 USA Canada Australia Germany UAE Dubai Portugal Austria',
    description: 'Apply for Investor Visa for EB5 USA Visa or make your Investor Visa Process for Canada with easy Australia Investor Visa Process also get the Documents Check list for Germany Investor Visa and UAE or Dubai Investor Visa also its easy to Apply for Portugal Investor Visa Online Apply with Best Investor Visa Immigration Consultants in Hyderabad to make Success In Investors Visa Process also Settle Future in Abroad',
    keywords: 'Investor Visa Process, EB5 Visa Process, USA Investor Visa Process, Canada Investor Visa Process, Australia Investor Visa Process, Germany Investor Visa Process, UAE Investor Visa Process, Dubai Investor Visa Process, UAE Golden Visa, Portugal Investor Visa Process, Austria Investor Visa Process, Investor Visa Documents Check List, Investor Visa Process Requirements, Best Investor Visa Immigration Consultants. Best Visa Immigration Consultants, Best Investor Visa Immigration Consultants in Hyderabad and Bangalore',
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
