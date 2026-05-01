import { useEffect, useState } from 'react'
import '../styles/style.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [running])

  return (
    <div className='card'>
      <h3>Timer</h3>
      <p>{seconds}s</p>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  )
}

export default Timer
