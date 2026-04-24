import { loginFailure, loginRequest, loginSuccess } from '../redux/actions'

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest())

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (
        credentials.email === '777rajveersingh@gmail.com' &&
        credentials.password === 'Carpediem@26'
      ) {
        const fakeData = { token: 'fake-token-123' }

        localStorage.setItem('token', fakeData.token)
        dispatch(loginSuccess(fakeData))
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      dispatch(loginFailure(error.message))
    }
  }
}
