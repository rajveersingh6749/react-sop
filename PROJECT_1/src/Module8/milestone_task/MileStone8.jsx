import './MileStone8.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Card from './pages/Card'
import NotFound from './pages/NotFound'
import { Suspense } from 'react'

export default function MileStone8() {
  return (
    <div>
      <div className='nav1_container'>
        <div className='custom_container'>
          <nav className='nav_bar'>
            <Link to='/milestone8/' className='nav_link'>
              Home
            </Link>
            <Link to='/milestone8/about' className='nav_link'>
              About
            </Link>
          </nav>
        </div>
      </div>

      <div className='custom_container'>
        <div className='route1_container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='user/:id' element={<Card />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
