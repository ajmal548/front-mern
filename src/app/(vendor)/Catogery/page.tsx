"use client"
import React, { useEffect, useState } from 'react';

type CategoryData = {
  _id: string;
  name: string;
  picture: string;
  status: string;
};

const Category = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        setError("error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto pb-4">
      <table className="min-w-full bg-white border ">
        <caption className="caption-top text-fuchsia-600 font-semibold text-2xl p-6">
          Category List
        </caption>
        <thead>
          <tr className="bg-fuchsia-100">
            <th className="py-2 px-4 border-b text-center">ID</th>
            <th className="py-2 px-4 border-b text-center">Name</th>
            <th className="py-2 px-4 border-b text-center">Picture</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id} className='bg-slate-300'>
              <td className="py-2 px-4 border-b text-center">{category._id}</td>
              <td className="py-2 px-4 border-b text-center">{category.name}</td>
              <td className="py-2 px-4 border-b text-center">
                <img
                  src={category.picture}
                  alt={category.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="py-2 px-4 border-b text-center">{category.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
