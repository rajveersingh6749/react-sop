import '../styles/style.css'

const Stats = ({ count }) => {
  return (
    <div className='stats'>
      <p>Even: {count % 2 === 0 ? 'Yes' : 'No'}</p>
      <p>Absolute: {Math.abs(count)}</p>
    </div>
  )
}

export default Stats
