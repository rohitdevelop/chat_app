"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
interface message {
  text: string;
}
 export const Button = ({ text }: message) => {
  const { data: session } = useSession();
  const router = useRouter();
  function handleclick() {
    if (!session) {
      router.push("/login");
    } else {
      router.push("/chat");
    }
  }
  return (
    <div
      onClick={handleclick}
      className="w-full sm:w-auto px-10 py-4 cursor-pointer bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
    >
      {text}
    </div>
  );
};
export const NavButton = ({ text }: message) => {
  const { data: session } = useSession();
  const router = useRouter();
  function handleclick() {
    if (!session) {
      router.push("/login");
    } else {
      router.push("/chat");
    }
  }
  return (
    <div
      onClick={handleclick}
      className="bg-white text-indigo-600 px-4 py-2 rounded cursor-pointer"
    >
      {text}
    </div>
  );
};
export const LoginButton = ({ text }: message) => {
  const { data: session } = useSession();
  const router = useRouter();
  async function handleclick() {
    if (!session) {
      router.push("/login");
    } else {
      await signOut({redirect: false})
      router.push("/");
    }
  }
  return (
    <div
      onClick={handleclick}
      className=" text-white border-2 border-amber-50 px-4 py-2 rounded cursor-pointer"
    >
      {text}
    </div>
  );
};


