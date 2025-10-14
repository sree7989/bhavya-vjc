import React, { useState, useEffect } from 'react';
// The import for 'next/router' has been removed to resolve the compilation error.

const Form = () => {
  // We no longer need to initialize the router here.
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  
  // UI state
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);
  
  // State to capture the page URL for the form data
  const [landingPage, setLandingPage] = useState(''); 

  // Capture current page URL (for form data submission)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLandingPage(window.location.href);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus(null); // Reset status on new submission attempt

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

    let response;
    try {
      response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 1. Clear form fields (optional, but good practice)
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setExperience('');
        setQualification('');
        setCountry('');
        setMessage('');

        // 2. *** REDIRECT LOGIC FOR GOOGLE ADS TRACKING ***
        // Get the current path (e.g., /products/visa)
        const currentPathname = window.location.pathname;
        
        // Construct the new path (e.g., /products/visa/thankyou)
        // We use window.location.replace() to redirect and prevent the user
        // from hitting 'back' to see the form again, achieving the same result as router.replace().
        const redirectPath = `${currentPathname}/thankyou`;
        window.location.replace(redirectPath);

        // Note: Execution stops here as the browser navigates to the new URL.
        
      } else {
        // Handle API errors (e.g., 400, 500)
        setFormStatus('error');
        setLoading(false);
      }
    } catch (error) {
      // Handle network errors (e.g., no internet)
      console.error('Network Error:', error.message);
      setFormStatus('error');
      setLoading(false);
    }
  };
  
  // Determine button text based on status
  let buttonText = 'Submit for Free Assessment';
  if (loading) {
    buttonText = 'Submitting...';
  } else if (formStatus === 'error') {
    buttonText = 'Submission Failed! Please Try Again.';
  }


  return (
    <div
      className="bg-gradient-to-b from-blue-400/60 to-black/80 p-6 py-4 shadow-2xl max-w-md mx-auto w-full mb-6 rounded-lg shadow-gray-500"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <h2 className="text-2xl font-semibold text-center text-white mt-0">
        Sign up <span style={{ color: 'rgb(220, 4, 4)' }}> &</span> Get Free Assessment
      </h2>
      
      {/* Display error message if submission failed */}
      {formStatus === 'error' && (
          <p className="text-red-300 text-center font-bold mt-2">
            There was an error submitting the form. Please check your connection.
          </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Input fields */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          pattern="\d*"
          maxLength={10}
          minLength={10}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <input
          type="number"
          name="age"
          placeholder="Your Age"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select
          name="experience"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Select Experience</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-7 years">5-7 years</option>
          <option value="7+ years">7+ years</option>
        </select>

        <select
          name="qualification"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        >
          <option value="">Select your qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Ph.D.">Ph.D.</option>
          <option value="Diploma">Diploma</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="2"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-950 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 shadow-lg mt-2 sm:mt-0 -mb-2 sm:mb-0"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
