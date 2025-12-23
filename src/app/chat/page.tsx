"use client";
import { Session } from "inspector";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";

const users = [
  { id: 1, name: "Rahul", lastMsg: "Hey bro!" },
  { id: 2, name: "Amit", lastMsg: "Kaise ho?" },
  { id: 3, name: "Neha", lastMsg: "Call me" },
];

const messagesData: any = {
  1: [
    { from: "me", text: "Hi Rahul" },
    { from: "other", text: "Hey bro!" },
  ],
  2: [{ from: "other", text: "Kaise ho?" }],
  3: [{ from: "me", text: "Hi Neha" }],
};

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<any>(users[0]);
  const [message, setMessage] = useState("");
const {data: session, status} = useSession();
  return (
    <div className="h-screen flex bg-gray-100">
      
      {/* LEFT SIDEBAR */}
      <div className="w-1/3 md:w-1/4 bg-white border-r hidden md:block">
        <div className="p-4 font-bold text-lg border-b">Chats <span className="text-green-700">{session?.user?.email}</span></div>

        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`p-4 cursor-pointer hover:bg-gray-100 ${
              selectedUser.id === user.id && "bg-gray-200"
            }`}
          >
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500 truncate">
              {user.lastMsg}
            </p>
          </div>
        ))}
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="p-4 bg-white border-b font-semibold">
          {selectedUser.name}
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messagesData[selectedUser.id]?.map((msg: any, index: number) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.from === "me"
                  ? "ml-auto bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-4 bg-white border-t flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-green-500 text-white px-4 rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
