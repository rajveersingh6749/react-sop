import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

const ReactH = () => {
  return (
    <div>
        <div className='nav_container'>
          <div className='custom_container'>
            <nav className='nav_bar'>
              <Link to='/reactH/' className='nav_link3'>
                Home
              </Link>
              <Link to='/reactH/about' className='nav_link3'>
                About
              </Link>
              <Link to='/reactH/blog' className='nav_link3'>
                Blog
              </Link>
            </nav>
          </div>
        </div>

        <div className='custom_container'>
          <div className='route_container'>
            <Routes>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='blog' element={<Blog />} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default ReactH
