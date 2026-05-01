import '../styles/style.css'

const Controls = ({ increment, decrement, reset }) => {
  return (
    <div className='controls'>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Controls
