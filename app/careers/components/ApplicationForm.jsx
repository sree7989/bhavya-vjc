'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ApplicationForm({ job, onClose }) {
  const { user } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    experience: '',
    pastIncome: '',
    resume: null,
    selectedJob: job?.title || '',
    message: '',
    landingPage: typeof window !== 'undefined' ? window.location.href : '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: form,
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          onClose(); // close modal after 3 seconds
        }, 3000);
      } else {
        alert('Failed to send application. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
      <div className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-xl font-bold text-gray-500 hover:text-red-600"
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="Logo" width={120} height={70} className="object-contain" />
        </div>

        {success ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h2>
            <p className="text-gray-700">Thank you for applying. We will get back to you soon.</p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-5"
          >
            <h2 className="text-center text-2xl font-bold text-gray-800">
              Apply for {job?.title || 'this Position'}
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Years of Experience (e.g., 2 years)"
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <input
              type="text"
              name="pastIncome"
              value={formData.pastIncome}
              onChange={handleChange}
              placeholder="Past Income (Optional)"
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message (Optional)"
              rows={3}
              className="w-full rounded-md border border-gray-300 p-3"
            />

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Upload Resume (PDF or DOC)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 p-2 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
              >
                Submit Application
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
