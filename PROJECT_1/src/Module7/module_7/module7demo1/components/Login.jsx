import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  })

  const [user, setUser] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(loginDetails)
    console.log(loginDetails)
  }
  console.log(user)

  return (
    <div>
      <form>
        <label>
          Email:{' '}
          <input
            type='email'
            name='email'
            value={loginDetails.email}
            onChange={handleChange}
            required
          />
        </label>{' '}
        <br />
        <br />
        <label>
          Password:{' '}
          <input
            type='password'
            name='password'
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
        </label>
        <br /> <br />
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </form>

      {user && <Navigate to='/module7demo1/' />}
    </div>
  )
}

export default Login
