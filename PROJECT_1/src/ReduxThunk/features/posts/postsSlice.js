const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null }

    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload }

    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload }

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload),
      }

    default:
      return state
  }
}

export default postsReducer
