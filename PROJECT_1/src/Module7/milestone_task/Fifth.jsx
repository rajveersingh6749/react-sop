import { Link, Route, Routes } from 'react-router-dom'
import './Fifth.css'
import Home from './pages/Home'
import Card from './pages/Card'
import NotFound from './pages/NotFound'
import About from './pages/About'

const Fifth = () => {
  return (
    <div>
      <div className='nav1_container'>
        <div className='custom_container'>
          <nav className='nav_bar'>
            <Link to='/milestone7/' className='nav_link'>
              Home
            </Link>
            <Link to='/milestone7/about' className='nav_link'>
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

export default Fifth
