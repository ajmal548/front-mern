"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type CategoryData = {
  _id: string;
  name: string;
  picture: string;
  status: string;
};

const PC_Lap = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:4000/category/');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className='md:px-[7%] py-[2%] px-4'>
      <div className='bg-white p-3 rounded-sm border shadow-md space-y-8'>
        <div className='flex items-baseline px-3 py-2 space-x-5'>
          <p className='md:text-3xl text-lg font-semibold text-neutral-700'>Pc & Laptop</p>
          <Link href={'#'} className='md:text-lg text-xs font-semibold text-blue-500'> See more</Link>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          {categories.slice(0,4).map((category) => (
            <button key={category._id} className='text-center flex flex-col items-center rounded-md '>
              <img src='src/category/lap.jpg' alt={category.name} className="zoomable-image  md:object-none md:h-48 md:w-96 mb-2 rounded-md" />
              <p className="font-semibold text-lg capitalize">{category.name}</p>
              <p className='font-medium text-sm text-slate-500 capitalize'>rating Star</p>
              <p className='font-medium text-sm text-slate-500 capitalize'>description</p>
              <div className='flex gap-2'>
              <p className='text-black font-semibold'>$:xxxx</p>
              <p className='line-through text-slate-500 font-medium'>$:xxxx</p>
              </div>
              
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PC_Lap
