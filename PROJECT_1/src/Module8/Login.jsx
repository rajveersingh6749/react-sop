import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (email === '777rajveersingh@gmail.com' && password === 'Carpediem@26') {
      setIsLoggedIn(true)
      // setLoggedIn(true)
      setError('')
    } else {
      setError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    // setLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  if (isLoggedIn) {
    return (
      <div>
        <h2>Module 8</h2>
        <hr />

        <Link to='/module8/module8demo1' className='nav_link3'>
          Module8demo1
        </Link>
        <br />

        <Link to='/module8/module8demo2' className='nav_link3'>
          Module8demo2
        </Link>
        <br />

        <Link to='/module8/module8demo3' className='nav_link3'>
          Module8demo3
        </Link>

        <br />
        <br />

        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Login</h2>
      <hr />

      <input
        type='email'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ color: 'red' }}>{error}</p>
    </div>
  )
}

export default Login
