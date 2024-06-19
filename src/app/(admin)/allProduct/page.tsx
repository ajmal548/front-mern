"use client"
import React, { useEffect, useState } from 'react';

type ProductData = {
  _id: string;
  vendor_id:string;
  name: string;
  category_id: string;
  brand: string;
  color: string;
  warranty_info: string;
  price: number;
  quantity: number;
  unit: number;
  pack_of_quantity: number;
  boosting: string;
  stock: string;
  status: string;
  description: string;
  review_id: string;
  picture: string;
};

const Product = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in first.");
        return;
      }

      try {
        const userRes = await fetch("http://localhost:4000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userRes.ok) {
          setError(`Error: ${userRes.statusText}`);
          return;
        }

        const userJson = await userRes.json();
        const { role } = userJson.user;

        if (role === "admin" ) {
          const productRes = await fetch("http://localhost:4000/product", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (productRes.ok) {
            const productJson = await productRes.json();
            setProducts(productJson);
          } else {
            setError(`Error: ${productRes.statusText}`);
          }
        } else {
          setError("You do not have the required role to view products.");
        }
      } catch (err) {
        setError("Error: Unable to fetch data.");
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className='py-5 px-2'>
          <ul className='grid grid-cols-2 gap-4'>
            {products.map((product) => (
              <li key={product._id} className='bg-fuchsia-200 p-3 rounded-md overflow-hidden'>
                <p className='text-xl font-medium'>Name: {product.name}</p>
                <p className='text-xl '>Vendor ID:{product.vendor_id}</p>
                <p>Brand: {product.brand}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category_id}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Stock: {product.stock}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Product;
