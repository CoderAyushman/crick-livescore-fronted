'use client';
import React, { useEffect, useState } from 'react'
import CardForUM from './CardForUT';




const GetData2 =() => {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData=async()=> {
    try {
    //   const res = await fetch(`http://localhost:3200/api/data?page=${page} `, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    const res = await fetch(`https://cricket-tours-3.vercel.app/api/data?page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const posts = await res.json();
      
    setItems((prev) => [...prev, ...posts]);


  
    } catch (error) {
      console.log(error)
    }
  }
  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage(prevPage => prevPage + 1);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => { window.removeEventListener("scroll", handleInfiniteScroll) }
  }, [])
  return (
    <div className=''>
      <h1 className="text-4x1 font-extrabold text-gray-800">Upcoming Tours</h1>
      <div className=" items-stretch card-container flex-wrap flex-col md:flex-row flex ">
        {

          <>
            {items.map((series, index) => (
              <div className=" p-2  md:w-[33%] w-full" key={index}>


                <CardForUM series={series} />

              </div>
            ))}
          </>

        }
      </div>
    </div>
  )
      }

export default GetData2;
