import Image from 'next/image';

export default function ForexServices() {
  return (
    <div className="w-full  bg-white max-w-7xl mx-auto text-black" style={{ fontFamily: 'Times New Roman, serif' }}>
      
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
            Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted gateway to the vast and dynamic world of foreign exchange trading. 
            Whether you're an experienced trader navigating the complexities of global markets or a beginner taking your first steps into the forex world, 
            we are here to ensure your journey is smooth, informed, and successful.
          </p>
          <p className="mt-4">
            Our Forex services are designed with precision and integrity to deliver unmatched convenience, market insights, and execution speed. 
            We provide access to deep liquidity pools, competitive spreads, and real-time market updates to help you seize every opportunity in this fast-moving space. 
            Our seasoned analysts monitor market trends and geopolitical events to give you timely updates that inform your strategies.
          </p>
         
        </div>
      </div>

      {/* Why Choose Us */}
       <p className="mt-4">
            At <span className="text-orange-500">VJC Overseas</span>, we empower you with the tools, platforms, and education you need to trade confidently and effectively, 
            backed by dedicated support and transparent trading conditions. Join a community of smart traders who trust our expertise and infrastructure to grow their financial futures.
          </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose <span className="text-orange-500">VJC Overseas</span> for Forex Trading?</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>
          <strong>Competitive Exchange Rates:</strong> We offer some of the most favorable and transparent exchange rates in the market, helping you maximize your returns with minimal cost.
        </li>
        <li>
          <strong>Comprehensive Market Access:</strong> Trade across a wide range of currency pairs including major, minor, and exotic options, enabling you to diversify and expand your strategies.
        </li>
        <li>
          <strong>Advanced Trading Tools:</strong> Utilize sophisticated charting systems, technical indicators, and automated trading solutions to stay ahead in the fast-paced trading environment.
        </li>
        <li>
          <strong>Educational Resources:</strong> Gain a deeper understanding of the forex world through our curated learning modules, live webinars, trading guides, and expert commentary.
        </li>
        <li>
          <strong>24/7 Support:</strong> Our dedicated customer service team is available round-the-clock to answer queries, troubleshoot issues, and guide you through any challenges.
        </li>
      </ul>

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">What We Offer</h2>
      <ol className="list-decimal pl-6 space-y-3 text-lg">
        <li>
          <strong>Forex Trading Accounts:</strong> Choose from demo accounts for risk-free practice or live accounts to engage in real-time trading with full access to global markets.
        </li>
        <li>
          <strong>Market Analysis:</strong> Receive detailed daily reports, economic calendars, and in-depth technical and fundamental analysis curated by industry professionals.
        </li>
        <li>
          <strong>Currency Pairs:</strong> Engage in trading opportunities involving a broad spectrum of currency pairs tailored to every strategy and risk appetite.
        </li>
        <li>
          <strong>Automated Trading:</strong> Integrate expert advisors and trading bots to automate your strategies and eliminate emotional decision-making.
        </li>
        <li>
          <strong>Risk Management Tools:</strong> Protect your capital with essential risk controls such as stop-loss, take-profit levels, margin alerts, and hedging tools.
        </li>
        <li>
          <strong>Forex Hedging:</strong> Secure your trades against market volatility by implementing smart hedging techniques designed to minimize exposure and safeguard profits.
        </li>
      </ol>

      {/* CTA */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Get Started Today</h2>
      <p className="text-lg mb-6">
        Whether you’re looking to trade for profit, diversify your investment portfolio, or simply learn how forex works—<span className="text-orange-500">VJC Overseas</span> is your partner every step of the way.
        Open a trading account today, fund it securely, and start participating in the world's largest and most liquid financial market with confidence.
      </p>

      
    </div>
  );
}
