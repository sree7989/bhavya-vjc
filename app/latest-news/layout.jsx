import Script from 'next/script';

export const metadata = {
  title: 'Latest Visa & Immigration News for Indians | Global Updates by VJC Overseas',
  description:
    "Stay updated with the latest visa, work permit, and immigration news impacting Indian aspirants. Get expert insights on policy changes from Canada, Australia, UAE, USA, Germany, and more—only at VJC Overseas.",
  keywords:
    'visa updates for Indians, latest immigration news India, Canada PR news, Australia visa changes, UAE golden visa update, Germany work visa for IT, UK skilled visa news, international student visa news, VJC Overseas visa updates, Indian migration news, study abroad updates 2025, work permit news India, global visa policy 2025',
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
