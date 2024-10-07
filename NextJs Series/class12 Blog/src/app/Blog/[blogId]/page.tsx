import Comments from '@/components/Comments/Comments';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getSpecificPost = async (params: any) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    if (response.ok) {
        const specificData = await response.json()
        const responseComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
        const commentsData = await responseComment.json()
        return {
            postSpecificData: specificData,
            commentsData: commentsData
        }
    }
}


export default async function page({ params }: any) {
    const data: any = await getSpecificPost(params)
    console.log(data)
    return (
        <div>
            <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                {/* Post Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{(data.postSpecificData || {}).title}</h2>

                {/* Post Body */}
                <p className="text-gray-700 text-base mb-6">{(data.postSpecificData || {}).body}</p>

                {/* Comments Section */}
                {data.commentsData && data.commentsData.map((com: any) => {
                    return (
                        <Comments commentData={com} />
                    )
                })}

            </div>
        </div>
    )
}
