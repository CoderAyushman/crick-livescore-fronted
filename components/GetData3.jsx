'use client';
import React, { useEffect, useState } from 'react'
import CardForPT from './CardForPT';


const GetData3 = () => {
  const [allpost, setAllPost] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  //Data fatching
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://cricket-tours-3.vercel.app/api/data/past-series?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }

      });
      const post = await res.json();
      setAllPost(1);
      setItems((prevItems) => [...prevItems, ...post]);

    } catch (error) {
      console.log(error)
      setError(error);
    }
    finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {

    fetchData();

  }, [page]);

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
    setIsLoading(true);
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => { window.removeEventListener("scroll", handleInfiniteScroll) }
  }, [])
  return (
    <div className='pt-10'>
      <h1 className="text-4x1 font-extrabold text-gray-800">Past Tours</h1>
      <div className=" items-stretch card-container flex-wrap flex-col md:flex-row flex ">

        {/* <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={true} // Replace with a condition based on your data source
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        > */}
        {
          
            <>
              {items.map((series, index) => (
                <div className=" p-2  md:w-[33%] w-full" key={index}>
                  <CardForPT series={series} />
                </div>
              ))}
            </>
          
        }
        {/* </InfiniteScroll> */}

        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  )
}

export default GetData3;
