export default function CartItem({ item }) {
  return (
    <p>
      {item.name} - ${item.price}
    </p>
  )
}
