import CartItem from './CartItem'
import '../styles/style.css'

export default function Cart({ cart }) {
  return (
    <div className='cart'>
      <h2 className='cart_title'>Cart Items</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  )
}
