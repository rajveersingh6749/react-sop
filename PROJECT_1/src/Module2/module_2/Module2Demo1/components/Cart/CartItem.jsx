import '../../styles/style.css'

export default function CartItem({ item, updateQty }) {
  return (
    <div className='cart-item'>
      <span>{item.name}</span>

      <div className='qty'>
        <button onClick={() => updateQty(item.name, 'dec')}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => updateQty(item.name, 'inc')}>+</button>
      </div>

      <span>${item.price * item.qty}</span>
    </div>
  )
}
