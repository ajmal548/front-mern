"use client"
import React, { useState } from 'react'

const Edit = () => {
  const [name, setName] = useState('name');
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <form className="space-y-4"
      //onSubmit={updateProduct}
      >
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

        <div className="flex justify-end space-x-4">
          {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
          <button type="button" className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
        </div>
      </form>
    </>
  )
}

export default Edit
