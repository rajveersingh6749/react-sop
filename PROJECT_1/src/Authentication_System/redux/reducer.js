const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  token: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      }

    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      }

    case 'LOGOUT':
      localStorage.removeItem('token')
      return initialState

    default:
      return state
  }
}
