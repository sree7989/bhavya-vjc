'use client';

import './global.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: 'Invest in your dream Country',
    slug: 'investor-visas',
    description: 'A complete checklist for Indian students planning to study in Canada',
    image: '/invest-in-dream-country-2025.jpg',
    category: 'Study Tips',
  },
  {
    id: 2,
    title: 'Germany Opportunity Card - Everything You Need to Know in 2025',
    slug: 'germany-opportunity-card-2025',
    description: 'An overview of the new work visa for tech professionals migrating to Germany',
    image: '/germany.jpg',
    category: 'Visa Guide',
  },
  {
    id: 3,
    title: 'Work Permit process',
    slug: 'work-permit-process',
    description: 'Find the balance between academics and income.',
    image: '/WorkingHoliday417Visa.jpg',
    category: 'Work Abroad',
  },
  {
    id: 4,
    title: 'Study Visa Process You Must Know',
    slug: 'student-visa-process',
    description: 'Unlock your education journey with scholarships.',
    image: '/studyabroad.png',
    category: 'Study Tips',
  },
  {
    id: 5,
    title: 'Countries Offering Tourist Visas',
    slug: 'countries-tourist-visas',
    description: 'Top destinations with easy tourist visa options.',
    image: '/balgeriatour.jpg',
    category: 'Visa Guide',
  },
 
 
  {
    id: 7,
    title: 'Services What We Offer',
    slug: 'services-what-we-offer',
    description: 'Ace your embassy interviews with these expert suggestions.',
    image: '/SkilledNominatedVisaSubclass190.webp',
    category: 'Visa Guide',
  },
   {
    id: 6,
    title: 'Migartion To Dream Country',
    slug: 'search-dream-country',
    description: 'Plan your journey to study, work, or migrate abroad.',
    image: '/migratepageimg.avif',
    category: 'Migrate',
  },
  {
  id: 8,
  title: 'Coaching & Test Prep Services We Offer',
  slug: 'coaching-test-prep-services',
  description: 'Ace your embassy interviews and entrance exams with expert-led coaching and personalized training.',
  image: '/coaching-for-study-abraod.jpg', // Replace with a relevant coaching image
  category: 'Coaching & Support',
},
];

export default function BlogCards({ search = '', category = 'All' }) {
  const [showAll, setShowAll] = useState(false);

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const germanyCard =
    filteredBlogs.find(b =>
      b.title.toLowerCase().includes('germany opportunity card')
    ) || blogs[1];

  const otherBlogs = filteredBlogs.filter(blog => blog.id !== germanyCard.id);
  const visibleBlogs = showAll ? otherBlogs : otherBlogs.slice(0, 5);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {visibleBlogs.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts found.</p>
          ) : (
            <>
              {/* Hero Blog */}
              {visibleBlogs[0] && (
                <Link href={`/blog/${visibleBlogs[0].slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative h-96 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={visibleBlogs[0].image}
                      alt={visibleBlogs[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 z-10 text-white">
                      <h2 className="text-2xl font-bold group-hover:text-orange-400 transition">
                        {visibleBlogs[0].title}
                      </h2>
                      <p className="text-sm mt-1">{visibleBlogs[0].description}</p>
                    </div>
                  </motion.div>
                </Link>
              )}

              {/* Two Small Blogs */}
              <div className="grid sm:grid-cols-2 gap-6">
                {visibleBlogs.slice(1, 3).map(blog => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl overflow-hidden border border-gray-100 group"
                    >
                      <div className="relative h-48">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-orange-500 text-xs font-semibold uppercase">{blog.category}</span>
                        <h3 className="mt-1 font-semibold text-md text-gray-800 group-hover:text-orange-600">
                          {blog.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Other Blogs */}
              <div className="grid sm:grid-cols-2 gap-6">
                {visibleBlogs.slice(3).map(blog => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl overflow-hidden border border-gray-100 group"
                    >
                      <div className="relative h-48">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-orange-500 text-xs font-semibold uppercase">{blog.category}</span>
                        <h3 className="mt-1 font-semibold text-md text-gray-800 group-hover:text-orange-600">
                          {blog.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Toggle Button */}
              {otherBlogs.length > 5 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAll(prev => !prev)}
                    className="inline-block px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-blue-400 transition"
                  >
                    {showAll ? 'Show Less' : 'Know More'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-10">
          {/* Germany Card */}
          <div>
            <Link href={`/blog/${germanyCard.slug}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden border border-gray-100 group"
              >
                <div className="relative h-48">
                  <Image
                    src={germanyCard.image}
                    alt={germanyCard.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="text-orange-500 text-xs font-semibold uppercase">{germanyCard.category}</span>
                  <h3 className="mt-1 font-semibold text-md text-gray-800 group-hover:text-orange-600">
                    {germanyCard.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Recent Posts */}
          <div
            className="border rounded-lg p-4 relative text-white"
            style={{
              backgroundImage: "url('/WorkingHoliday417Visa.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 rounded-lg pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold border-b pb-2">Recent Posts</h3>
              <ul className="space-y-3 text-sm">
                {blogs.slice(0, 3).map((blog, index) => (
                  <li key={blog.id} className="relative">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className={`hover:text-orange-300 font-medium ${index === 0 ? 'text-orange-400 animate-pulse' : ''}`}
                    >
                      {blog.title}
                    </Link>
                    {index === 0 && (
                      <span className="absolute top-0 right-0 mt-1 mr-2 h-2 w-2 rounded-full bg-orange-400 animate-ping"></span>
                    )}
                    <div className="text-xs text-orange-300">{blog.category}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* YouTube Embed */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
              title="VJC YouTube"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-48"
            />
          </div>

          {/* Follow Us */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold border-b pb-2">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" className="flex items-center space-x-2 hover:text-orange-600"><FaFacebookF className="text-blue-500" /><span>Facebook</span></a></li>
              <li><a href="https://twitter.com/vjcoverseas" target="_blank" className="flex items-center space-x-2 hover:text-orange-600"><FaTwitter className="text-blue-500" /><span>Twitter</span></a></li>
              <li><a href="https://www.youtube.com/@Vjcoverseas" target="_blank" className="flex items-center space-x-2 hover:text-orange-600"><FaYoutube className="text-blue-500" /><span>YouTube</span></a></li>
              <li><a href="https://www.instagram.com/vjc_overseas_bangalore/" target="_blank" className="flex items-center space-x-2 hover:text-orange-600"><FaInstagram className="text-blue-500" /><span>Instagram</span></a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
