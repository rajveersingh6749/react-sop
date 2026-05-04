import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

// FETCH POSTS
export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' })

  try {
    const response = await axios.get(BASE_URL)
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({
      type: 'FETCH_POSTS_FAILURE',
      payload: error.message,
    })
  }
}

// DELETE POST
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`)

    if (res.status === 200) {
      dispatch({ type: 'DELETE_POST', payload: id })
    }
  } catch (error) {
    console.log('Delete failed:', error)
  }
}
