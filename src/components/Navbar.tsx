"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleStartChat = () => {
    if (!session) router.push("/login");
    else router.push("/chat");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white">
      <h1 className="font-bold text-xl">💬 Chat App</h1>

      <div className="flex gap-4">
        <button onClick={handleStartChat} className="bg-white text-indigo-600 px-4 py-2 rounded">
          Start Chat
        </button>

        {!session ? (
          <button onClick={() => router.push("/login")} className="border px-4 py-2 rounded">
            Login
          </button>
        ) : (
          <button onClick={() => signOut()} className="border px-4 py-2 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
