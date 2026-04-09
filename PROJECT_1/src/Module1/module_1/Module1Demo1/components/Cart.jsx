import CartItem from './CartItem'

export default function Cart({ cart }) {
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  )
}
