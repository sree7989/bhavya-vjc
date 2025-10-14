"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaGlobeAsia, FaSearch } from "react-icons/fa";

const countries = [
  "UAE", "Luxembourg", "UK", "Ireland", "Singapore",
  "Malaysia", "Germany", "Canada", "Australia", "South Africa", "Denmark"
];

const JobSubNavbar = ({
  selectedCountry,
  setSelectedCountry,
  searchKeyword,
  setSearchKeyword,
  onSearchClick,
}) => {
  const router = useRouter();
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0); // ✅ useRef to persist scroll value

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
      lastScrollY.current = window.scrollY; // ✅ update ref
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    router.push(`/abroad-jobs-work-permit.com/${selected.toLowerCase().replace(/ /g, "-")}`);
  };

  const handleSearchClick = () => {
    if (onSearchClick) {
      onSearchClick();
    }
  };

  return (
    <div
      className={`sticky z-40 transition-all duration-300 ${
        showBar ? "translate-y-0" : "-translate-y-full"
      } top-[110px] lg:top-[90px]`}
    >
      <div className="w-full px-2 py-2 flex justify-center bg-transparent">
        <div className="w-full max-w-[1280px] flex items-center justify-between gap-2 bg-white backdrop-blur-md border border-orange-300 px-4 py-2 rounded-full shadow-md">

          {/* Country Dropdown */}
          <div className="flex items-center gap-1 min-w-[120px]">
            <FaGlobeAsia className="text-orange-500" />
            <select
              className="bg-transparent text-sm outline-none"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Search Field */}
          <div className="flex items-center gap-2 flex-grow">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Search Button */}
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSubNavbar;
