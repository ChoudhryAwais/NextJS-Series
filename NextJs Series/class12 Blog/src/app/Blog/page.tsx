import PostCards from '@/components/PostCards/PostCards'
import Link from 'next/link'

const getAllPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json()
}


export default async function Blog() {
    const postData = await getAllPost()
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
