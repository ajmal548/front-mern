"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = "http://localhost:4000/auth/login";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const json = await res.json();
        const token = json.token;
        localStorage.setItem("token", token);
        console.log("Login successful:", json);
        setError(""); // Clear any previous errors
      } else {
        const errorMessage = await res.json();
        if (errorMessage.message) {
          if (errorMessage.message.toLowerCase().includes("wrong password")) {
            setError("Incorrect password. Please try again.");
          } else {
            setError(errorMessage.message);
          }
        } else {
          setError("Login error: Invalid credentials");
        }
        console.error("Login error:", res.statusText);
      }
    } catch (err) {
      setError("invalid email or worng password");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none bg-white bg-opacity-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <Link href="/Signup" className="text-blue-500 hover:text-blue-700 text-sm">
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
