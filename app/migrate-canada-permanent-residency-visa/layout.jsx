import Script from 'next/script';

export const metadata = {
  title: 'Canada Permanent Residency Visa| Canada PR Visa Process Requirements Free Eligibility ',
    description: 'Apply for Canada Permanent Residence Visa and Check your Free Eligibility for Canada PR Visa Process and Requirements or Apply Immigration for Canada Express Entry and PNP Program for High Pay Skilled Workers in Canada also know the Benefits of Canada PR Visa Process Online and How to Apply for Canada PR Visa Online with Best Canada Permanent Residency - PR Visa Immigration Consultants in Hyderabad and Bangalore for fast Process ',
    keywords: 'Canada Permanent Residency Visa, Canada PR Visa, Canada PR Visa Process, How to Apply for Canada PR Visa Online, Apply Canada PR Visa Online, Check Canada PR Visa Eligibility, Free Canada PR Visa Eligibility, Migrate To Canada, Canada Permanent Resident Visa, Canada Express Entry Program, Canada Skilled Worker Visa, Apply for Canada Skilled Worker Visa Online, Express Entry PR Visa Process, Canada PNP Program Online, Documents for Canada PR Visa, Permanent Residence Visa for Canada, PR Visa, Permanent Residence Visa for Canada',
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
