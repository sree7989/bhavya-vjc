"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

const skillOptions = [
  "Web Development", "React", "Next.js", "Node.js", "Python", "Java",
  "AWS", "DevOps", "UI/UX", "Figma", "MongoDB", "SQL", "HTML", "CSS",
  "JavaScript", "Docker", "Kubernetes", "C++", "Machine Learning"
];

const countryOptions = [
  "UAE", "Luxembourg", "UK", "Ireland", "Singapore",
  "Malaysia", "Germany", "Canada", "Australia", "South Africa", "Denmark"
];

const Page = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    selectedJob: "",
    experience: "",
    country: "",
    skills: [],
    message: "",
    resume: null,
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [user, setUser] = useState(null);
  const [skillInput, setSkillInput] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("vjcUser"));
    if (storedUser) {
      setUser(storedUser);
      const savedData = localStorage.getItem(`resume_data_${storedUser.email}`);
      const savedImage = localStorage.getItem(`profile_image_${storedUser.email}`);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setForm({
          ...parsed,
          skills: Array.isArray(parsed.skills) ? parsed.skills : [],
        });
        if (parsed.resumeName) setResumeFileName(parsed.resumeName);
      } else {
        setForm((prev) => ({
          ...prev,
          email: storedUser.email,
          name: storedUser.name,
        }));
      }
      if (savedImage) setProfileImage(savedImage);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updatedForm = {
      ...form,
      [name]: files ? files[0] : value,
    };

    if (name === "resume" && files?.length) {
      setResumeFileName(files[0].name);
      updatedForm.resumeName = files[0].name;
    }

    setForm(updatedForm);
    if (user) {
      localStorage.setItem(`resume_data_${user.email}`, JSON.stringify(updatedForm));
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      if (user) {
        localStorage.setItem(`profile_image_${user.email}`, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSkillAdd = (skill) => {
    if (!form.skills.includes(skill)) {
      const updatedSkills = [...form.skills, skill];
      const updatedForm = { ...form, skills: updatedSkills };
      setForm(updatedForm);
      setSkillInput("");
      if (user) {
        localStorage.setItem(`resume_data_${user.email}`, JSON.stringify(updatedForm));
      }
    }
  };

  const handleSkillRemove = (skill) => {
    const updatedSkills = form.skills.filter((s) => s !== skill);
    const updatedForm = { ...form, skills: updatedSkills };
    setForm(updatedForm);
    if (user) {
      localStorage.setItem(`resume_data_${user.email}`, JSON.stringify(updatedForm));
    }
  };

  const handleCountrySelect = (country) => {
    const updatedForm = { ...form, country };
    setForm(updatedForm);
    setShowCountryDropdown(false);
    if (user) {
      localStorage.setItem(`resume_data_${user.email}`, JSON.stringify(updatedForm));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.country) {
      alert("Please select a country.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    for (let key in form) {
      if (key === "skills") {
        data.append("skills", form.skills.join(", "));
      } else if (form[key]) {
        data.append(key, form[key]);
      }
    }

    data.append("landingPage", "/abroad-jobs-work-permit.com");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      setSuccessMsg(json.message);
      setLoading(false);

      localStorage.setItem(`resume_uploaded_${form.email}`, "true");
      localStorage.setItem(`resume_data_${form.email}`, JSON.stringify(form));

      const jobKey = sessionStorage.getItem("resume_submitted_for");
      router.push(`/abroad-jobs-work-permit.com/${form.country.toLowerCase()}`);

    } catch (err) {
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  const filteredSkills = skillInput
    ? skillOptions.filter(
        (s) =>
          s.toLowerCase().includes(skillInput.toLowerCase()) &&
          !form.skills.includes(s)
      )
    : [];

  return (
    <div className="relative min-h-screen bg-white py-12 px-4 sm:px-10 lg:px-32">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Upload Your Resume</h1>

<form
  onSubmit={handleSubmit}
  className="space-y-6 w-full max-w-4xl mx-auto p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-blue-500 text-black backdrop-blur-md"
  style={{
    background: "linear-gradient(to bottom, rgba(249, 115, 22, 0.7), rgba(0, 0, 0, 0.75))",
  }}
>


        <div className="flex items-center gap-4">
          {profileImage ? (
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500">
              <Image
                src={profileImage}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                unoptimized
                priority
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
        </div>

        <input type="text" name="name" placeholder="Full Name" value={form.name} required onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />
        <input type="email" name="email" placeholder="Email Address" value={form.email} required onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} required onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />
        <input type="text" name="selectedJob" placeholder="Job Title Applying For" value={form.selectedJob} required onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />
        <input type="text" name="experience" placeholder="Years of Experience" value={form.experience} onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />

        {/* Country Selector */}
        <div className="relative">
          <div
            className="w-full border border-orange-500 p-2 rounded cursor-pointer bg-white text-black"
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
          >
            {form.country || "Select Country You're Looking For"}
          </div>
          {showCountryDropdown && (
            <ul className="absolute z-10 w-full bg-white border mt-1 rounded shadow max-h-60 overflow-y-auto text-black">
              {countryOptions.map((country) => (
                <li
                  key={country}
                  className="p-2 hover:bg-orange-100 cursor-pointer"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Skills */}
        <div>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Type a skill and select"
            className="w-full border border-orange-500 p-2 rounded mb-2"
          />
          {filteredSkills.length > 0 && (
            <ul className="border border-orange-300 rounded bg-white shadow p-2 max-h-40 overflow-y-auto">
              {filteredSkills.map((skill, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer hover:bg-orange-100 p-1 rounded"
                  onClick={() => handleSkillAdd(skill)}
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {form.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded flex items-center gap-1"
              >
                {skill}
                <button
                  onClick={() => handleSkillRemove(skill)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <textarea name="message" placeholder="Message (optional)" rows="4" value={form.message} onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />

        <div className="w-full">
          <label className="block text-1sm font-medium mb-1 text-white">
            Resume {resumeFileName && `(${resumeFileName})`}
          </label>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full border border-orange-500 p-2 rounded" />
        </div>

        <button
          type="submit"
          className={`w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit Application"}
        </button>

        {successMsg && <p className="text-green-600 font-semibold">{successMsg}</p>}
      </form>
    </div>
  );
};

export default Page;
