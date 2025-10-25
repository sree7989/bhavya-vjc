import Image from 'next/image';
import Link from 'next/link';

export default function ForexServices() {
  return (
    <div
      className="w-full p-8 bg-white max-w-7xl mx-auto text-black"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Forex Services – <span className="text-orange-500">VJC Overseas</span>
      </h1>

      {/* Image + Intro side by side */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <div className="md:w-1/2">
          <Image
            src="/forex.webp"
            alt="Forex Trading"
            width={200}
            height={50}
            className=" shadow-md w-full h-auto"
            unoptimized
          />
        </div>
        <div className="md:w-3/4 text-lg">
          <p>
            Welcome to <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">VJC Overseas</Link>, your trusted partner in navigating the dynamic world of <Link href="https://www.vjcoverseas.com/services/forex-services" className="text-orange-500 font-bold">Forex Services</Link>. 
            Whether you're a seasoned trader or a newcomer looking to explore the forex market, our comprehensive services and expert guidance 
            ensure you trade with confidence and clarity. 
            We provide personalized support and transparent trading conditions to help you make informed decisions. 
            With access to top-tier liquidity providers, you can enjoy seamless and fast trade execution. 
            Our expert team continuously monitors global markets to deliver timely insights and forecasts. 
            Join a growing community of successful traders who trust <span className="text-orange-500">VJC Overseas</span> for their forex journey.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose <span className="text-orange-500">VJC Overseas</span> for Forex Trading?</h2>
      <ul className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li><strong>Competitive Exchange Rates:</strong> Best value for your trades.</li>
        <li><strong>Comprehensive Market Access:</strong> Trade major, minor, and exotic currency pairs.</li>
        <li>
          <strong>Advanced Trading Tools:</strong> Real-time charts, analysis tools, and automation. 
          Many clients also explore our <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500 font-bold">Visit Visa Consultants</Link> for smooth international travel planning.
        </li>
        <li>
          <strong>Educational Resources:</strong> Tutorials, webinars, and market analysis. 
          Students preparing for global education often connect this with our <Link href="https://www.vjcoverseas.com/study-abroad" className="text-orange-500 font-bold">Study Abroad Consultants</Link>.
        </li>
        <li>
          <strong>24/7 Support:</strong> Assistance whenever you need it, backed by our reputation as one of the <Link href="https://www.vjcoverseas.com" className="text-orange-500 font-bold">Best Visa Immigration Consultants</Link>.
        </li>
      </ul>

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">What We Offer</h2>
      <ol className="list-decimal pl-5 md:pl-6 mb-4 text-lg text-left space-y-2">
        <li><strong>Forex Trading Accounts:</strong> Open demo or live trading accounts.</li>
        <li><strong>Market Analysis:</strong> Get daily reports and market insights.</li>
        <li><strong>Currency Pairs:</strong> Trade a variety of global currencies.</li>
        <li><strong>Automated Trading:</strong> Implement strategies with expert advisors.</li>
        <li><strong>Risk Management Tools:</strong> Manage exposure with stop-loss and take-profit levels.</li>
        <li>
          <strong>Forex Hedging:</strong> Protect trades from market volatility. 
          For travelers, we also provide curated <Link href="https://www.vjcoverseas.com/tours-ticketing" className="text-orange-500 font-bold">Travel and Tourism Packages</Link>.
        </li>
      </ol>

      {/* CTA */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Get Started Today</h2>
      <p className="text-lg mb-6">
        Open an account, deposit funds, and start trading with <span className="text-orange-500">VJC Overseas</span> today!
      </p>
    </div>
  );
}
