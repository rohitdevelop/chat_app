// // /pages/api/socket_io.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { Server as IOServer } from "socket.io";
// import { Server as HTTPServer } from "http";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (!res.socket.server.io) {
//     console.log("🧩 Initializing Socket.IO server...");

//     const httpServer: HTTPServer = res.socket.server as any;
//     const io = new IOServer(httpServer, {
//       path: "/api/socket_io",
//       cors: {
//         origin: "*", // allow all origins in dev
//       },
//     });

//     io.on("connection", (socket) => {
//       console.log("⚡ New client connected:", socket.id);

//       socket.on("message", (msg) => {
//         io.emit("message", msg); // broadcast to all
//       });

//       socket.on("disconnect", () => {
//         console.log("❌ Client disconnected:", socket.id);
//       });
//     });

//     // Attach to Next.js socket server
//     res.socket.server.io = io;
//   } else {
//     console.log("✅ Socket.IO server already running");
//   }

//   res.end();
// }
