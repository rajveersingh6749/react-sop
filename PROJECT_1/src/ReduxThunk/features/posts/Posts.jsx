import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsThunks'
import PostItem from './PostItem'
import Toast from '../../components/Toast'
import '../../styles/style.css'

const Posts = () => {
  const { posts, loading, error } = useSelector((state) => state)
  const dispatch = useDispatch()

  const [toast, setToast] = useState('')
  const [page, setPage] = useState(1)

  const limit = 5

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2000)
  }

  let content
  let startIndex

  if (loading) {
    content = <div className='spinner'></div>
  } else if (error) {
    content = (
      <div className='error_box'>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchPosts())}>Retry</button>
      </div>
    )
  } else {
    startIndex = (page - 1) * limit
    const paginatedPosts = posts.slice(startIndex, startIndex + limit)
    content = paginatedPosts.map((post) => (
      <PostItem key={post.id} post={post} showToast={showToast} />
    ))
  }

  return (
    <div className='container'>
      <h2 className='app_title'>Posts</h2>
      <div className='app'>
        {toast && <div className='toast'>{toast}</div>}
        {content}
      </div>
      <div className='pagination'>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        <button
          disabled={startIndex + limit >= posts.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Posts
