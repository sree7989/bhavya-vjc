import Script from 'next/script';

export const metadata = {
  title: 'Apply for Schengen Visa Process for Tourist Visit Business Visa Multiple Entry',
    description: 'Apply for Schengen Visa Process Documents Check List and also Get to Know the Requirements for Schengen Visit or Tourist Visa Process to Explore the World with Best Schengen Visa Immigration Consultants in Hyderabad also Enjoy Trip with Affordable Prices for Hotel itinerary, Flight Booking and Best Packages With Best Visa Immigration Consultants in Hyderabad and Bangalore',
    keywords: 'Schengen Visa Process, Schengen Visit Visa, Schengen Tourist Visa Process, Schengen Business Visa Process, Schengen Visa Documents Check List, Schengen Visa Immigration Consultants, Hotel itinerary, Flight Booking, Best Visa Immigration Consultants in Hyderabad, Best Visa Immigration Consultants, Best Visa Consultants in Hyderabad, Schengen Visa, Multiple Entry',
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
