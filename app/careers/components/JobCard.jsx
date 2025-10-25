'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';
import ApplicationForm from './ApplicationForm';
import Image from 'next/image';

export default function JobCard({ job }) {
  const { user } = useAuth();
  const [showApplication, setShowApplication] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleApply = () => {
    setShowApplication(true); // Always open form
  };

  return (
    <div className="bg-white border border-gray-300 hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl relative cursor-default flex flex-col justify-between">
      {/* Logo in top-right */}
      <div className="absolute top-4 right-4">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      {/* Title & Location */}
      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{job.location}</p>

      {/* Description */}
      <div className="text-sm text-gray-800 mb-3">
        {isExpanded ? (
          <>
            <p>{job.description}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {job.details?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </>
        ) : (
          `${job.description.slice(0, 80)}${job.description.length > 80 ? '...' : ''}`
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="text-orange-500 text-xs mb-3 hover:underline"
      >
        {isExpanded ? 'Hide Details' : 'Know More'}
      </button>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills?.map((skill, idx) => (
          <span key={idx} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleApply();
        }}
        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-400 transition"
      >
        Apply Now
      </button>

      {/* Application Form Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ApplicationForm job={job} onClose={() => setShowApplication(false)} />
        </div>
      )}
    </div>
  );
}
