// JobSteps.jsx
"use client";
import React, { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

const JobSteps = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({ step1: false, step2: false });
  const [showLoginModal, setShowLoginModal] = useState(false);

  const fetchUserData = () => {
    const storedUser = localStorage.getItem("vjcUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setProgress({
        step1: true,
        step2: localStorage.getItem(`resume_uploaded_${parsedUser.email}`) === "true",
      });
    } else {
      setUser(null);
      setProgress({ step1: false, step2: false });
    }
  };

  useEffect(() => {
    fetchUserData();

    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLoginSuccess = () => {
    fetchUserData();
  };

  const steps = [
    {
      label: "Sign In",
      icon: "🔐",
      active: progress.step1,
      link: "/abroad-jobs-work-permit.com",
    },
    {
      label: "Profile Update",
      icon: "📄",
      active: progress.step1,
      link: "/abroad-jobs-work-permit.com/profile",
    },
    {
      label: "Apply Jobs",
      icon: "🚀",
      active: progress.step2,
      link: "/abroad-jobs-work-permit.com",
    },
  ];

  const handleStepClick = (step) => {
    if (step.label === "Sign In" && !user) {
      setShowLoginModal(true);
      return;
    }
    window.location.href = step.link;
  };

  return (
    <div className="w-full lg:mt-12 mt-14 -mb-16 lg:-mb-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                onClick={() => handleStepClick(step)}
                className="flex flex-col items-center min-w-[100px] cursor-pointer text-orange-300"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${
                    step.active ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step.icon}
                </div>
                <p className="mt-2 text-sm font-medium text-center">{step.label}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden sm:flex flex-grow h-1 bg-gray-200 relative mx-2">
                  <div
                    className={`absolute top-0 left-0 h-1 transition-all duration-700 ${
                      steps[idx + 1].active ? "bg-orange-500 w-full" : "bg-gray-200 w-0"
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {showLoginModal && (
        <LoginModal
          setUser={setUser}
          setShowLoginModal={setShowLoginModal}
          onSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

export default JobSteps;
