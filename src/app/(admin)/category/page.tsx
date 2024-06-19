"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Edit from "../updateCategory/page";

type CategoryData = {
  _id: string;
  name: string;
  picture: string;
  status: string;
};

const AdminCategory: React.FC = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [update, setUpdate] = useState(false);
  const [select, setSelect] = useState<CategoryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState<string>("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please log in first.");
        setLoading(false);
        return;
      }
      try {
        const userRes = await fetch("http://localhost:4000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userRes.ok) {
          const json = await userRes.json();
          setRole(json.user.role);
          setUserId(json.user.userId);

          const res = await fetch("http://localhost:4000/category/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await res.json();
          setCategories(data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (err) {
        setError("Error: Unable to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const deleteCategory = async (id: string) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found, please log in first.");
      return;
    }
    try {
      const res = await fetch(`http://localhost:4000/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete category");
      }
      setCategories(categories.filter((category) => category._id !== id));
    } catch (err) {
      setError("Error: Unable to delete category.");
    }
  };

  const confirmDeleteCategory = (id: string) => {
    setCategoryToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = () => {
    if (categoryToDelete) {
      deleteCategory(categoryToDelete);
    }
    setShowDeleteConfirm(false);
    setCategoryToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
    setCategoryToDelete(null);
  };

  const edit = (category: CategoryData) => {
    setSelect(category);
    setUpdate(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex justify-end items-center mb-4">
        <Link href="/addCategory"
          className="p-3 bg-sky-600 text-white font-medium hover:bg-sky-400 hover:text-black rounded-md">
          Add Category
        </Link>
      </div>
      <table className="min-w-full bg-white border">
        <caption className="caption-top text-fuchsia-600 font-semibold text-2xl p-6">
          Category List
        </caption>
        <thead>
          <tr className="bg-fuchsia-100">
            <th className="py-2 px-4 border-b text-center">ID</th>
            <th className="py-2 px-4 border-b text-center">Name</th>
            <th className="py-2 px-4 border-b text-center">Picture</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id} className="bg-slate-300">
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
              <td className="py-2 px-4 border-b text-center space-x-3">
                <button onClick={() => edit(category)} className="p-2 bg-orange-300 rounded-lg hover:bg-orange-500">Edit</button>
                <button className="p-2 bg-red-500 rounded-lg hover:bg-red-600" onClick={() => confirmDeleteCategory(category._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {update && select && (
          <Edit
            category={select}
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
            <h2 className="text-xl mb-4">Are you sure you want to delete this category?</h2>
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={handleDeleteCancel}>Cancel</button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleDeleteConfirm}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategory;
