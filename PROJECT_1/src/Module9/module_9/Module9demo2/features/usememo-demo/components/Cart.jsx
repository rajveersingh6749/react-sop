import '../styles/styles.css'

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='panel'>
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className='cart-item'>
            <span>{item.name}</span>

            <span>${item.price}</span>
          </div>
        ))
      )}

      <hr />

      <h3>Total: ${total}</h3>
    </div>
  )
}
