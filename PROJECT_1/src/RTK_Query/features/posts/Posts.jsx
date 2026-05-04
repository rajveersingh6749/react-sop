import { useState } from 'react'
import { useGetPostsQuery } from './postApi'
import PostItem from './PostItem'
import '../../styles/style.css'

const Posts = () => {
  const { data: posts = [], isLoading, isError, refetch } = useGetPostsQuery()

  const [page, setPage] = useState(1)
  const limit = 5

  if (isLoading) return <div className='spinner'></div>

  if (isError)
    return (
      <div className='error_box'>
        <p>Failed to load posts</p>
        <button onClick={refetch}>Retry</button>
      </div>
    )

  // Pagination
  const start = (page - 1) * limit
  const paginated = posts.slice(start, start + limit)

  return (
    <div className='container'>
      <h2>Posts</h2>

      <div className='app'>
        {paginated.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}

        <div className='pagination'>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>Page {page}</span>

          <button
            disabled={start + limit >= posts.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts
