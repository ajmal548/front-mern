"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const Vendor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ph, setPh] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [role ,setRole] = useState("vendor")

  const newSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }
    if (!ph) {
      setErrorMessage("Please enter your mobile number.");
      return;
    }
    const signupurl = "http://localhost:4000/auth/signup";
    try {
      const res = await fetch(signupurl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          ph,
          role
        }),
      });
      const json = await res.json();
      console.log(json);
    if (res.ok) {
      setSuccessMessage("Signup successful!");
      setErrorMessage("");
    } else {
      if (res.status === 400) {
        if (json.message === "Email already exists") {
          setErrorMessage("Email already exists.");
        } else if (json.message === "Mobile number already exists") {
          setErrorMessage("Mobile number already exists.");
        } else {
          setErrorMessage(`Error: ${json.message || "Something went wrong."}`);
        }
      } else {
        setErrorMessage(`Error: ${json.message || "Something went wrong."}`);
      }
      setSuccessMessage("");
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("Something went wrong. Please try again.");
    setSuccessMessage("");
  }
};


  return (
    <>
      <div  className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form onSubmit={newSignup} className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center ">Vendor Sign Up</h1>
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Username
          </label>
          <input
            id="name"
            value={name}
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ph">
            Mobile No
          </label>
          <input
            id="ph"
            value={ph}
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter 10 digit"
            onChange={(e) => setPh(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <Link href='/Login' className="text-red-500 hover:text-black text-sm">
            Already have an account?
          </Link>
        </div>
      </form>
      </div>
    </>
  )
}

export default Vendor
