import { useState } from 'react'
import '../styles/card.css'
import '../styles/button.css'

export default function PaymentPanel() {
  const [amount, setAmount] = useState(0)

  const handlePayment = () => {
    if (amount <= 0) {
      throw new Error('Payment amount must be greater than 0')
    }
    alert('Payment successful')
  }

  return (
    <div className='card'>
      <h3>Payment</h3>
      <hr />
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button className='btn' onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  )
}
