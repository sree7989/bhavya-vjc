import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => { 
  return (
    <> 
    <footer className="bg-gradient-to-r from-gray-900  to-gray-800 text-white py-12" style={{fontFamily:'Times new roman'}}>
    <div className="max-w-7xl mx-auto px-5 text-center md:text-left border-b border-gray-700 mb-10">
        {/* Grid for Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-2">
            {/* Navigation */}
            <div>
  <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">
    About Us
  </h3>
  <ul className="space-y-2 text-center ml-2 lg:text-left mb-6 md:mb-0 lg:mb-0">
    <li>
      <Link href="/services" className="hover-underline">Services</Link>
    </li>
    <li>
      <Link href="/" className="hover-underline">Our CEO Message</Link>
    </li>
    <li>
      <Link href="/" className="hover-underline">Our Network</Link>
    </li>
    <li>
      <Link href="/" className="hover-underline">Careers</Link>
    </li>
  </ul>
</div>

            {/* Services */}
            <div>
  <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">
    Our Blogs
  </h3>
  <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
    <li>
      <Link href="/migrate/canada" className="hover-underline">Canada Immigration</Link>
    </li>
    <li>
      <Link href="/migrate/australia" className="hover-underline">Australia Immigration</Link>
    </li>
    <li>
      <Link href="/migrate/united-states" className="hover-underline">USA Immigration</Link>
    </li>
    <li>
      <Link href="/migrate/germany" className="hover-underline">Germany Immigration</Link>
    </li>
    <li>
      <Link href="/migrate/germany/work-visa" className="hover-underline">Germany Jobs</Link>
    </li>
  </ul>
</div>


             
            <div>
    <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Settle your future in Abroad</h3>
    <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
        <li>
    <Link href="/migrate-canada-permanent-residency-visa" className="hover-underline">Settle in Canada</Link>
    </li>
    <li>
    <Link href="/migrate-australia-permanent-residency-visa" className="hover-underline">Settle in Australia</Link>
    </li>
     <li>
        <Link href="/germany-opportunity-card" className="hover-underline">Settle in Germany</Link>
        </li>
        <li>
        <Link href="/pr-visas/ukpr" className="hover-underline">Settle in UK</Link>
        </li>
        <li>
        <Link href="/pr-visas/usagreencard" className="hover-underline">Settle in USA</Link>
        </li>
        
    </ul>
</div>

{/* Services */}
<div>
                <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Other Services</h3>
                <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
                    <li>
                    <Link href="/assessment" className="hover-underline">Free Eligibility Check</Link>
                    </li>
                    <li>
                    <Link href="/" className="hover-underline">Free Counselling</Link>
                  </li>
                  <li>
                    <Link href="/assessment" className="hover-underline">Free Assessment Online</Link>
                    </li>
                    <li>
                    <Link href="/" className="hover-underline">Fast and Easy Process</Link>
                    </li>
                    <li>
                    <Link href="#" className="hover-underline">Professional Job Assistance</Link>
                    </li>
                    <li>
                    <Link href="/resume-marketing" className="hover-underline">High Quality Resume Marketing</Link>
                    </li>
                </ul>
            </div>

                
           <div>
  <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase text-center lg:text-left">
    Follow us
  </h3>

  {/* Social Media Icons */}
  {/* Social Media Icons */}
<div className="flex flex-col md:flex-row items-center justify-between w-full flex-wrap gap-4 md:gap-8">
  {/* Social Media Icons */}
  <div className="flex space-x-3 items-center">
    <Link href="https://www.facebook.com/VJCOVERSEAS/" className="group">
      <FaFacebook className="text-blue-500 group-hover:text-orange-500 text-xl" />
    </Link>
    <Link href="https://twitter.com/vjcoverseas" className="group">
      <FontAwesomeIcon
        icon={faXTwitter}
        className="text-white group-hover:text-orange-500 text-xl"
      />
    </Link>
   <Link
  href="https://www.instagram.com/vjc_overseas_bangalore/?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw%3D%3D"
  className="group"
>
  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition duration-300 group-hover:bg-orange-500">
    <FaInstagram className="text-white text-sm" />
  </div>
</Link>

    <Link href="https://www.linkedin.com/company/vjc-overseas/" className="group">
      <FaLinkedin className="text-blue-300 group-hover:text-orange-500 text-xl" />
    </Link>
    <Link href="https://www.youtube.com/@Vjcoverseas" className="group">
      <FaYoutube className="text-red-500 group-hover:text-orange-500 text-xl" />
    </Link>
  </div>

</div>
  {/* Contact Info */}
  <div className="flex flex-col items-center justify-center md:items-start mb-6 md:mb-0 mt-6 w-full md:w-auto ml-0 tablet:ml-20 md:ml-0 lg:ml-0">
    <p className="text-gray-200 font-medium">
      Email :{" "}
      <Link href="mailto:info@vjcoverseas.com" className="hover:text-saffron">
        info@vjcoverseas.com
      </Link>
    </p>
    <p className="mt-2 font-medium text-gray-200">
      Contact :{" "}
      <Link href="tel:+919160449000" className="hover:text-saffron">
        +91 9160449000
      </Link>
    </p>
  </div>

  {/* SEO-Optimized Circular Logos */}
{/* SEO-Optimized Circular Logos Without Links */}
<div className="flex items-center justify-center md:justify-start gap-4 mt-4">

  {/* British Council */}
 
            <Image
             src="/vjc-british-council.png"
             alt="British Council Certification Logo"
            title="British Council Certified - Study Abroad Partner"
              width={80}
              height={80}
              className="rounded-full shadow-lg border border-white transform hover:scale-110 transition-transform duration-300"
              loading="lazy"
              unoptimized
            />
         
 

  {/* ISO Certified */}
  <Image
    src="/vjc-iso-certifed.png"
    alt="ISO 9001:2015 Certification Logo"
    title="ISO Certified - Trusted Visa Consultants"
    width={80}
    height={80}
    loading="lazy"
    className="rounded-full shadow-lg border border-white transform hover:scale-110 transition-transform duration-300"
    unoptimized
  />

</div>

</div>
        </div>

       
    </div>

    <div className="container mx-auto px-6 md:px-12 ">
        {/* Address and Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
             {/* Hyderabad Address */}
             <div className="mb-8 md:mb-0 text-center md:w-1/3">
 <Link href="/hyderabad" passHref>
  <div className="cursor-pointer">
    <h3 className="text-lg font-bold uppercase mb-1 text-orange-500">
      VJC Overseas-HYDERABAD
    </h3>
   
  </div>
</Link>
            <p className='mt-2'>62/A, Ground Floor,</p>
            <p>Sundari Reddy Bhavan, Fresh Mart,</p>
            <p>Vengalrao Nagar, Sanjeeva Reddy Nagar,</p>
            <p>Hyderabad, Telangana, 500038</p>
            {/* Google Map */}
            <div className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.879492387034!2d78.43919859884804!3d17.44247831865735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917617299bc1%3A0xaeab178c8f988087!2sSundari%20Reddy%20Bhavan!5e0!3m2!1sen!2sin!4v1733222407168!5m2!1sen!2sin" 
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>

           {/* USA Address */}
           <div className="mb-8 md:mb-0 text-center md:w-1/3">
 <Link href="/usa/texas" passHref>
  <div className="cursor-pointer">
    <h3 className="text-lg font-bold uppercase mb-1 text-orange-500">
      VJC Overseas-USA
    </h3>
   
  </div>
</Link>
  <p className="mt-2">7200 Preston Rd, Plano,</p>
<p>TX 75024, USA</p>
<p className="mt-2 flex items-center justify-center space-x-2 hover:text-saffron">
    <FaWhatsapp size={25} />
    <Link href="tel:+13322012159" className="text-base">
    +1 660-528-2324
    </Link>
</p>

            {/* Google Map */}
            <div className="mt-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.4415885439596!2d-96.80493858487804!3d33.06426432985971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c195e7a517c81%3A0x76e1da09818e11a7!2s7200%20Preston%20Rd%2C%20Plano%2C%20TX%2075024%2C%20USA!5e0!3m2!1sen!2sin!4v1609591907834!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>

        {/* Bangalore Address */}
        <div className="mb-8 md:mb-0 text-center md:w-1/3">
   <Link href="/bangalore" passHref>
  <div className="cursor-pointer">
    <h3 className="text-lg font-bold uppercase mb-1 text-orange-500">
      VJC Overseas-Bangalore
    </h3>
   
  </div>
</Link>
            <p className='mt-2'>16 & 17, Ground Floor,</p>
            <p>Raheja Arcade,</p>
            <p>5th Block, Koramangala,</p>
            <p>Bangalore, India, 560095</p>
            {/* Google Map */}
            <div className="mt-4 tablet:mt-20 lg:mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.695142720451!2d77.6166214150411!3d12.935175190879746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c3ad0cc183%3A0x65c2d7b95c7a8e13!2sRaheja%20Arcade%2C%20Koramangala%205th%20Block%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1609591965873!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>
        </div>

         {/* Copyright Section */}
         <div className="border-t border-gray-700 pt-6 flex flex-col items-center space-y-4 mt-4">
            <p>&copy; 2025 VJC Overseas. All Rights Reserved.</p>
            
        </div>

       
        </div>
</footer>

    </>
  );
};

export default Footer;
