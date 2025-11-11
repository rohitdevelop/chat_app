// "use client"

// import { useEffect, useState, useRef } from "react";
// import { io, Socket } from "socket.io-client";

// interface Message {
//   user: string;
//   text: string;
// }

// export default function Home() {
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [text, setText] = useState("");
//   const [username, setUsername] = useState("Guest");
//   const chatEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const uniqueUsername = "User" + Math.floor(Math.random() * 1000);
//     setUsername(uniqueUsername);

//     // ⚡ Initialize Socket.IO client
//     const newSocket = io({
//       path: "/api/socket_io",
//       transports: ["websocket"], // force WebSocket
//     });

//     setSocket(newSocket);

//     newSocket.on("message", (msg: Message) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => newSocket.disconnect();
//   }, []);

//   const sendMessage = () => {
//     if (!text.trim() || !socket) return;
//     socket.emit("message", { user: username, text });
//     setText("");
//   };

//   return (
//     <div className="p-4">
//       <h1>💬 Chat</h1>
//       <div className="border p-4 h-[60vh] overflow-y-auto">
//         {messages.map((m, i) => (
//           <div key={i}>
//             <b>{m.user}:</b> {m.text}
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </div>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }



import React from 'react'

const Home = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default Home
