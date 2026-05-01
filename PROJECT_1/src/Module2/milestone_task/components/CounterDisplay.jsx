import '../styles/style.css'

const CounterDisplay = ({ count }) => {
  return (
    <div className='display'>
      <h2>{count}</h2>
    </div>
  )
}

export default CounterDisplay
