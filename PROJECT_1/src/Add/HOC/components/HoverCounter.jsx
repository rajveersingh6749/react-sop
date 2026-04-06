import '../styles/style.css'

const HoverCounter = ({ count, increment }) => {
  return (
    <div className='card'>
      <h2>Hover Counter</h2>
      <p>Hover Count: {count}</p>
      <button className='hover_box' onMouseEnter={increment}>
        Hover Over Me
      </button>
    </div>
  )
}

export default HoverCounter
