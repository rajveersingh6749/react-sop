import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from './ThunkMiddleware'
import './Authentication.css'

const Authentication = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, error, isAuthenticated } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      setEmail('')
      setPassword('')
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
  }

  return (
    <div>
      {isAuthenticated && <p>✅ Logged in!</p>}
      <div className='form_container'>
        {' '}
        <h1>MyApp</h1>
        <h2>Sign in to MyApp</h2>
        <div className='form_row'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='enter your email...'
          />
        </div>
        <div className='form_row'>
          <label>Password:</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='enter your password...'
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading || email.trim() === '' || password.trim() === ''}
          className='login_btn'
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className='btn_container'>
          <span>
            Don't have an account?{' '}
            <button className='signup_btn'>Sign Up</button>
          </span>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  )
}

export default Authentication
