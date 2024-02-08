'use client';
import React, { useEffect, useState } from 'react'
import ScoreCard from './ScoreCard';

const GetData = async () => {
//       const res=await fetch("http://localhost:5900/api/data",{
//           method:'GET',
//           headers:{
//               'Content-Type':'application/json',
//           }
//       });
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
  const [allpost, setAllPost] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const posts = await GetData();
      setAllPost(posts);
      console.log(posts);

    }
    fetchData();
  }, []);
  return (
    <div className=''>
      <h1 className="text-4x1 font-extrabold text-gray-800">Live Matches Score</h1>
      <div className=" items-stretch card-container flex-wrap flex-col md:flex-row flex ">
        {
          allpost && (
            <>
              {allpost.result.map((match, index) => (
                <div className=" p-2  md:w-[33%] w-full" key={index}>
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
