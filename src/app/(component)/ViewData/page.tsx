"use client";
import React, { useEffect, useState } from "react";

const ViewData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

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
        } else {
          setError(`Error: ${res.statusText}`);
        }
      } catch (err) {
        setError(`Error `);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
      <div className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">View Data</h1>
        {error && <p className="text-red-500">{error}</p>}
        {data ? (
          <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p className="text-white">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default ViewData;
