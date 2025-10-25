"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Popup.css";
import Image from "next/image";
import { ImageContent } from "./ImageContent";
import { FaTimes } from "react-icons/fa";
import Portal from '../components/Portal'; // ⬅️ CRITICAL: ADJUST THIS IMPORT PATH!

const ModalFormWithPopup = ({ isOpen, setIsOpen, customContent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [landingPage, setLandingPage] = useState("");

  // Capture current page URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLandingPage(window.location.href);
    }
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      age,
      experience,
      qualification,
      country,
      message,
      landingPage,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setAge("");
        setExperience("");
        setQualification("");
        setCountry("");
        setMessage("");
        setIsOpen(false); // Close modal after submission
        // Redirect to /thankyou page appended to current path
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname;
          window.location.href = `${currentPath.replace(/\/$/, '')}/thankyou`;
        }
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setFormStatus("error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <AnimatePresence>
        {isOpen && (
          // 🔑 PORTAL IMPLEMENTATION: This renders the modal outside the component hierarchy.
          <Portal>
            <motion.div
              // We keep the highest z-index here
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              // Backdrop click handler
              onClick={() => setIsOpen(false)}
            >
              {/* Stop propagation on the inner modal content */}
              <motion.div
                className="relative w-full max-w-5xl h-[90%] rounded-2xl shadow-2xl border border-white/20 overflow-hidden bg-white/10 backdrop-blur-md flex flex-row-reverse"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="/assets/gop.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    quality={75}
                  />
                </div>

                {/* Text Overlay on Background Image */}
                <div className="hidden md:block md:absolute top-6 left-6 md:top-64 lg:-mt-12 md:left-10 z-10 max-w-[85%] sm:max-w-[40%] rounded-2xl bg-black/10 border border-white/30 shadow-xl p-6">
                  {customContent || <ImageContent />}
                </div>

                {/* Form Panel */}
                <motion.div
                  className="w-full md:w-1/2 h-full p-6 md:p-8 overflow-y-auto text-white text-sm bg-gradient-to-br bg-black/50"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-4 text-white hover:text-red-500 z-20"
                  >
                    <FaTimes size={24} />
                  </button>

                  <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-sky-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,165,0,0.8)] flex items-center justify-center gap-2">
                    <span className="text-yellow-400 text-2xl">📝</span>
                    Apply Now to Get Free Eligibility Report
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-3 text-sm"
                  >
                    {[
                      { type: "text", val: name, setVal: setName, label: "Name" },
                      {
                        type: "email",
                        val: email,
                        setVal: setEmail,
                        label: "Email",
                      },
                      {
                        type: "tel",
                        val: phone,
                        setVal: setPhone,
                        label: "Phone",
                        props: { maxLength: 10, pattern: "\\d*" },
                      },
                      { type: "number", val: age, setVal: setAge, label: "Age" },
                    ].map(({ type, val, setVal, label, props = {} }, i) => (
                      <div key={i} className="relative">
                        <input
                          type={type}
                          value={val}
                          onChange={(e) => setVal(e.target.value)}
                          required
                          className="peer w-full px-3 pt-5 pb-2 bg-transparent border-b border-white/50 focus:outline-none focus:border-orange-400 text-white placeholder-transparent text-sm"
                          placeholder={label}
                          {...props}
                        />
                        <label className="absolute left-3 top-2 text-xs text-sky-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                          {label}
                        </label>
                      </div>
                    ))}

                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className="bg-transparent border-b border-white/50 text-sky-300 px-3 py-2 focus:outline-none focus:border-orange-400 text-sm"
                    >
                      <option className="text-black" value="">
                        Select Country
                      </option>
                      <option className="text-black" value="India">
                        India
                      </option>
                      <option className="text-black" value="Canada">
                        Canada
                      </option>
                      <option className="text-black" value="Australia">
                        Australia
                      </option>
                      <option className="text-black" value="UK">
                        United Kingdom
                      </option>
                      <option className="text-black" value="USA">
                        United States
                      </option>
                      <option className="text-black" value="Germany">
                        Germany
                      </option>
                    </select>

                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      required
                      className="bg-transparent border-b border-white/50 text-sky-300 px-3 py-2 focus:outline-none focus:border-orange-400 text-sm"
                    >
                      <option className="text-black" value="">
                        Select Experience
                      </option>
                      <option className="text-black" value="1-2 years">
                        1-2 years
                      </option>
                      <option className="text-black" value="3-5 years">
                        3-5 years
                      </option>
                      <option className="text-black" value="5-7 years">
                        5-7 years
                      </option>
                      <option className="text-black" value="7+ years">
                        7+ years
                      </option>
                    </select>

                    <select
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      required
                      className="bg-transparent border-b border-white/50 text-sky-300 px-3 py-2 focus:outline-none focus:border-orange-400 text-sm"
                    >
                      <option className="text-black" value="">
                        Select Qualification
                      </option>
                      <option className="text-black" value="High School">
                        High School
                      </option>
                      <option className="text-black" value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option className="text-black" value="Master's Degree">
                        Master's Degree
                      </option>
                      <option className="text-black" value="Ph.D.">
                        Ph.D.
                      </option>
                      <option className="text-black" value="Diploma">
                        Diploma
                      </option>
                    </select>

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      rows="3"
                      className="bg-transparent border-b border-white/50 text-white px-3 py-2 focus:outline-none focus:border-orange-400 resize-none text-sm"
                    />

                    <button
                      type="submit"
                      className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 rounded-full shadow-md hover:shadow-xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      <span className="relative z-10">
                        {formStatus === "success"
                          ? "🎉 Submitted!"
                          : loading
                          ? "Submitting..."
                          : "Submit Now to Get Free Eligibility Report"}
                      </span>
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>

      {/* Removed the popup section as per your request */}
    </>
  );
};

export default ModalFormWithPopup;
