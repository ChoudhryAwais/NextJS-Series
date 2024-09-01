'use client'

import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handleName = (event: any) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    
    const handleNumber = (event:any) =>{
        setNumber(event.target.value)
    }

    return (
        <div>
            <input
                placeholder='Please enter your name'
                type='text'
                onChange={handleName}
                
            />
            <br />
            <input className='mt-2' 
            placeholder='Please enter your contact number' 
            type='number'
            onChange={handleNumber}
             />
            <br />

            <div>
                <h5>User Detail:</h5>
                <p>Name: {name}</p>
                <p>Phone number: {number}</p>

            </div>

        </div>
    )
}
