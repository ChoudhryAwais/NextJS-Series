import React from 'react'

export default function PostCards(props: any) {
    const { postData } = props

    console.log("postData", postData)
    return (
        <div>
            <div className="flex">
                <div className="max-w-sm rounded shadow-lg bg-white m-4">
                    {/* Post Image */}
                    <img
                        className="w-full"
                        src="https://via.placeholder.com/400x200"
                        alt="Post Image"
                    />

                    {/* Post Content */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{postData.title}</div>
                        <p className="text-gray-700 text-base">
                            {postData.body}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    )
}
