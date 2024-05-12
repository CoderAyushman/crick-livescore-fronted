'use client';
import React, { useEffect, useState } from 'react'
import ScoreCard from './ScoreCard';


const GetData = async () => {
  
  const res = await fetch("https://cricket-live-score-ex-26.vercel.app/api/data", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const post = await res.json();
  return post;
}


const GetData1 = () => {
  const [allpost,setAllPost]=useState(null);
  useEffect(() => {
    const fetchData=async()=> {
      const posts = await GetData();
      setAllPost(posts);
      console.log(posts);
  
    }
    fetchData();
  }, []);
  return (
    <div className="pt-10">

      <h1 className="text-4x1 font-extrabold text-gray-800 min-w-[247px]">Live Matches Score</h1>
      <div className=" items-stretch card-container  flex-wrap flex-col md:flex-row flex ">
        {
          allpost && (
            <>
              
                {allpost.result.map((match, index) => (
                  <div className=" p-2  md:w-[33%] w-full min-w-[247px] " key={index}>
                    <ScoreCard match={match} />
                  </div>
                ))}
             
            </>
          )
        }
      </div>
    </div>
  )
}

export default GetData1;
