"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Dashbord from '../Product/page';

const Vendor = () => {
  const [id, setId] = useState('');
  const [role ,setRole]=useState('')
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  // const router = useRouter();

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
          setId(json.user._id); 
          setRole(json.user.role)
        } else {
          setError(`Error: ${res.statusText}`);
        }
      } catch (err) {
        setError(`Error: Unable to fetch data.`);
      } 
    };

    fetchData();
  }, []);

  return (
    <div >
      <div >
        <h1 className="text-2xl font-bold mb-4 text-center">Vendor Dashboard</h1>
        <p>id : {id}</p>
        <p> role : {role}</p>
      </div>
    </div>
  );
};

export default Vendor;
