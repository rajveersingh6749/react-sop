import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './First.css'
import NotFound from './components/NotFound'

const First = () => {
  return (
    <div>
      <div className='nav_container'>
        <div className='custom_container'>
          <nav className='nav_bar'>
            <Link to='/module7demo1/' className='nav_link'>
              Home
            </Link>
            <Link to='/module7demo1/about' className='nav_link'>
              About
            </Link>
            <Link to='/module7demo1/contact' className='nav_link'>
              Contact
            </Link>
            <Link to='/module7demo1/login' className='nav_link'>
              Login
            </Link>
          </nav>
        </div>
      </div>

      <div className='custom_container'>
        <div className='route_container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default First
