import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const PRODUCTS = [
  { id: 1, name: 'iPhone', price: 800 },
  { id: 2, name: 'MacBook', price: 2000 },
  { id: 3, name: 'AirPods', price: 200 },
]

export default function ComponentBasedUI() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  )
}
