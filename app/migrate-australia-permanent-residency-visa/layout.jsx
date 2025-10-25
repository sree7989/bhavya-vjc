import Script from 'next/script';

export const metadata = {
  title: 'Australia Permanent Residency Visa| Australia PR Visa Process Requirements Free Eligibility ',
    description: 'Apply for Australia Permanent Residence Visa and Check your Free Eligibility for Australia PR Visa Process and Requirements or Apply Immigration for Australia Express Entry and PNP Program for High Pay Skilled Workers in Australia also know the Benefits of Australia PR Visa Process Online and How to Apply for Australia PR Visa Online with Best Australia Permanent Residency - PR Visa Immigration Consultants in Hyderabad and Bangalore for fast Process ',
    keywords: 'Australia Permanent Residency Visa, Australia PR Visa, Australia PR Visa Process, How to Apply for Australia PR Visa Online, Apply Australia PR Visa Online, Check Australia PR Visa Eligibility, Free Australia PR Visa Eligibility, Migrate To Australia, Australia Permanent Resident Visa, Australia Express Entry Program, Australia Skilled Worker Visa, Apply for Australia Skilled Worker Visa Online, Express Entry PR Visa Process, Australia PNP Program Online, Documents for Australia PR Visa, Permanent Residence Visa for Australia, PR Visa, Permanent Residence Visa for Australia',
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
