import Script from 'next/script';


  export const metadata = {
  title: 'Book Tours and Packages Ticketing for Europe Trips with Tourist Visa Process Singapore Dubai Malaysia USA Canada UK Thailand Bali',
  description: 'Book Cheap & Best Customized Holiday Tours Packages and Ticketing for World Europe Trips with Tourist Visa Processing for Canada USA Australia UK Italy Germany Dubai Malaysia and more Get Best Deals on Flights and Vacations with Family or Couple or with Friends for Domestic and International Tour Packages Book Online with Best Visa immigration Consultants in Hyderabad and Bangalore',
  keywords: 'Tours and Packages Ticketing, Europe Trips, Tourist Visa Process, Singapore Tourist Packages, Dubai Tourist Visa Packages, Malaysia Tourist Visa Packages, Canada Tourist Visa Packages, International Tour Packages, Domestic Tour Packages, Flights and Vacations, Holiday Tours Packages and Ticketing, Best Visa immigration Consultants in Hyderabad, Best Visa immigration Consultants, Visa immigration Consultants',
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
