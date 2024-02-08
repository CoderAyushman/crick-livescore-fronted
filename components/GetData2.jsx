'use client';
import React, { useEffect, useState } from 'react'
import CardForUM from './CardForUM';
const GetData = async () => {
  //     const res=await fetch("http://localhost:3000/api/data",{
  //         method:'GET',
  //         headers:{
  //             'Content-Type':'application/json',
  //         }
  //     });
  const res = await fetch("http://localhost:3000/api/data", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const post = await res.json();
  return post;
}


const GetData2 = () => {
  const [allpost, setAllPost] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const posts = await GetData();
      setAllPost(posts);
      

    }
    fetchData();
  }, []);
  return (
    <div className=''>
      <h1 className="text-4x1 font-extrabold text-gray-800">Upcoming Matches</h1>
      <div className=" items-stretch card-container flex-wrap flex-col md:flex-row flex ">
        {
          allpost && (
            <>
              {allpost.result.map((match, index) => (
                <div className=" p-2  md:w-[33%] w-full" key={index}>
                  <CardForUM match={match} />
                </div>
              ))}
            </>
          )
        }
      </div>
    </div>
  )
}

export default GetData2;
