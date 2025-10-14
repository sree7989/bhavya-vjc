import Script from 'next/script';
import Head from 'next/head';

// Optional: Export metadata separately if you're using it elsewhere
export const metadata = {
  title: "Apply for Job Seeker Visa Germany UAE Singapore Austria Portugal Sweden Norway 2025",
  description:
    "Apply for Job Seeker Visa for Germany UAE Singapore Austria Portugal Sweden Norway in 2025 to get Best Opportunity for your life also to Work and Settle in Future for Permanent Residence Visa or Blue Card for Germany so Process with Best Visa Immigration Consultants for Job Seeker Visa Process for Skilled Workers with IT Job Offer in High Demand Sectors also Check Free Eligibility for your profile and Apply Online for Job Seeker Visa",
  keywords:
    "Job Seeker Visa Germany, Job Seeker Visa, Job Seeker Visa UAE, Job Seeker Visa Singapore, Job Seeker Visa Austria, Job Seeker Visa Portugal, Job Seeker Visa Sweden, Job Seeker Visa Norway, Job Seeker Visa 2025, Apply for Job Seeker Visa, Online Job Seeker Visa, Eligibility For Job Seeker Visa, Skilled Workers Job Seekers Visa, IT job Seeker Visa",
};

export default function ContactLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>

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
