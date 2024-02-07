'use client';
import GetData1 from '@/components/GetData1';
import React, { useEffect, useState } from 'react'
export default function Home() {
  const [isClient,setIsClint]=useState(false);
    useEffect(()=>{
        setIsClint(true);
    },[])
  return (
    <>
    {isClient && <GetData1/>}
    </>
  )
}
