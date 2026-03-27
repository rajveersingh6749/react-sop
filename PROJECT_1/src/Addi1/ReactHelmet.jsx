import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet'

const ReactHelmet = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if(!res.ok) {
                throw new Error("Failed to Fetch Data!")
            }

            return res.json()
        })
        .then((data) => setPost(data[0]))
    }, [])


  return (
    <div>
      <h1>React Helmet</h1>
      <Helmet>
        <title>{post?.title || 'Loading...'} | JSON Placeholder Post</title>
        <meta name='description' content={post?.body} />
      </Helmet>
      <p>
        <b>Title:</b> {post?.title}
      </p>
      <p>
        <b>Body:</b> {post?.body}
      </p>
    </div>
  )
}

export default ReactHelmet
