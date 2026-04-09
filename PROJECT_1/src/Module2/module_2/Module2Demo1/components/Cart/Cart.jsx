import CartItem from './CartItem'
import '../../styles/style.css'

export default function Cart({ cart, updateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className='cart'>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items</p>}

      {cart.map((item) => (
        <CartItem key={item.name} item={item} updateQty={updateQty} />
      ))}

      <h3>Total: ${total}</h3>
    </div>
  )
}
