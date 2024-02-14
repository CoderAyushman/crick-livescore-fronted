'use client';
import React, { useEffect, useState } from 'react'
import GetData3 from "@/components/GetData3";

const upcomingMatches = () => {
  const [isClient, setIsClint] = useState(false);
  useEffect(() => {
    setIsClint(true);
  }, [])
  return (
    <>
      {/* <h1>Coming Soon...</h1> */}
      {isClient && <GetData3 />}
    </>
  )
}

export default upcomingMatches;