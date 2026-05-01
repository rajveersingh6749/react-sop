import { useEffect, useState } from 'react'
import './styles/style.css'
import ProgressRing from './components/ProgressRing'
import TimerDisplay from './components/TimerDisplay'
import TimerControls from './components/TimerControls'

export default function AdvancedTimer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [running])

  const handleStartStop = () => {
    setRunning((prev) => !prev)
  }

  const handleReset = () => {
    setSeconds(0)
    setRunning(false)
  }

  return (
    <div className='app'>
      <h1 className='title'>⏱ Advanced Timer</h1>

      <div className='timer-card'>
        <ProgressRing seconds={seconds} />
        <TimerDisplay seconds={seconds} />
        <TimerControls
          running={running}
          onStartStop={handleStartStop}
          onReset={handleReset}
        />
      </div>
    </div>
  )
}
