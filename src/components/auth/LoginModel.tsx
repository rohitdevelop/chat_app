"use client";

import ChatPage from "@/src/app/chat/page";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCard() {
  const { data: session, status } = useSession();
  const Router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (session) {
    return <ChatPage />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(res);

      const text = await res.text();
      const data = JSON.parse(text);

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }else{
        setForm({ fullName: "", email: "", password: "" });
        // Router.push("./chat");
      }

      alert(data.message);
    } catch (err) {
      console.error("Registration error:", err);
      alert("An error occurred during registration");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[89vh] bg-linear-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">💬 Chat App</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border"
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-500 text-white"
          >
            Register
          </button>
        </form>

        <button
          onClick={() => signIn("google")}
          className="w-full py-3 bg-red-500 text-white rounded-xl"
        >
          Continue with Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="w-full py-3 bg-gray-900 text-white rounded-xl"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}
