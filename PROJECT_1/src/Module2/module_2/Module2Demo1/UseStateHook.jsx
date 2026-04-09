import { useState } from 'react'
import ProductList from './components/Product/ProductList.jsx'
import Cart from './components/Cart/Cart.jsx'
import './styles/style.css'

export default function UseStateHook() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const existing = cart.find((item) => item.name === product.name)

    if (existing) {
      setCart(
        cart.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  const updateQty = (name, type) => {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                qty: type === 'inc' ? item.qty + 1 : item.qty - 1,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    )
  }

  return (
    <div className='app'>
      <h1 className='title'>🛒 Product Dashboard</h1>

      <div className='layout'>
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} updateQty={updateQty} />
      </div>
    </div>
  )
}
