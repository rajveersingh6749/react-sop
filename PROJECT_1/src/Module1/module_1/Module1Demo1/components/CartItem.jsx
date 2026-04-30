import '../styles/style.css'

export default function CartItem({ item }) {
  return (
    <p className="cart_item">
      {item.name} - ${item.price}
    </p>
  )
}
