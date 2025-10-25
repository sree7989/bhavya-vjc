"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("./LoginModal"), { ssr: false });

const JobCard = ({ job, styles, showSuccess }) => {
  const router = useRouter();
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const jobKey = `${job.title}_${job.company}`.replace(/\s+/g, "_");

  const applyForJob = useCallback(async () => {
    const user = JSON.parse(localStorage.getItem("vjcUser"));
    const resume = localStorage.getItem(`resume_uploaded_${user?.email}`);
    const profile = JSON.parse(localStorage.getItem(`resume_data_${user?.email}`));

    if (!resume || !profile) {
      alert("Please complete your profile first.");
      return;
    }

    const applicationData = {
      type: "job-application",
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      selectedJob: profile.selectedJob,
      experience: profile.experience,
      country: profile.country,
      skills: profile.skills,
      message: profile.message,
      appliedJob: {
        title: job.title,
        company: job.company,
        location: job.location,
        domain: job.domain,
      },
      portalUrl: `https://vjcoverseas.com/abroad-jobs-work-permit.com/${profile.country.toLowerCase()}`,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    if (res.ok) {
      setAlreadyApplied(true);
      showSuccess?.();
    } else {
      alert("Failed to apply for job.");
    }
  }, [job, showSuccess]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    setUser(storedUser);

    const returningJobKey = sessionStorage.getItem("resume_submitted_for");
    if (returningJobKey === jobKey) {
      applyForJob();
      sessionStorage.removeItem("resume_submitted_for");
    }
  }, [jobKey, applyForJob]);

  const handleApply = () => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    const resume = localStorage.getItem(`resume_uploaded_${storedUser?.email}`);

    if (!storedUser) {
      setShowLoginModal(true);
      return;
    }

    if (!resume) {
      sessionStorage.setItem("resume_submitted_for", jobKey);
      router.push("/abroad-jobs-work-permit.com/profile");
    } else {
      applyForJob();
    }
  };

  // Merge keywords from job.tags into the JD naturally
  const keywordString =
    Array.isArray(job.tags) && job.tags.length
      ? job.tags.map((tag) => `• ${tag}`).join("\n")
      : "";

  const fullDescription = `
Join **${job.company}** as a **${job.title}** in **${job.location}**, **${job.country}**. 
We are on the lookout for a highly skilled professional with **${job.minExperience}+ years** of proven expertise in the field of **${job.domain}**. 
The ideal candidate will bring strong technical skills, leadership qualities, and the ability to work with cutting-edge tools and technologies, including ${job.tags.join(
    ", "
  )}, as well as other advanced engineering resources.

Your role will require you to take ownership of a variety of high-impact tasks, such as:
- Managing and executing complex electrical circuit design projects from start to finish.
- Creating detailed AutoCAD drafts and technical drawings to meet project specifications.
- Leading system testing and troubleshooting to ensure flawless operation.
- Overseeing procurement processes, tracking inventory, and ensuring timely availability of materials.
- Coordinating with cross-functional teams, including project managers, designers, and procurement officers, to deliver projects on time.
- Ensuring compliance with all relevant safety standards, regulatory guidelines, and engineering codes.
- Monitoring and optimizing engineering processes to enhance efficiency and reduce costs.

**Key Skills & Tools:**
${keywordString}

**Key Responsibilities:**
- Oversee daily engineering operations to ensure that all deliverables are met within defined timelines.
- Optimize resource allocation and ensure efficiency in design and execution phases.
- Maintain accurate, up-to-date technical documentation for all ongoing projects.
- Establish and manage relationships with vendors and suppliers to ensure the timely delivery of components.
- Implement Key Performance Indicators (KPIs) to evaluate and improve system performance.
- Drive innovation initiatives to enhance system reliability, reduce downtime, and improve product quality.

**Required Skills:**
- Strong problem-solving and analytical thinking abilities for tackling technical challenges.
- Advanced proficiency with CAD tools, simulation software, and electrical testing equipment.
- Excellent communication and documentation skills to convey complex ideas clearly.
- Proven ability to manage multiple priorities in a high-performance, fast-paced environment.

**Preferred Qualifications:**
- A Bachelor's degree in Electrical Engineering, Electronics, or a related technical field.
- Professional certifications in electronics, automation systems, or related disciplines.
- Demonstrated experience in managing large-scale, international engineering projects.

**Additional Perks:**
- A competitive salary of **${job.salary}**, supplemented by project-based performance incentives.
- Comprehensive health coverage and career growth programs tailored to your professional development.
- Opportunities to work with advanced engineering technologies and global project teams.

If you are ready to take the next big step in your career, apply via 
**[VJC-Overseas](https://www.vjcoverseas.com/)** and become an integral part of an innovative engineering team that values skill, dedication, and forward-thinking solutions.
`;

  const formatDescription = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\b(\d+\+?\s?years?)\b/gi, "<strong>$1</strong>")
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-orange-500">$1</a>`
      );
  };

  const descriptionToShow = expanded
    ? fullDescription
    : fullDescription.split("\n").slice(0, 3).join("\n");

  return (
    <>
      {showLoginModal && (
        <LoginModal
          setUser={(userData) => {
            setUser(userData);
            setShowLoginModal(false);
          }}
          setShowLoginModal={setShowLoginModal}
          onSuccess={() => {
            setShowLoginModal(false);
            setTimeout(() => handleApply(), 300);
          }}
        />
      )}

      <div
        className={`p-4 rounded-xl shadow-sm mb-4 border transition-all duration-300 hover:shadow-md ${styles.cardBg}`}
      >
        <div className="flex justify-between items-center flex-wrap">
          <h3
            onClick={handleApply}
            className={`${styles.titleColor} font-semibold text-lg mb-1 cursor-pointer text-orange-600 hover:underline hover:text-blue-500 transition-colors`}
            title="Click to apply"
          >
            <strong>{job.title}</strong>
          </h3>

          <button
            onClick={handleApply}
            className="px-4 py-1 bg-blue-600 hover:bg-orange-500 text-white text-xs font-semibold rounded-lg mt-2 md:mt-0"
            disabled={alreadyApplied}
          >
            {alreadyApplied ? "Applied ✅" : "Apply Now"}
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-1">
          <strong>{job.company}</strong> - <strong>{job.location}</strong>
        </p>

        <p className="text-xs text-gray-600 italic mb-2">
          Domain: <strong>{job.domain}</strong>
        </p>

        <span className="text-xs text-green-600 font-medium">{job.time}</span>

        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {Array.isArray(job.tags) &&
            job.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full border text-orange-500 border-orange-500 hover:text-blue-400 hover:border-blue-400 transition-colors"
              >
                {tag}
              </span>
            ))}
        </div>

        <div
          className="mt-4 text-sm text-gray-800 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: formatDescription(descriptionToShow) }}
        />

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 hover:text-orange-500 text-xs underline"
        >
          {expanded ? "Show Less" : "Explore"}
        </button>
      </div>
    </>
  );
};

export default JobCard;
