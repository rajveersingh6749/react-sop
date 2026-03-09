import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile'
import { useState } from 'react'
import './Fourth.css'
import NotFound from './components/NotFound'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import ProtectedRoute from './components/protectedRoute.jsx'

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
            <Link to='/module7demo4/' className='nav_link'>
              Home
            </Link>{' '}
            |{' '}
            <Link to='/module7demo4/about' className='nav_link'>
              About
            </Link>{' '}
            |{' '}
            <Link to='/module7demo4/dashboard' className='nav_link'>
              Dashboard
            </Link>{' '}
            |{' '}
            <Link to='/module7demo4/profile' className='nav_link'>
              Profile
            </Link>{' '}
            |{' '}
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <Link to='/module7demo4/login' className='nav_link'>
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

            <Route path='about' element={<About />}>
              <Route path='education' element={<Education />} />
              <Route path='skills' element={<Skills />} />
              <Route path='work' element={<Work />} />
              <Route path='contact' element={<Contact />} />
            </Route>

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
