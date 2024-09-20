import React, { useState } from 'react'

export default function Form() {
    const [userName, setName] = useState("")
    const [contact, setContact] = useState("")


    const handleName =(e:any)=>{
        setName(e.target.value)
    }
    const handleNumber =(e:any)=>{
        setContact(e.target.value)
    }

    const handleSubmit=async()=>{
        const userObj = {
            name:userName,
            contactNum:contact
        }
        const requestBackend =await fetch("http://localhost:3000/api/users",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userObj)
        })
        console.log(requestBackend)
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">User Form</h2>

            {/* Username Field */}
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your username"
                    onChange={handleName}
                    required
                />
            </div>

            {/* Contact Number Field */}
            <div className="mb-4">
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                </label>
                <input
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your contact number"
                    onChange={handleNumber}
                    required
                />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
