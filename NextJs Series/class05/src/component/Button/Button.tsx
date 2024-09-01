'use client'

import React, { useEffect, useState } from 'react'

export default function Button() {

    const [counter, setCounter] = useState(0)

    const handleButton = () => {
        setCounter((previous) => {
            if (previous >=10) {
                return 0
            } else {
                return previous + 1
            }

        })

    }
    useEffect(() => {
        console.log("New Counter:", counter)

    }, [counter])


    return (
        <div>
            <div>Counting : {counter}</div>
            <button className='border-2 bg-slate-900 text-white' onClick={handleButton}>Plus</button>
        </div>
    )
}
