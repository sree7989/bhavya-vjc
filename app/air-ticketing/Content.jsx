import Image from 'next/image';

export default function AirTicketing() {
  return (
    <div className="max-w-6xl bg-white mx-auto text-black text-base space-y-6" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">
          Air Ticketing Services – <span className="text-orange-500">VJC Overseas</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image 
          src="/airticketing.jpg" 
          alt="Air Ticketing" 
          width={200} 
          height={250} 
          unoptimized
        />
        <p className="text-lg">
          Welcome to <span className="text-orange-500">VJC Overseas</span>, your reliable gateway to the skies. Whether you’re planning a vacation, pursuing academic dreams, visiting family, or attending business meetings abroad, our air ticketing services are tailored to make your travel experience smooth, budget-friendly, and professionally managed from start to finish.
        </p>
      </div>

      <h2 className="text-xl font-bold text-center">Why Choose <span className="text-orange-500">VJC Overseas</span> for Air Ticketing?</h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Competitive Airfares:</strong> Through strong partnerships with global airlines and aggregators, we provide exceptional deals across all travel classes—saving you money without compromising comfort.</li>
        <li><strong>Comprehensive Flight Network:</strong> Access flight options to countless domestic and international destinations, ensuring flexibility and convenience for every traveler.</li>
        <li><strong>Tailored Travel Itineraries:</strong> Whether you want the fastest route, lowest fare, or best connections, our team crafts your itinerary with precision and personalization.</li>
        <li><strong>Transparent and Simple Booking:</strong> We believe in clarity—our booking process is smooth, guided, and free from hidden costs or confusion.</li>
        <li><strong>24/7 Support Team:</strong> Our expert support staff are just a call or message away, ready to assist with booking changes, flight issues, or queries at any time of the day or night.</li>
      </ul>

      <h2 className="text-xl font-bold text-center">Our Air Ticketing Services Include:</h2>
      <ol className="list-decimal pl-6 space-y-3 text-lg">
        <li><strong>Domestic Flights:</strong> Fly across India with ease through curated schedules and multiple airline options that match your timing and budget.</li>
        <li><strong>International Flights:</strong> Book affordable flights to major global destinations such as the USA, UK, Canada, Australia, Europe, and beyond.</li>
        <li><strong>Round-Trip & One-Way Tickets:</strong> Choose what suits your travel need—whether it’s a short getaway or a permanent relocation.</li>
        <li><strong>Group Travel Bookings:</strong> Planning a trip with family, friends, or colleagues? We arrange seamless group travel with negotiated fares and coordinated planning.</li>
        <li><strong>Business & First-Class Reservations:</strong> For those who value comfort and premium service, we offer luxurious travel options at exclusive prices.</li>
        <li><strong>Student Airfare & Offers:</strong> Special student-friendly fares including extra baggage, flexible rebooking, and university travel coordination.</li>
        <li><strong>Multi-City & Stopover Options:</strong> Visit multiple destinations under one booking plan—ideal for explorers and professionals with dynamic travel routes.</li>
      </ol>

      <h2 className="text-xl font-bold text-center">Easy Online Booking Process</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image 
          src="/airplaneseating.jpg" 
          alt="Online Booking" 
          width={300} 
          height={250} 
          unoptimized
        />
        <p className="text-lg">
          Booking your ticket with <span className="text-orange-500">VJC Overseas</span> is effortless. Simply share your travel details—destination, dates, and preferences—and our experts will provide you with the best available options. Once you approve, we finalize and issue your ticket with full documentation and updates.
        </p>
      </div>

      <h2 className="text-xl font-bold text-center">Stay Updated with Latest Travel Deals</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image 
          src="/followus.avif" 
          alt="Travel Deals" 
          width={100} 
          height={250} 
          unoptimized
        />
        <p className="text-lg">
          Join our mailing list and follow our official social media pages to get early access to limited-time airfares, exclusive discounts, festive offers, and destination spotlights that could help you save big on your next journey.
        </p>
      </div>

      <h2 className="text-xl font-bold text-center">Travel Made Simple with <span className="text-orange-500">VJC Overseas</span></h2>
      <p className="text-lg text-center">
        At <span className="text-orange-500">VJC Overseas</span>, we go beyond booking tickets. We become a part of your travel story. From guiding you through visa requirements to ensuring a smooth flight boarding experience, our goal is to make every trip meaningful, efficient, and enjoyable.
      </p>
    </div>
  );
}
