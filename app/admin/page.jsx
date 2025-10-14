/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import News from "./News";
import Jobseeker from "./Jobseeker"
import { useMemo } from "react";
export default function AdminJobs() {
  // 🔑 Login state
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  // ------------------ Job Manager -------------------
  const [jobs, setJobs] = useState({});
  const [form, setForm] = useState({
    id: null,
    title: "",
    company: "",
    location: "",
    country: "",
    city: "",
    domain: "",
    experience: "",
    minExperience: "",
    time: "",
    tags: "",
    salary: "",
    type: "",
    level: "",
  });
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState(null); // ✅ track edit mode

  // Allowed countries & domains
  const filterData = useMemo(() => ({
    UAE: {
      cities: ["Dubai"],
      domains: [
        "Semiconductor", "AI", "IT", "Finance", "Administration",
        "Front Office", "Healthcare", "Education", "Construction",
        "Retail", "Marketing", "Engineering", "Aviation", "Oil & Gas",
      ],
    },
    Germany: {
      cities: ["Berlin"],
      domains: [
        "Sales", "Supply Chain", "Healthcare", "Manufacturing",
        "Automobile", "IT", "Electrical", "HVAC", "Industrial Safety",
        "Business Development",
      ],
    },
    Canada: {
      cities: ["Toronto"],
      domains: [
        "Banking", "Food Services", "Retail", "Operations", "IT",
        "Administration", "Engineering", "Sales", "Marketing",
        "Healthcare", "Construction", "Airlines", "Insurance",
      ],
    },
    Australia: {
      cities: ["Melbourne"],
      domains: [
        "IT & Software Testing", "IT & Software Development",
        "Manufacturing & Engineering", "Automotive", "ICT Sales",
      ],
    },
    Luxembourg: {
      cities: ["Luxembourg City"],
      domains: [
        "IT & Software Development", "Mechanical Engineering",
        "Finance & Banking", "Healthcare", "Sales & Business Development",
        "Electrical Engineering", "Data & Analytics", "HVAC",
      ],
    },
    UK: {
      cities: ["London"],
      domains: [
        "Travel", "Media", "Marketing", "Finance", "Hospitality",
        "Sales", "Education", "E-commerce", "IT",
      ],
    },
    Ireland: {
      cities: ["Dublin"],
      domains: [
        "IT & Software Development", "Healthcare", "Mechanical Engineering",
        "Business & Consulting", "Sales & Marketing", "HVAC",
        "Data & Analytics", "Electrical Engineering", "Digital Marketing",
      ],
    },
    Singapore: {
      cities: ["Singapore"],
      domains: [
        "IT & Software Development", "Biomedical Engineering",
        "Finance & Banking", "Design & User Experience",
        "Logistics & Supply Chain", "Cybersecurity",
        "Urban Development & Planning", "Maritime & Port Management",
        "Artificial Intelligence",
      ],
    },
    Malaysia: {
      cities: ["Kuala Lumpur"],
      domains: [
        "Information Technology", "Finance & Accounting",
        "Marketing & Advertising", "Human Resources", "Data & Analytics",
        "Construction & Engineering", "Customer Service",
        "Creative Design", "Cybersecurity", "Logistics & Supply Chain",
      ],
    },
    "South Africa": {
      cities: ["Johannesburg"],
      domains: [
        "Information Technology", "Mining & Engineering",
        "Finance & Banking", "Healthcare & Nursing", "Energy & Utilities",
        "Marketing & Branding", "Customer Support",
        "Infrastructure & Construction", "Cybersecurity",
        "Logistics & Supply Chain",
      ],
    },
    Denmark: {
      cities: ["Copenhagen"],
      domains: [
        "Information Technology", "Renewable Energy", "Pharmaceuticals",
        "Product Design", "Robotics & Automation", "Shipping & Maritime",
        "Life Sciences", "Supply Chain & Logistics", "Cloud & DevOps",
        "Healthcare Technology",
      ],
    },
}), []);


  // Fetch jobs
  const loadJobs = () => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        Object.keys(filterData).forEach((c) => {
          grouped[c] = data.filter((job) => job.country === c);
        });
        setJobs(grouped);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
  loadJobs();
}, []);

  // Add new job
  const addJob = async () => {
    if (!form.country) {
      alert("Please select a country!");
      return;
    }

    const newJob = {
      ...form,
      id: Date.now(),
      minExperience: Number(form.minExperience),
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
    };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error("Error saving job", await res.text());
      return;
    }

    await loadJobs();
    resetForm();
  };

  // Update existing job
  const updateJob = async () => {
    const updatedJob = {
      ...form,
      id: Number(editId),
      minExperience: Number(form.minExperience),
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
    };

    const res = await fetch("/api/jobs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });

    if (!res.ok) {
      console.error("Error updating job", await res.text());
      return;
    }

    await loadJobs();
    resetForm();
  };

  // Delete job
  const deleteJob = async (country, id) => {
    const idNum = Number(id);
    await fetch("/api/jobs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: idNum, country }),
    });
    setJobs((prev) => ({
      ...prev,
      [country]: (prev[country] || []).filter((job) => Number(job.id) !== idNum),
    }));
  };

  // Delete by ID
  const deleteById = async () => {
    const idNum = Number(deleteId);
    if (!idNum) {
      alert("Please enter a valid Job ID");
      return;
    }

    let foundCountry = null;
    Object.keys(jobs).forEach((country) => {
      if ((jobs[country] || []).some((job) => Number(job.id) === idNum)) {
        foundCountry = country;
      }
    });

    if (!foundCountry) {
      alert("No job found with this ID!");
      return;
    }

    await deleteJob(foundCountry, idNum);
    setDeleteId("");
    alert(`Deleted job ${idNum} from ${foundCountry}`);
  };

  // Start edit mode
  const startEdit = (job) => {
    setForm({
      ...job,
      tags: job.tags ? job.tags.join(", ") : "",
    });
    setEditId(job.id);
  };

  // Reset form
  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      company: "",
      location: "",
      country: "",
      city: "",
      domain: "",
      experience: "",
      minExperience: "",
      time: "",
      tags: "",
      salary: "",
      type: "",
      level: "",
    });
    setEditId(null);
  };

  // 🚪 Login UI
  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-80 space-y-4"
        >
          <h1 className="text-xl font-bold text-center">Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // ✅ Admin dashboard
  return (
    <div className="p-4 mt-24 ml-12 mr-8 sm:p-6">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <News />
      <Jobseeker />
      <h1 className="text-xl font-bold mb-4">Abroad Job Manager</h1>

      {/* Job Form */}
      <div className="mb-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Country */}
        <select
          value={form.country}
          onChange={(e) =>
            setForm({ ...form, country: e.target.value, city: "", domain: "" })
          }
          className="border p-2 w-full rounded"
        >
          <option value="">Select Country</option>
          {Object.keys(filterData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* City */}
        <select
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select City</option>
          {form.country &&
            filterData[form.country]?.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
        </select>

        {/* Domain */}
        <select
          value={form.domain}
          onChange={(e) => setForm({ ...form, domain: e.target.value })}
          disabled={!form.country}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Domain</option>
          {form.country &&
            filterData[form.country]?.domains.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
        </select>

        {/* Other fields */}
        {[
          "title","company","location","experience","minExperience",
          "time","tags","salary","type","level"
        ].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 w-full rounded"
          />
        ))}

        <button
          onClick={editId ? updateJob : addJob}
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 sm:col-span-2"
        >
          {editId ? "Update Job" : "Add Job"}
        </button>

        {editId && (
          <button
            onClick={resetForm}
            className="bg-gray-500 text-white px-4 py-2 rounded col-span-1 sm:col-span-2"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* Delete by ID */}
      <div className="mb-8 flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          type="text"
          placeholder="Enter Job ID to Delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={deleteById}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete by ID
        </button>
      </div>

      {/* Jobs List (each country shows only 3 items visible; rest scroll) */}
      {Object.keys(jobs).map((country) => (
        <div key={country} className="mb-6">
          <h2 className="text-lg font-bold mb-2">{country}</h2>

          {/* 👇 Scroll container sized for exactly 3 rows */}
          <div className="max-h-[18rem] overflow-y-auto border rounded p-2 bg-white">
            <ul className="space-y-2">
              {(jobs[country] || []).map((job) => (
                <li
                  key={job.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded"
                >
                  {/* Keep item height reasonable so 3 fit cleanly */}
                  <span className="truncate">
                    {job.title} - {job.company} ({job.id})
                  </span>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => startEdit(job)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteJob(country, job.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* max-h-[18rem] = 18rem ≈ 288px. With compact items, that’s ~3 rows visible. */}
        </div>
      ))}
    </div>
  );
}
