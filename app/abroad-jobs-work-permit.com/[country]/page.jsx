"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Filter, X } from "lucide-react";
import JobCard from "./JobCard";
import Form from "./Form";
import jobData from "./jobData";
const countryStyles = {
  UAE: { cardBg: "bg-white", titleColor: "text-blue-700", tagColor: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  Germany: { cardBg: "bg-blue-50", titleColor: "text-blue-900", tagColor: "bg-blue-100 text-blue-700 border-blue-300" },
  Canada: { cardBg: "bg-red-50", titleColor: "text-red-800", tagColor: "bg-red-100 text-red-700 border-red-300" },
  Australia: { cardBg: "bg-green-50", titleColor: "text-green-800", tagColor: "bg-green-100 text-green-700 border-green-300" },
  Luxembourg: { cardBg: "bg-purple-50", titleColor: "text-purple-800", tagColor: "bg-purple-100 text-purple-700 border-purple-300" },
  UK: { cardBg: "bg-gray-50", titleColor: "text-gray-800", tagColor: "bg-gray-100 text-gray-700 border-gray-300" },
  Ireland: { cardBg: "bg-pink-50", titleColor: "text-pink-800", tagColor: "bg-pink-100 text-pink-700 border-pink-300" },
  Singapore: { cardBg: "bg-emerald-50", titleColor: "text-emerald-800", tagColor: "bg-emerald-100 text-emerald-700 border-emerald-300" },
  Malaysia: { cardBg: "bg-orange-50", titleColor: "text-orange-800", tagColor: "bg-orange-100 text-orange-700 border-orange-300" },
  Southafrica: { cardBg: "bg-yellow-50", titleColor: "text-yellow-800", tagColor: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  Denmark: { cardBg: "bg-indigo-50", titleColor: "text-indigo-800", tagColor: "bg-indigo-100 text-indigo-700 border-indigo-300" },
};

const filterData = {
  UAE: { cities: ["Dubai"], domains: ["Semiconductor", "AI", "IT", "Finance", "Administration", "Front Office", "Healthcare", "Education", "Construction", "Retail", "Marketing", "Engineering", "Aviation", "Oil & Gas"] },
  Germany: { cities: ["Berlin"], domains: ["Sales", "Supply Chain", "Healthcare", "Manufacturing", "Automobile", "IT", "Electrical", "HVAC", "Industrial Safety", "Business Development"] },
  Canada: { cities: ["Toronto"], domains: ["Banking", "Food Services", "Retail", "Operations", "IT", "Administration", "Engineering", "Sales", "Marketing", "Healthcare", "Construction", "Airlines", "Insurance"] },
  Australia: { cities: ["Melbourne"], domains: ["IT & Software Testing", "IT & Software Development", "Manufacturing & Engineering", "Automotive", "ICT Sales"] },
  Luxembourg: { cities: ["Luxembourg City"], domains: ["IT & Software Development", "Mechanical Engineering", "Finance & Banking", "Healthcare", "Sales & Business Development", "Electrical Engineering", "Data & Analytics", "HVAC"] },
  UK: { cities: ["London"], domains: ["Travel", "Media", "Marketing", "Finance", "Hospitality", "Sales", "Education", "E-commerce", "IT"] },
  Ireland: { cities: ["Dublin"], domains: ["IT & Software Development", "Healthcare", "Mechanical Engineering", "Business & Consulting", "Sales & Marketing", "HVAC", "Data & Analytics", "Electrical Engineering", "Digital Marketing"] },
  Singapore: { cities: ["Singapore"], domains: ["IT & Software Development", "Biomedical Engineering", "Finance & Banking", "Design & User Experience", "Logistics & Supply Chain", "Cybersecurity", "Urban Development & Planning", "Maritime & Port Management", "Artificial Intelligence"] },
  Malaysia: { cities: ["Kuala Lumpur"], domains: ["Information Technology", "Finance & Accounting", "Marketing & Advertising", "Human Resources", "Data & Analytics", "Construction & Engineering", "Customer Service", "Creative Design", "Cybersecurity", "Logistics & Supply Chain"] },
  Southafrica: { cities: ["Johannesburg"], domains: ["Information Technology", "Mining & Engineering", "Finance & Banking", "Healthcare & Nursing", "Energy & Utilities", "Marketing & Branding", "Customer Support", "Infrastructure & Construction", "Cybersecurity", "Logistics & Supply Chain"] },
  Denmark: { cities: ["Copenhagen"], domains: ["Information Technology", "Renewable Energy", "Pharmaceuticals", "Product Design", "Robotics & Automation", "Shipping & Maritime", "Life Sciences", "Supply Chain & Logistics", "Cloud & DevOps", "Healthcare Technology"] },
};

const experienceOptions = ["Entry level", "Mid career", "Senior", "Experienced", "Management", "Director/Head", "Internship"];

const CountryJobsPage = () => {
  const params = useParams();
  const router = useRouter();

  const [jobs, setJobs] = useState([]); // 🔥 jobs will now come from JSON
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedYears, setSelectedYears] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // 🔥 Fetch jobs.json on mount
useEffect(() => {
  fetch("/api/jobs")
    .then((res) => res.json())
    .then((data) => {
      // Combine local + API jobs
      setJobs([...jobData, ...data]);
    })
    .catch((err) => {
      console.error("Error loading jobs:", err);
      // Even if API fails, use local jobdata
      setJobs([...jobdata]);
    });
}, []);



  useEffect(() => {
    const current = params?.country?.replace(/-/g, "");
    const matchedCountry = Object.keys(filterData).find(
      (c) => c.toLowerCase().replace(/\s/g, "") === current?.toLowerCase()
    );
    if (matchedCountry) setSelectedCountry(matchedCountry);
  }, [params]);

  const handleCountryChange = (country) => {
    const urlSafe = country.toLowerCase().replace(/\s/g, "");
    router.push(`/abroad-jobs-work-permit.com/${urlSafe}`);
  };

  const handleShowSuccess = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const keywordFilteredJobs = jobs.filter(
    (job) =>
      (!searchKeyword ||
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.domain.toLowerCase().includes(searchKeyword.toLowerCase())) &&
      job.country === selectedCountry &&
      (!selectedCity || job.city === selectedCity) &&
      (!selectedDomain || job.domain === selectedDomain) &&
      (!selectedExperience || job.experience === selectedExperience) &&
      (!selectedYears || job.minExperience >= parseInt(selectedYears))
  );

  const totalPages = Math.ceil(keywordFilteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = keywordFilteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const availableCities = filterData[selectedCountry]?.cities || [];
  const availableDomains = filterData[selectedCountry]?.domains || [];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl text-lg animate-bounce text-center">
            🎉 Application sent successfully!
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg animate-slideUp">
            <button
              className="absolute top-3 right-3 text-blue-400 hover:text-red-500 z-10"
              onClick={() => setShowContactForm(false)}
            >
              <X size={24} />
            </button>
            <Form />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <button
          className="lg:hidden flex items-center gap-2 text-blue-700 text-sm font-medium"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <aside
          className={`sticky top-28 bg-white shadow-md rounded-xl lg:ml-10 p-4 space-y-4 w-full max-w-sm mx-auto lg:mx-0 lg:w-1/4 h-fit ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          <h2 className="text-lg font-semibold flex justify-between items-center">
            Filters
            <button className="lg:hidden text-blue-700" onClick={() => setShowFilters(!showFilters)}>
              <Filter size={18} />
            </button>
          </h2>

          {/* Country */}
          <div>
            <label className="block font-medium text-sm mb-1">Country</label>
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
              {Object.keys(filterData).map((c) => (
                <div key={c} className="flex items-center text-sm">
                  <input
                    type="radio"
                    name="country"
                    id={`country-${c}`}
                    checked={selectedCountry === c}
                    onChange={() => handleCountryChange(c)}
                    className="mr-2"
                  />
                  <label htmlFor={`country-${c}`}>{c}</label>
                </div>
              ))}
            </div>
          </div>

          {/* City */}
          {availableCities.length > 0 && (
            <div>
              <label className="block font-medium text-sm mb-1">City</label>
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full border rounded px-2 py-1 text-sm">
                <option value="">All Cities</option>
                {availableCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          )}

          {/* Domain */}
          {availableDomains.length > 0 && (
            <div>
              <label className="block font-medium text-sm mb-1">Domain</label>
              <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)} className="w-full border rounded px-2 py-1 text-sm">
                <option value="">All Domains</option>
                {availableDomains.map((domain) => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          )}

          {/* Experience */}
          <div>
            <label className="block font-medium text-sm mb-1">Experience</label>
            <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)} className="w-full border rounded px-2 py-1 text-sm">
              <option value="">All</option>
              {experienceOptions.map((exp) => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>

          {/* Years */}
          <div>
            <label className="block font-medium text-sm mb-1">Years of Experience</label>
            <select value={selectedYears} onChange={(e) => setSelectedYears(e.target.value)} className="w-full border rounded px-2 py-1 text-sm">
              <option value="">All</option>
              {[...Array(6)].map((_, i) => {
                const year = i + 1;
                return <option key={year} value={year}>{year}+ Years</option>;
              })}
            </select>
          </div>
        </aside>

        {/* Job Cards */}
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <h1 className="text-3xl text-center font-bold text-blue-800 capitalize">
            Jobs in {selectedCountry || "Select Country"}
          </h1>

          <div className="mb-4">
            <input
              type="text"
              placeholder="🔍 Search jobs by title, company or domain"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full px-5 py-2 border border-gray-300 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {currentJobs.length > 0 ? (
            <>
              {currentJobs.map((job, i) => (
                <JobCard
                  key={i}
                  job={job}
                  styles={countryStyles[job.country] || countryStyles["UAE"]}
                  showSuccess={handleShowSuccess}
                />
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => {
                    scrollToTop();
                    setCurrentPage((p) => Math.max(1, p - 1));
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => {
                    scrollToTop();
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center mt-8">
              <p className="text-gray-500 text-lg mb-4">😢 No jobs found.</p>
              <p className="text-gray-700 font-medium mb-4">For more details, contact us!</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-orange-500 text-white rounded-full text-sm font-semibold shadow-md transition"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
        .animate-slideUp { animation: slideUp 0.3s ease forwards; }
      `}</style>
    </div>
  );
};

export default CountryJobsPage;
