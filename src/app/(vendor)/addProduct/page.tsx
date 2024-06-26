"use client"
import React, { useState, useEffect } from 'react'

const addProduct = () => {
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
  const [vendor_id, setVendor_id] = useState('');
  const [review_id, setReview_id] = useState('');
  const [picture, setPicture] = useState('');
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [id, setId] = useState('');
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
          setVendor_id(json.user._id);
          setRole(json.user.role);
        } else {
          setError(`Error: ${res.statusText}`);
        }
      } catch (err) {
        setError(`Error: Unable to fetch data.`);
      }
    };

    fetchData();
  }, [role]);

  const newProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = "http://localhost:4000/product/";
    try {

      console.log("role:", role)
      if (role === "vendor") {

        const res = await fetch(url, {
          method: "post",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({
            name, category_id,
            brand, color,
            warranty_info, price,
            quantity, unit,
            pack_of_quantity, boosting,
            stock, status,
            // description,picture,
            vendor_id, review_id,
          })
        });
        if (res.ok) {
          setSuccessMessage("Product added successfully'");
          setErrorMessage("");
          console.log('Product added successfully');
        } else {
          const errorData = await res.json();
          setErrorMessage(errorData.message || 'Failed to add product');
          setSuccessMessage("");
          console.error('Failed to add product');
        }
      }
    } catch (error) {
      setErrorMessage("Error: ");
      setSuccessMessage("");
      console.error("Error:", error);
    }
  }
  return (
    <>
      <div className="container mx-auto p-6  rounded-lg shadow-lg bg-fuchsia-300">
        <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
        <form className="space-y-4" onSubmit={newProduct}>
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
              <select
                name="category"
                value={category_id}
                onChange={(e) => setCategory_id(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              > <option value="stock">In Stock</option>
                <option value="outofstock">Out of Stock</option>
                </select>
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
                type="number"
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
            {/* <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">Vendor ID</label>
              <input
                type="text"
                name="name"
                value={vendor_id}
                onChange={(e) => setVendor_id(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Product Name"
              />
            </div> */}
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Product Images</label>
            <input
              type="file"
              name="images"
              value={picture}
              multiple
              onChange={(e) => setPicture(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end space-x-4">
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default addProduct
