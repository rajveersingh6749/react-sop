import { useRef } from 'react'

const UncontrolledCount = () => {
  const countRef = useRef(0)

  const Increment = () => {
    countRef.current++
    console.log('Current Count: ', countRef.current)
  }

  return (
    <div>
      <h1>Uncontrolled Component (Count App)</h1>
      <h2>{countRef.current}</h2>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default UncontrolledCount
