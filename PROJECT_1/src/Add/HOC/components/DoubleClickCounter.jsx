import '../styles/style.css'

const DoubleClickCounter = ({ count, increment }) => {
  return (
    <div className='card'>
      <h2>Double Click Counter</h2>
      <p>Double Click Count: {count}</p>
      <button onDoubleClick={increment}>Double Click Me</button>
    </div>
  )
}

export default DoubleClickCounter
