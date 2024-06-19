"use client"
import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-400">
      <form className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md w-full max-w-sm space-y-16">
        <div>
          <h1 className="flex justify-center text-2xl font-semibold">______ Market</h1>
        </div>
        <div className="flex justify-between">
          <Link href="/Signup" className="bg-blue-400 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 duration-700">Signup
          </Link>
          <Link href="/Login" className="bg-blue-400 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 duration-700">Login
          </Link>
        </div>
        <div>
          <Link href="/main" className="flex justify-center italic font-semibold text-red-400">Guest
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Main
