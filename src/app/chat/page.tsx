"use client";

import { useSession } from "next-auth/react";

import React, { useState, useEffect } from "react";

interface User {
  fullName: string;
}

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
 const {data:session, status} = useSession()
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users"); 
        const data = await res.json();
 
        if (res.ok) {
          setUsers(data.data);
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

  if (loading) return <p className="mt-40 text-center">Loading users...</p>;

  return (
    <div className="mt-10 text-black space-y-2">
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user, index) => <h2 key={index}>{user.fullName}</h2>  )
    )}
    <h1 className='text-amber-600'>{session?.user?.name}</h1>
    </div>
  );
};

export default Page;
