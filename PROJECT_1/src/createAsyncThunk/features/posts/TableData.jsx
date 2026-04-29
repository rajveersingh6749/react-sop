import React from 'react'
import { deletePost } from './postsSlice'
import { useDispatch } from 'react-redux'
import '../../styles/style.css'

const TableData = ({ post, showToast }) => {
  const { id } = post

  const dispatch = useDispatch()

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this post?',
    )

    if (!confirmDelete) return

    try {
      await dispatch(deletePost({ id })).unwrap()
      showToast('Post Deleted')
    } catch (error) {
      showToast(`Failed to delete post ${error}`)
    }
  }

  return (
    <div className='item'>
      <div>
        <h3>{post.title}</h3>
        <p className='postCredit'>{post.body}</p>
      </div>
      <div>
        <button className='btn btn-danger' onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  )
}

export default TableData
