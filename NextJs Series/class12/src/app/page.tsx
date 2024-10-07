
const getPostData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // To ensure the data is fetched server-side only
    cache: 'no-store',
  })

  return response.json()
}

export default async function Home() {

  const postData = await getPostData()
  console.log("postData", postData)

  return (
    <div>
      {postData.map((post: any) =>
        <p>{post.title}</p>
      )}
    </div>
  );
}
