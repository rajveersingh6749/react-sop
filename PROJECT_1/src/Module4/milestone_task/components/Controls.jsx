import '../styles/style.css'

const Controls = ({ increment, decrement }) => {
  return (
    <div className='controls'>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Controls
