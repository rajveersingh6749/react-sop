import { useDeletePostMutation } from './postApi'
import '../../styles/style.css'

const PostItem = ({ post }) => {
  const [deletePost] = useDeletePostMutation()

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Delete this post?')
    if (!confirmDelete) return

    try {
      await deletePost(post.id).unwrap()
      alert('Post deleted')
    } catch (err) {
      alert('Failed to delete', err)
    }
  }

  return (
    <div className='card'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PostItem
