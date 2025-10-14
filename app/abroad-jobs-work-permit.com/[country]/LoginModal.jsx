// LoginModal.jsx
"use client";
import React from "react";
import { auth, provider } from "@/lib/firebase"; // ✅ Ensure correct path
import { signInWithPopup } from "firebase/auth";
import { X } from "lucide-react";

const LoginModal = ({ setUser, setShowLoginModal, onSuccess }) => {
  const handleLogin = async (method) => {
    if (method === "Google") {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };

        localStorage.setItem("vjcUser", JSON.stringify(userData));
        setUser(userData);
        setShowLoginModal(false);
        onSuccess?.();

        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userData.email,
            name: userData.name,
            type: "auth-welcome",
          }),
        });

        // ✅ Reload the page after login
        window.location.reload();

      } catch (error) {
        console.error("Google login error:", error.message);
        alert("Google sign-in failed.");
      }
    }

    if (method === "Email") {
      const email = prompt("Enter your email:");
      if (!email) return;

      const userData = {
        name: "VJC User",
        email,
        photo: `https://i.pravatar.cc/100?u=${email}`,
      };

      localStorage.setItem("vjcUser", JSON.stringify(userData));
      setUser(userData);
      setShowLoginModal(false);
      onSuccess?.();

      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "VJC User",
          type: "auth-welcome",
        }),
      });

      alert("A confirmation email has been sent.");

      // ✅ Reload the page after login
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={() => setShowLoginModal(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Welcome to VJC Jobs Portal
        </h2>
        <p className="mb-6 text-gray-600">Please login to continue</p>

        <button
          onClick={() => handleLogin("Google")}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mb-3"
        >
          Continue with Google
        </button>
        <button
          onClick={() => handleLogin("Email")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Continue with Email
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
