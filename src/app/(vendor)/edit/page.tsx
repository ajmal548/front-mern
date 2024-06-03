"use client";
import React, { useEffect, useState } from 'react';

type ProductData = {
  _id: string;
  name: string;
  category_id: string;
  quantity: number;
  brand: string;
  price: number;
  // description: string;
  // color: string;
  // warranty_info: string;
  // vendor_id: string;
  // unit: string;
  // pack_of_quantity: number;
  // boosting: string;
  // stock: string;
  // status: string;
  // review_id: string;
  // picture: string;
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
  const [vendor_id, setVendor_id] = useState('');
  const [review_id, setReview_id] = useState('');
  const [picture, setPicture] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (product) {
      setId(product._id);
      setName(product.name);
      setCategory_id(product.category_id);
      setBrand(product.brand);
      // setColor(product.color);
      // setWarranty_info(product.warranty_info);
      setPrice(product.price.toString());
      // setPack_of_quantity(product.pack_of_quantity.toString());
      // setUnit(product.unit.toString());
      // setStock(product.stock.toString())
      // setStatus(product.status.toString())
      // setBoosting(product.boosting);
      // setDescription(product.description);
      // setVendor_id(product.vendor_id);
      // setReview_id(product.review_id);
      // setPicture(product.picture);
      
    }
  }, [product]);

  const updateProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!product) {
      setErrorMessage("Product data is not available");
      return;
    }
    const url = `http://localhost:4000/product/${id}`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category_id, brand, color, warranty_info, price, quantity, unit,
          pack_of_quantity, boosting, stock, status, description, picture }),
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
      <div className="justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50  bg-red-200  p-5">
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
              <label className="block mb-2 text-sm font-medium text-gray-700">Vendor ID</label>
              <input
                type="text"
                name="name"
                value={vendor_id}
                onChange={(e) => setVendor_id(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Product Name"
              />
            </div>
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
