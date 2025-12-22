"use client"

import { SessionProvider } from "next-auth/react" 
import React ,{ ReactNode  } from "react";
 
interface Pops {
 children: ReactNode
}

const Sessions = ({children}:Pops) => {
  return (
  <SessionProvider>
    {children}
  </SessionProvider>
  )
}

export default Sessions
