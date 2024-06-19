"use client";
import React, { useState, useEffect } from "react";

type CategoryData = {
  _id: string;
  name: string;
  picture: string;
  status: string;
};

type EditProductProps = {
  category: CategoryData | null;
  onClose: () => void;
};

const UpdateCategory: React.FC<EditProductProps> = ({ category, onClose }) => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [status, setStatus] = useState<string>("active");
  const [userId, setUserId] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
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
          throw new Error("Failed to fetch user data");
        }
        const json = await userRes.json();
        setUserId(json.user.id);
        setRole(json.user.role);

        if (category) {
          setId(category._id);
          setName(category.name);
          setPicture(category.picture);
          setStatus(category.status);
        }
      } catch (err) {
        setError("Error: Unable to fetch user data.");
      }
    };

    fetchUserData();
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role !== "admin") {
      setError("You do not have permission to update this category.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:4000/category/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, picture, status }),
      });
      if (!res.ok) {
        throw new Error("Failed to update category");
      }
      onClose();
    } catch (err) {
      setError("Error: Unable to update category.");
    }
  };

  return (
    <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 p-5 bg-transparent">
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="p-9 bg-sky-400  space-y-4">
      <div className="flex justify-center">
      <h2 className="text-2xl font-semibold">Edit Category</h2>
      </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label>Picture </label>
          <input
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-end gap-5">
        <button type="submit" className="bg-green-500 p-2 rounded-md hover:bg-green-700 hover:text-white">Save</button>
        <button type="button" onClick={onClose} className="bg-red-500 p-2 rounded-md hover:bg-red-700 hover:text-white">
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
