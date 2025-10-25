import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Newzebusiness = () => {
    // Helper component for keywords with consistent style: slightly bold and capitalized first letter
    const Keyword = ({ children }) => (
        <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{children}</span>
    )

    return (
        <div
            className="m-2 p-2"
            style={{
                fontFamily: "Times New Roman",
                backgroundColor: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{ marginBottom: '5%' }}>
                <h3 className="text-3xl mt-4 font-semibold text-black text-center">
                    <Keyword>South Africa General Work Visa</Keyword> - <span style={{ color: 'rgb(220, 4, 4)' }}>
                        <Keyword>VJC Overseas</Keyword>
                    </span>
                </h3>
            </div>

            <h3 className="text-black text-center m-2 font-bold text-lg mb-6">
                Your Gateway to New Job Opportunities
            </h3>

            <p className="mb-6">
                Are you looking to work in South Africa? The <Keyword>South Africa General Work Visa</Keyword> is the perfect pathway for skilled workers from abroad to explore exciting career opportunities in one of Africa's most dynamic economies. Whether you aim to build an international career or seek long-term settlement opportunities, this visa can be your stepping stone to success.
            </p>

            <p className="mb-6">
                At <Keyword>VJC Overseas</Keyword>, we not only specialize in General Work Visa applications but are also recognized among the{" "}
                <Link href="https://www.vjcoverseas.com/" className="text-orange-500">
                    <Keyword>Best Visa Immigration Consultants</Keyword>
                </Link>{" "}
                for South Africa and other global destinations. Our team ensures that every applicant receives personalized attention, helping them navigate the complex visa process with ease.
            </p>

            <h3 className="text-black m-2 font-bold text-lg mb-6">What is the <Keyword>South Africa General Work Visa</Keyword>?</h3>
            <p className="mb-6">
                The <Keyword>South Africa General Work Visa</Keyword> allows foreign nationals to work in the country for up to five years. It is best suited for professionals with specialized skills that are in high demand by South African employers. Many applicants also explore alternative routes such as the{" "}
                <Link href="https://www.vjcoverseas.com/migrate/south-africa/critical-skills-visa" className="text-orange-500">
                    <Keyword>South Africa Critical Skills Visa</Keyword>
                </Link>
                , depending on their profession and qualifications.
            </p>

            <div className="flex justify-center items-center w-full">
                <Image
                    src="/migrate/migratesub/south-work.png"
                    alt="South Africa General Work Visa"
                    width={500}
                    height={300}
                    priority
                    unoptimized
                    className="w-full max-w-xs mt-5 sm:max-w-sm md:max-w-md lg:w-full lg:h-60 object-contain shadow-lg rounded-lg"
                />
            </div>

            <h3 className="text-black m-2 font-bold text-lg mb-6">Key Benefits of the <Keyword>South Africa General Work Visa</Keyword></h3>
            <ul className="list-disc mb-6 ml-8">
                <li><b>Access to High-Demand Job Opportunities:</b> Work in sectors like IT, healthcare, engineering, education, and finance.</li>
                <li><b>Competitive Salary Packages:</b> Salaries range from ZAR 150,000 to ZAR 800,000 per year, depending on industry and experience.</li>
                <li><b>Long-Term Work Opportunities:</b> The visa is valid for up to 5 years and can be renewed.</li>
                <li><b>Family Benefits:</b> Your spouse and children may also qualify for dependent visas.</li>
                <li><b>Work with Top South African Companies:</b> Gain valuable international experience with leading firms.</li>
            </ul>

            <h3 className="text-black m-2 font-bold text-lg mb-6">Job Opportunities in South Africa</h3>
            <ul className="list-disc mb-6 ml-8">
                <li><b>IT Professionals:</b> ZAR 300,000 – ZAR 700,000</li>
                <li><b>Healthcare Workers:</b> ZAR 250,000 – ZAR 600,000</li>
                <li><b>Engineers:</b> ZAR 350,000 – ZAR 800,000</li>
                <li><b>Teachers:</b> ZAR 200,000 – ZAR 500,000</li>
                <li><b>Finance & Business Professionals:</b> ZAR 300,000 – ZAR 700,000</li>
            </ul>

            <p className="mb-6">
                For those seeking academic opportunities, many professionals first{" "}
                <Link href="https://www.vjcoverseas.com/study-abroad/southafrica" className="text-orange-500">
                    <Keyword>Study in South Africa</Keyword>
                </Link>{" "}
                to gain a competitive edge before entering the job market.
            </p>

            <h3 className="text-black m-2 font-bold text-lg mb-6">How <Keyword>VJC Overseas</Keyword> Can Help</h3>
            <ul className="list-disc mb-6 ml-8">
                <li><b>Expert Guidance:</b> Detailed visa assistance and legal support tailored to your profile.</li>
                <li><b>End-to-End Support:</b> From documentation to submission, we manage every stage of the process.</li>
                <li><b>Comprehensive Career Planning:</b> We connect you with job openings aligned with your expertise.</li>
                <li><b>Fast-Track Processing:</b> Minimize delays with our proven application strategies.</li>
            </ul>

            <p className="mb-6">
                If your long-term goal is to{" "}
                <Link href="https://www.vjcoverseas.com/migrate/south-africa/" className="text-orange-500">
                    <Keyword>Migrate to South Africa</Keyword>
                </Link>
                , the <Keyword>General Work Visa</Keyword> can be a crucial first step toward permanent residency and career advancement.
            </p>

            <h3 className="text-black m-2 font-bold text-lg mb-6">Start Your Career in South Africa Today</h3>
            <p className="mb-6">
                South Africa offers a strong economy, promising career prospects, and a high quality of life.{" "}
                <Link href="https://www.vjcoverseas.com/" className="text-orange-500">
                    <Keyword>VJC Overseas</Keyword>
                </Link>{" "}
                is committed to turning your professional dreams into reality with unmatched guidance and transparent services.
            </p>
            <p className="mb-6"><b>Contact us today</b> and take the first step toward working, living, and thriving in South Africa!</p>

            <hr style={{ borderColor: 'black' }} className="mb-6" />
        </div>
    )
}

export default Newzebusiness