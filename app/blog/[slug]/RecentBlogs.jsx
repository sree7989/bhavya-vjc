'use client';

import Image from 'next/image';

const RecentBlogs = ({ blogs, currentSlug }) => {
  const recent = blogs
    .filter((b) => b.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="mt-10 w-full">
      <h2 className="text-xl font-bold text-black mb-4 border-b pb-2 border-purple-500">Recent Blogs</h2>
      <div className="flex flex-col gap-1">
        {recent.map((item) => (
          <a
            key={item.id}
            href={`/blogs/${item.slug}`}
            className="flex gap-4 items-center bg-gray-800 hover:bg-purple-700 transition-all p-3 rounded-lg"
          >
            <div className="relative w-16 h-16 rounded overflow-hidden">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{item.title}</p>
              <span className="text-xs text-gray-300">{item.category}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
