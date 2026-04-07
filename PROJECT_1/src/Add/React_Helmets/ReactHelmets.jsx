import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import './styles/styles.css'
import ProductDetails from './components/ProductDetails.jsx'

const ReactHelmets = () => {
  return (
    <div>
      <div className='nav_container'>
        <div className='custom_container' style={{position: "sticky", top: "0"}}>
          <div className='helmet_nav_bar'>
            <Link to='/helmet/' className='helmet_nav_link'>
              Home
            </Link>
            <Link to='/helmet/products' className='helmet_nav_link'>
              Products
            </Link>
          </div>
        </div>

        <div className='custom_container'>
          <div className='route_container'>
            <Routes>
              <Route index element={<Home />} />
              <Route path='product/:id' element={<ProductDetails />} />
              <Route path='products' element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactHelmets
