import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
  const [redirect, setRedirect] = useState(false)

  const handleClick = () => {
    setIsLoggedIn(true)
    setRedirect(true)
  }


  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleClick}>Login</button>
      {redirect && <Navigate to='/module7demo2/dashboard' replace />}
    </div>
  )
}

export default Login
