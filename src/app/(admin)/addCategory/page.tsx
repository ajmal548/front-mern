"use client"
import React, { useEffect, useState } from 'react'

const AddCategory = () => {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [status, setStatus] = useState('active');
    const [id, setId] = useState('');
    const [role, setRole] = useState('')
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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
                    setData(json);
                    setId(json.user._id);
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

    const newCategory = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = "http://localhost:4000/category/"
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(url, {
                method: "post",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ name, picture, status })
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
        } catch (error) {
            setErrorMessage("Error: ");
            setSuccessMessage("");
            console.error("Error:", error);
        }
    }


    return (
        <div className="p-4">
            <form className="space-y-4 bg-stone-400 p-5" onSubmit={newCategory}>
                <div className="mb-4">
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
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Images</label>
                    <input
                        type="file"
                        name="images"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                        multiple
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
    )
}

export default AddCategory
