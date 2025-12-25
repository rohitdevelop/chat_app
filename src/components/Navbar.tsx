"use client";

import { useSession } from "next-auth/react";
 import { LoginButton, NavButton } from "./ui/Button";

export default function Navbar() {
 

  const { data: session } = useSession();
 
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white">
      <h1 className="font-bold text-xl">💬 Chat App</h1>

      <div className="flex gap-4">
       <NavButton text="Start Chatting"/>

      <LoginButton text={session ? "Logout" : "Register"} />
      </div>
    </nav>
  );
}
