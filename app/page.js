'use client';
import Head from 'next/head';
import GetData1 from '@/components/GetData1';
import React, { useEffect, useState } from 'react'
export default function Home() {
  const [isClient,setIsClint]=useState(false);
    useEffect(()=>{
        setIsClint(true);
    },[])
  return (
    <>
     <Head>
        <title>crick-info</title>
      </Head>
    {isClient && <GetData1/>}
    </>
  )
}
