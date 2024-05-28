"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Product = () => {
  type ProductData = {
    name: string;
    brand: string;
    price: number;
    quantity: number;
    category_id: string;
  };

  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/product/guest");
        const data = await res.json();
        setProducts(data); 
      } catch (error) {
        console.error("fetching error data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold text-fuchsia-700'>Products</h1>
        <Link href={'addProduct'} className='p-3 bg-sky-600 text-white font-medium hover:bg-sky-400 hover:text-black rounded-md'>
          Add Product
        </Link>
      </div>
      <div className='py-5 px-2'>
        <ul className='grid grid-cols-2 gap-4'>
          {products.map((product, index) => (
            <li key={index} className='bg-fuchsia-200 p-3 rounded-md over-flow'>
              <p className='text-xl font-medium'>Name : {product.name}</p>
              <p>Brand : {product.brand}</p>
              <p>Price : {product.price}</p>
              <p>Category : {product.category_id}</p>
              <p>Quantity : {product.quantity}</p>
              <div className='flex justify-end'>
                <Link href={'/edit'}>
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Product;