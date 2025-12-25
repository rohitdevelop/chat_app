"use client";
 
import React from "react";
import {Button} from "./ui/Button";

export default function Home() {
 
  return (
     <div className="md:h-[89vh] sm:min-h-[89vh] bg-linear-to-br from-blue-50 via-white to-purple-50">
      
       <main className="md:h-[89vh]  sm:min-h-[89vh] flex items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl w-full">
          
           <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Connect with anyone,
            <span className="block sm:inline bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}anywhere
            </span>
          </h1>

           <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience seamless communication with end-to-end encryption. 
            Chat, share, and collaborate in real-time.
          </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button text="Start Chatting" />
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">End-to-End Encrypted</h3>
              <p className="text-gray-600">Your messages are secured with military-grade encryption.</p>
            </div>

             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Instant message delivery with real-time synchronization.</p>
            </div>

             <div className="sm:col-span-2 lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Group Chats</h3>
              <p className="text-gray-600">Create groups and collaborate with your team effortlessly.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}