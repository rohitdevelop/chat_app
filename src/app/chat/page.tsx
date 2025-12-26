// "use client";

// import { useSession } from "next-auth/react";

// import React, { useState, useEffect } from "react";

// interface User {
//   fullName: string;
// }

// const Page = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//  const {data:session, status} = useSession()
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await fetch("/api/users"); 
//         const data = await res.json();
 
//         if (res.ok) {
//           setUsers(data.data);
//         } else {
//           console.error("Failed to fetch users:", data.message);
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p className="mt-40 text-center">Loading users...</p>;

//   return (
//     <div className="mt-10 text-black space-y-2">
//       {users.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         users.map((user, index) => <h2 key={index}>{user.fullName}</h2>  )
//     )}
//     <h1 className='text-amber-600'>{session?.user?.name}</h1>
//     </div>
//   );
// };

// export default Page;









"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

interface User {
  id: string;
  fullName: string;
}

interface Message {
  from: string;
  text: string;
}

const Page = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.data);
          setSelectedUser(data.data[0] || null); // select first user by default
        } else {
          console.error("Failed to fetch users:", data.message);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Mock messages for selected user
  useEffect(() => {
    if (!selectedUser) return;
    // replace with real API fetch for messages if needed
    setMessages([
      { from: "other", text: `Hello ${selectedUser.fullName}!` },
      { from: "me", text: "Hi there!" },
    ]);
  }, [selectedUser]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: "me", text: newMessage }]);
    setNewMessage("");
  };

  if (loading) return <p className="mt-40 text-center">Loading users...</p>;

  return (
    <div className="h-screen flex bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-1/3 md:w-1/4 bg-white border-r hidden md:flex flex-col">
        <div className="p-4 font-bold text-lg border-b">Users</div>
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${
                selectedUser?.id === user.id ? "bg-gray-200" : ""
              }`}
            >
              {user.fullName}
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-white border-b font-semibold">
          {selectedUser?.fullName || "Select a user"}
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.from === "me" ? "ml-auto bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t flex gap-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-green-500 text-white px-4 rounded-full"
          >
            Send
          </button>
        </div>

        {/* Session User Info */}
        <div className="absolute bottom-4 right-4 text-amber-600 font-semibold">
          Logged in as: {session?.user?.name}
        </div>
      </div>
    </div>
  );
};

export default Page;
