import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import NotFound from './components/NotFound'
import StudentDetails from './components/StudentDetails'

const Third = () => {
  return (
    <div>
      <div className='nav_container'>
        <div className='custom_container'>
          <nav className='nav_bar'>
            <Link to='/module7demo3/' className='nav_link'>
              Home
            </Link>
            <Link to='/module7demo3/students' className='nav_link'>
              Students
            </Link>
          </nav>
        </div>
      </div>

      <div className='custom_container'>
        <div className='route_container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='students' element={<Students />} />
            <Route path='students/:id' element={<StudentDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Third
