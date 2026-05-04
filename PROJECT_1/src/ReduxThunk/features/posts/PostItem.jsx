import { useDispatch } from 'react-redux'
import { deletePost } from './postsThunks'
import '../../styles/style.css'

const PostItem = ({ post, showToast }) => {
  const dispatch = useDispatch()

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Delete this post?')
    if (!confirmDelete) return

    await dispatch(deletePost(post.id))
    showToast('Post Deleted')
  }

  return (
    <div className='item'>
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>

      <button className='delete_btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PostItem
