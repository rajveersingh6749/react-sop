import '../styles/style.css'

const ClickCounter = ({ count, increment, decrement }) => {
  return (
    <div className='card'>
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <div className='btn_group'>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  )
}

export default ClickCounter
