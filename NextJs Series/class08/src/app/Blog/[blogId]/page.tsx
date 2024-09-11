'use client'
import Comments from '@/components/Comments/Comments';
import React, { useEffect, useState } from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function page({ params }: any) {
    const [postData, setPostData] = useState<Post | null>(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getSpecificPost()
    }, [])


    const getSpecificPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
        if (response.ok) {
            const specificData = await response.json()
            setPostData(specificData)
            const responseComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
            const commentsData = await responseComment.json()
            setComments(commentsData)
        }
    }
    return (
        <div>
            <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                {/* Post Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{(postData || {}).title}</h2>

                {/* Post Body */}
                <p className="text-gray-700 text-base mb-6">{(postData || {}).body}</p>

                {/* Comments Section */}
                {comments && comments.map(com => {
                    return (
                        <Comments commentData={com} />
                    )
                })}

            </div>
        </div>
    )
}
