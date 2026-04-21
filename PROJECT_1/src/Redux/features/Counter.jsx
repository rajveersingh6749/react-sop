import { useSelector, useDispatch } from 'react-redux'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {
  const [amount, setAmount] = useState('')

  const handlePayload = () => {
    let value = Number(amount)
    if (!value) return
    if (!isNaN(value)) {
      dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: value })
      setAmount('')
    }
  }

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className='reducer_container'>
      <div className='reducer_div'>
        <span>{count}</span>

        <div className='btn_container'>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>
            Decrement
          </button>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='enter amount...'
          />
          <button onClick={handlePayload}>Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
