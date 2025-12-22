"use client";

import React, { useState } from "react";

const EmailPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    console.log("Email:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign in with Email
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Continue
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          We’ll send you a magic link to sign in.
        </p>
      </div>
    </div>
  );
};

export default EmailPage;
