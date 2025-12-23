"use client";

import ChatPage from "@/src/app/chat/page";
import { signIn, useSession,} from "next-auth/react";

export default function LoginCard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;

  if (session) {
    return (
       <ChatPage />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-[89vh] bg-linear-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">💬 Chat App</h1>
        <p className="text-gray-500 text-center">Connect & chat securely</p>

        {/* Optional Inputs (UI only) */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* OAuth Buttons */}
        <button
          onClick={() => signIn("google")}
          className="w-full py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Continue with GitHub
        </button>

        <p className="text-xs text-center text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
