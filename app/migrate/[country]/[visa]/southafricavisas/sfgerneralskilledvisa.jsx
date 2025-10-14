import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Newzebusiness = () => {
    return (
        <div className="w-full flex justify-start px-1 mb-20 bg-white">
            <div className="w-full bg-white text-black px-1 md:px-16">
                <h2></h2>
                <h1 className="text-2xl font-bold mb-6 text-center text-black">
                    Welcome to <span className="text-orange-500">VJC Overseas</span>: Your Trusted Partner for South Africa Critical Skills Visa
                </h1>
                <p className="text-lxl leading-relaxed mb-6 mt-10">
                    Are you a skilled professional looking to build a successful career in South Africa? With the demand for highly qualified workers in various sectors, the South Africa Critical Skills Visa offers an excellent opportunity for professionals from across the globe, especially those from India, to live and work in this dynamic country.
                </p>
                <p className="text-lxl leading-relaxed mb-6">
                    Whether you're seeking new career paths, entrepreneurial opportunities, or a peaceful retirement, South Africa welcomes skilled professionals, investors, families, and students from around the world. Partnering with the <Link href="https://www.vjcoverseas.com/" className="text-orange-500" style={{ textTransform: "capitalize", fontWeight: "normal", textDecoration: "none" }}>Best Visa Immigration Consultants</Link> ensures that every stage of your migration is handled with expert precision and up-to-date guidance.
                </p>
                <div className="flex justify-center items-center w-full">
                    <Image
                        src="/migrate/migratesub/south-skilled.png"
                        alt="Australia Business Visa"
                        width={500}
                        height={300}
                        priority
                        unoptimized
                        className="w-full max-w-xs mt-5 sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg"
                    />
                </div>
                <h2 className="text-1xl font-bold mt-8 mb-4 text-black ">Why Choose VJC Overseas for Your South Africa Critical Skills Visa?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-black">Expert Consultation Across India:</strong> Our team provides tailored services across India, ensuring you receive the highest level of guidance.</li>
                    <li><strong className="text-black">In-Depth Knowledge of Critical Skills Sectors:</strong> We specialize in engineering, healthcare, IT, teaching, finance, and more.</li>
                    <li><strong className="text-black">Comprehensive Visa Application Assistance:</strong> We streamline the process, ensuring all documents meet eligibility criteria.</li>
                    <li><strong className="text-black">Professional Networking Support:</strong> We help you connect with potential employers in South Africa.</li>
                    <li><strong className="text-black">Local Expertise in Hyderabad and Bengaluru:</strong> Our experienced consultants provide personalized services.</li>
                </ul>

                <h2 className="text-1xl  mt-8 mb-4 text-black font-extrabold">Pay Scale and Career Prospects in South Africa</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-black">Engineers:</strong> ₹6,00,000 to ₹12,00,000 per annum</li>
                    <li><strong className="text-black">Healthcare Professionals:</strong> ₹5,00,000 to ₹15,00,000 per annum</li>
                    <li><strong className="text-black">IT Professionals:</strong> ₹8,00,000 to ₹15,00,000 per annum</li>
                    <li><strong className="text-black">Accountants/Financial Managers:</strong> ₹6,00,000 to ₹14,00,000 per annum</li>
                    <li><strong className="text-black">Teachers:</strong> ₹3,50,000 to ₹7,00,000 per annum</li>
                </ul>
                <p className="text-lxl leading-relaxed mb-6">
                    If you’re planning to <a href="https://www.vjcoverseas.com/migrate/south-africa" className="text-orange-500">Migrate to South Africa</a>, these sectors provide exceptional growth potential and a high quality of life.
                </p>

                <h2 className="text-1xl  mt-8 mb-4 text-black font-extrabold">Living Expenses in South Africa</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-black">Rent:</strong> ₹25,000 to ₹50,000 for a 1-bedroom apartment</li>
                    <li><strong className="text-black">Utilities:</strong> ₹5,000 to ₹8,000 per month</li>
                    <li><strong className="text-black">Food & Groceries:</strong> ₹15,000 to ₹25,000 per month</li>
                    <li><strong className="text-black">Transport:</strong> ₹10,000 to ₹15,000 per month</li>
                    <li><strong className="text-black">Health Insurance:</strong> ₹5,000 to ₹10,000 per month</li>
                </ul>
                <p className="text-lxl leading-relaxed mb-6">
                    For students, the <a href="https://www.vjcoverseas.com/study-abroad/southafrica" className="text-orange-500">Study in South Africa</a> pathway also provides affordable living costs while accessing world-class education.
                </p>

                <h2 className="text-1xl  mt-8 mb-4 text-black font-extrabold">Why Trust VJC Overseas?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-black">Proven Track Record:</strong> We have successfully helped hundreds obtain their South Africa visas.</li>
                    <li><strong className="text-black">Client-Centered Approach:</strong> We provide dedicated support from consultation to approval.</li>
                    <li><strong className="text-black">Transparent & Ethical Services:</strong> No hidden fees or surprise costs.</li>
                </ul>
                <p className="text-lxl leading-relaxed mb-6">
                    Whether you’re pursuing a Critical Skills Visa or a <a href="https://www.vjcoverseas.com/migrate/south-africa/general-work-visa" className="text-orange-500">South Africa Work Visa</a>, our team ensures your application meets every requirement for a smooth approval process.
                </p>

                <h2 className="text-2xl  mt-8 mb-4 text-black font-extrabold">Start Your Journey Today with <strong className="text-black">VJC Overseas</strong></h2>
                <p className="text-1xl leading-relaxed mb-6">
                    South Africa is calling for talented professionals, and <a href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</a> is here to help you take the first step toward a rewarding career. Contact us today for expert guidance on the South Africa Critical Skills Visa and make your dream of living and working in South Africa a reality.
                </p>
            </div>
        </div>
    )
}

export default Newzebusiness