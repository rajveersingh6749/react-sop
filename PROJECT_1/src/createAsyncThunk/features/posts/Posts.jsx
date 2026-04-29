import { useDispatch, useSelector } from 'react-redux'
import { getPostsError, getPostsStatus, selectAllPosts } from './postsSlice'
import { fetchPosts } from './postsSlice'
import '../../styles/style.css'
import { useEffect, useState } from 'react'
import TableData from './TableData'

const Posts = () => {
  const [toast, setToast] = useState('')
  const [page, setPage] = useState(1)
  const limit = 5

  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const status = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  const showToast = (message) => {
    setToast(message)

    setTimeout(() => {
      setToast('')
    }, 2000)
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  const start = (page - 1) * limit

  let content

  if (status === 'loading') {
    content = <div className='spinner'></div>
  } else if (status === 'succeeded') {
    // change the order of the posts
    const orderedPosts = [...posts].sort((a, b) => b.id - a.id)

    const paginatedPosts = orderedPosts.slice(start, start + limit)

    content = paginatedPosts.map((post) => (
      <TableData key={post.id} post={post} showToast={showToast} />
    ))
  } else if (status === 'failed') {
    content = (
      <div className='error_box'>
        <h3>Something went wrong</h3>
        <p>{error}</p>
        <button className='btn retry_btn' onClick={() => dispatch(fetchPosts())}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <section className='section'>
      <div className='container'>

        <h2 className='title'>Posts</h2>

        {/* Posts */}
        <div className='posts_wrapper'>{content}</div>

        {/* Pagination Controls HERE */}
        {status === 'succeeded' && (
          <div className='pagination'>
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              Prev
            </button>

            <span>Page {page}</span>

            <button
              disabled={start + limit >= posts.length}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {toast && <div className='toast'>{toast}</div>}
    </section>
  )
}

export default Posts
