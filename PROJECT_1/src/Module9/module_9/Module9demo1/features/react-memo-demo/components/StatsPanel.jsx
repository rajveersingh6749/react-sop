import '../styles/styles.css'

export default function StatsPanel({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='panel'>
      <h2>📊 Stats</h2>

      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
    </div>
  )
}
