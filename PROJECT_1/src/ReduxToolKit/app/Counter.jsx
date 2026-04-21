import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState('2')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='counter'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div>
          <input
            type='text'
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount || 0)))}>Add Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
