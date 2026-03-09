import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import { useState } from 'react'
import './Second.css'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const Second = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const ProtectedRoute = ({ children }) => {
  //   if (!isLoggedIn) {
  //     return <Navigate to='/login' replace={true} />
  //   }
  //   return children
  // }

  return (
    <div>
      <div className='nav_container'>
        <div className='custom_container'>
          <nav className='nav_bar'>
            <Link to='/module7demo2/' className='nav_link'>
              Home
            </Link>{' '}
            |{' '}
            <Link to='/module7demo2/dashboard' className='nav_link'>
              Dashboard
            </Link>{' '}
            |{' '}
            <Link to='/module7demo2/profile' className='nav_link'>
              Profile
            </Link>{' '}
            |{' '}
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <Link to='/module7demo2/login' className='nav_link'>
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>

      <div className='custom_container'>
        <div className='route_container'>
          <Routes>
            <Route index element={<Home />} />

            <Route
              path='login'
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />

            <Route
              path='dashboard'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path='profile'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Second
