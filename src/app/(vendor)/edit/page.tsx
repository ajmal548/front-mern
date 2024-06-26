"use client";
import React, { useEffect, useState } from 'react';

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

type EditProductProps = {
  product: ProductData | null;
  onClose: () => void;
};

const Edit: React.FC<EditProductProps> = ({ product, onClose }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [warranty_info, setWarranty_info] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [pack_of_quantity, setPack_of_quantity] = useState('');
  const [boosting, setBoosting] = useState('');
  const [stock, setStock] = useState('stock');
  const [status, setStatus] = useState('active');
  const [description, setDescription] = useState('');
  const [review_id, setReview_id] = useState('');
  const [picture, setPicture] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('')
  const [data, setData] = useState(null);
  const [error, setError] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in first.");
        return;
      }
      const url = "http://localhost:4000/auth/user";
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const json = await res.json();
          console.log("user role", json);
          setData(json);
          setUserId(json.user._id);
          setRole(json.user.role);

          if (product) {
            setId(product._id);
            setName(product.name);
            setCategory_id(product.category_id);
            setBrand(product.brand);
            setColor(product.color);
            setWarranty_info(product.warranty_info);
            setPrice(product.price.toString());
            setQuantity(product.quantity.toString());
            setUnit(product.unit.toString());
            setPack_of_quantity(product.pack_of_quantity.toString());
            setBoosting(product.boosting);
            setDescription(product.description);
            setReview_id(product.review_id);
            setStatus(product.status);
            setStock(product.stock)
            // setPicture(product.picture);

          }
        } else {
          setError(`Error: ${res.statusText}`);
        }
      } catch (err) {
        setError(`Error: Unable to fetch data.`);
      }
    };

    fetchData();
  }, [product]);

  const updateProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (!product) {
      setErrorMessage("Product data is not available");
      return;
    }
    console.log("id:",id);
    const url = `http://localhost:4000/product/${id}`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          name, category_id, brand, color, warranty_info, price, quantity, unit,
          pack_of_quantity, boosting, stock, status, description, picture
        }),
      });
      if (res.ok) {
        setSuccessMessage("Product updated successfully");
        setErrorMessage("");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Failed to update product");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Error updating product");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center  bg-slate-500 bg-opacity-100  p-5">
        <form className="space-y-4" onSubmit={updateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Product Name"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={category_id}
                onChange={(e) => setCategory_id(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Category"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Brand"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
              <input
                type="text"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Color"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Warranty Info</label>
              <input
                type="text"
                name="warranty"
                value={warranty_info}
                onChange={(e) => setWarranty_info(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Warranty"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Stock Quantity</label>
              <input
                type="number"
                name="stock"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Stock Quantity"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Unit</label>
              <input
                type="number"
                name="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Unit"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Pack of Quantity</label>
              <input
                type="number"
                name="pfquantity"
                value={pack_of_quantity}
                onChange={(e) => setPack_of_quantity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Pack of Quantity"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Boosting</label>
              <input
                type="text"
                name="boosting"
                value={boosting}
                onChange={(e) => setBoosting(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Boosting"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700">Stock Status</label>
              <select
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="stock">In Stock</option>
                <option value="outofstock">Out of Stock</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700">Status</label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Description"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Review</label>
              <input
                type="text"
                name="category"
                value={review_id}
                onChange={(e) => setReview_id(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Category"
              />
            </div>
          </div>
          {/* <div>000  */}
          <div className="flex justify-end space-x-4">
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
