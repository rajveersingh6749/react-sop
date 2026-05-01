import '../styles/style.css'

const TimerControls = ({ running, onStartStop, onReset }) => {
  return (
    <div className='controls'>
      <button onClick={onStartStop}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default TimerControls
