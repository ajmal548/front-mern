"use client"
import React, { useEffect, useState } from 'react'

type CategoryData = {
    _id: string;
    name: string;
    picture: string;
    status: string;
};

const AllProduct = () => {
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
            <div className='bg-white grid grid-cols-2 md:grid-cols-4  gap-4 p-2 shadow-md  '>
                {categories.map((category) => (
                    <button key={category._id} className=' text-center flex flex-col items-center p-4 rounded-md border '>
                        <img src='src/category/tv.jpg' alt={category.name} className="md:object-none md:h-48 md:w-96 mb-2 rounded-md" />
                        <p className="font-semibold text-lg capitalize">{category.name}</p>
                        <p className=' font-medium text-sm text-slate-500 capitalize'>_ products</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AllProduct;
