"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Edit from "../edit/page";

type ProductData = {
  _id: string;
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
  const [update, setUpdate] = useState(false);
  const [select, setSelect] = useState<ProductData | null>(null);
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in first.");
        return;
      }

      const userUrl = "http://localhost:4000/auth/user";
      try {
        const userRes = await fetch(userUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userRes.ok) {
          const Json = await userRes.json();
          setData(Json);
          setId(Json.user.id);
          setRole(Json.user.role);

          const Res = await fetch(`http://localhost:4000/product/${Json.user._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (Json.user.role === "vendor") {
            if (Res.ok) {
              const productJson = await Res.json();
              setProducts(productJson);
            } else {
              setError(`Error: ${Res.statusText}`);
            }
          }
        } else {
          setError(`Error: ${userRes.statusText}`);
        }
      } catch (err) {
        setError("Error: Unable to fetch data.");
      }
    };

    fetchProduct();
  }, []);

  const handleDeleteProduct = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found, please log in first.");
      return;
    }

    try {
      if (deleteProductId) {
        const res = await fetch(`http://localhost:4000/product/${deleteProductId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setProducts(products.filter(product => product._id !== deleteProductId));
          setShowDeleteConfirm(false);
        } else {
          setError(`Error: ${res.statusText}`);
        }
      }
    } catch (err) {
      setError("Error: Unable to delete product.");
    }
  };

  const editProduct = (product: ProductData) => {
    setSelect(product);
    setUpdate(true);
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold text-fuchsia-700'>Products</h1>
        <Link href={'/addProduct'} className='p-3 bg-sky-600 text-white font-medium hover:bg-sky-400 hover:text-black rounded-md'>
          Add Product
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className='py-5 px-2'>
        <ul className='grid grid-cols-2 gap-4'>
          {products.map((product, index) => (
            <li key={index} className='bg-fuchsia-200 p-3 rounded-md overflow-hidden'>
              <p className='text-xl font-medium'>Name: {product.name}</p>
              <p>Brand: {product.brand}</p>
              <p>Price: {product.price}</p>
              <p>Category: {product.category_id}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Stock: {product.stock}</p>
              <div className='flex justify-end gap-x-5'>
                <button onClick={() => { setShowDeleteConfirm(true); setDeleteProductId(product._id); }}>
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <Link href={"#"} onClick={() => editProduct(product)} className='flex items-center'>
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        {update && select && (
          <Edit
            product={select}
            onClose={() => {
              setUpdate(false);
              setSelect(null);
            }}
          />
        )}
      </div>
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl mb-4">Are you sure you want to delete this product?</h2>
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleDeleteProduct}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
