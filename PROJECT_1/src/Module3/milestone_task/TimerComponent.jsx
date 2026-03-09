import { useEffect, useState } from 'react'

function TimerComponent() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  return (
    <>
      <h1>Milestone Task 3:</h1>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={() => {
          setSeconds(0)
          setIsRunning(false)
        }}
      >
        Reset
      </button>
    </>
  )
}

export default TimerComponent
