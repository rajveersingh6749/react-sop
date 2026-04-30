import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './styles/style.css'

const PRODUCTS = [
  { id: 1, name: 'iPhone', price: 800 },
  { id: 2, name: 'MacBook', price: 2000 },
  { id: 3, name: 'AirPods', price: 300 },
  { id: 4, name: 'AirPods', price: 500 },
  { id: 5, name: 'AirPods', price: 600 },
  { id: 6, name: 'AirPods', price: 800 },
  { id: 7, name: 'AirPods', price: 300 },
  { id: 8, name: 'AirPods', price: 400 },
  { id: 9, name: 'AirPods', price: 2000 },
  { id: 10, name: 'AirPods', price: 3000 },
  { id: 11, name: 'AirPods', price: 3000 },
  { id: 12, name: 'AirPods', price: 3000 },
  { id: 13, name: 'AirPods', price: 3000 },
  { id: 14, name: 'AirPods', price: 3000 },
  { id: 15, name: 'AirPods', price: 3000 },
  { id: 16, name: 'AirPods', price: 3000 },
]

export default function ComponentBasedUI() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className='demo1_container'>
      <Navbar cartCount={cart.length} />
      <div className='left_right_parent'>
        <div className='left_right'>
          <ProductList products={PRODUCTS} addToCart={addToCart} />
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  )
}
