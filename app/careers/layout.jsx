// app/layout.jsx
import Script from 'next/script';
import Head from 'next/head';
import { AuthProvider } from './components/AuthContext';

export const metadata = {
  title: "Careers at VJC Overseas | We’re Hiring Now!",
  description:
    "Join the growing team at VJC Overseas. Explore job openings for student counselors, visa consultants, and other exciting roles in overseas education. Apply today to work with one of the top study abroad consultancies.",
  keywords:
    "VJC Overseas careers, student counselor jobs, visa consultant openings, overseas education jobs, hiring now VJC, apply job VJC Overseas, career growth abroad, overseas career 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Tag (gtag.js) */}
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

      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
