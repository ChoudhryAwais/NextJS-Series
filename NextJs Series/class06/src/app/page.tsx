'use client'

import { useState, useEffect } from "react"

export default function Home() {

  const [counter, setCounter] = useState(0)

  function handleMinus() {
    //counter = counter - 1
    setCounter((previous) => {
      if (previous === 0)
        return previous
      else
        return previous - 1
    })
  }
  function handlePlus() {
    //counter = counter + 1
    setCounter((previous) => {
      if (previous >= 10)
        return 0
      else
        return previous + 1
    }
    )
  }

  useEffect(() => {
    console.log("Component Render")

    return () => {
      alert("Component Unmount")
    };


  }, [counter])


  return (
    <div>
      <button className="bg-gray-600 p-5" onClick={handleMinus}>-</button>
      <span className="p-3">{counter}</span>
      <button className="bg-gray-600 p-5" onClick={handlePlus}>+</button>
    </div>
  );
}
