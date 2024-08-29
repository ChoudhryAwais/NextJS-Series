import Image from 'next/image'
import React from 'react'
import CarImage from "@/Image/car.jpg"

export default function page() {
    return (
        <div>
           <Image src={CarImage} alt='This is car image' width={100} height={100}/>
        </div>
    )
}
