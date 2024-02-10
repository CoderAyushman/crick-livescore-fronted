'use client';
import React, { useEffect, useState } from 'react'
import GetData2 from "@/components/GetData2";

const upcomingMatches = () => {
  const [isClient, setIsClint] = useState(false);
  useEffect(() => {
    setIsClint(true);
  }, [])
  return (
    <>
      {/* <h1>Coming Soon...</h1> */}
      {isClient && <GetData2 />}
    </>
  )
}

export default upcomingMatches;