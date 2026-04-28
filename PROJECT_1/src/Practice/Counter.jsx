import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/actions'

const Counter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
