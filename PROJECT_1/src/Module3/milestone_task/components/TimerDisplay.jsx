import '../styles/style.css'

const TimerDisplay = ({ seconds }) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className='display'>
      {String(mins).padStart(2, '0')} : {String(secs).padStart(2, '0')}
    </div>
  )
}

export default TimerDisplay
