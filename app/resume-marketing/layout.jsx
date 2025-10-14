import Script from 'next/script';

export const metadata = {
  title: 'Resume Marketing Services for IT Professionals Canada USA H1b Germany Australia Singapore Dubai',
  description: 'Get Resume Marketing Services for IT Professionals for High Paying Jobs in Canada USA Germany Australia Singapore Dubai grab the Resume Marketing Services or International Job Search Marketing with Best Visa Immigration Consultants in Hyderabad and Bangalore set your global IT Career by Marketing with Experts with Job Targeting with Suitable Resumes and Cover Letters.',
  keywords: 'Resume Marketing for IT Professionals, Resume Marketing Services, IT Job Resume Service Canada, H1B resume submission USA, CV marketing Germany, resume promotion Australia, IT Job Search Singapore, Dubai Resume Marketing, International CV Preparation, High Paying Jobs, Job Search Marketing, IT Tech Job Abroad, Immigration Resume Service, IT Profile Branding Overseas, Visa Consultants Resume, Resume for Global Jobs, Best Visa Immigration Consultants in Hyderabad, Best Visa Immigration Consultants in Bangalore, Cover Letters',
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
