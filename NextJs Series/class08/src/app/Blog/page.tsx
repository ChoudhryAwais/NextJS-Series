'use client'

import PostCards from '@/components/PostCards/PostCards'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Blog() {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        getAllPost()
    }, [])

    const getAllPost = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPostData(data)
    }
    //[{},{},{}]
    return (
        <div className='flex flex-wrap justify-center'>
            {postData.map((eachPost: any) => {  ///[{},{},{}] []
                return (
                    <Link href={`/Blog/${eachPost.id}`}><PostCards postData={eachPost} /></Link>
                )
            })}

        </div>
    )
}
