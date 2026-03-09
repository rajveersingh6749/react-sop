import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [inputItem, setInputItem] = useState('')

  const increaseValue = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    setCount((prev) => prev + 1)
    // setCount(prev => prev + 1)
    // console.log('Inside function: ', count)
  }
  // console.log('Outside function: ', count)

  const decreaseValue = () => {
    // setCount(count - 1)
    setCount((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const resetValue = () => {
    setCount(0)
  }

  const toggleTheme = () => {
    // setDarkMode(!darkMode)
    setDarkMode((prev) => !prev)

    if (!darkMode) {
      document.body.className = 'dark'
    } else {
      document.body.className = 'light'
    }
  }

  return (
    <div>
      <h1>Milestone Task 2:</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increaseValue}>Increment</button>
      <button onClick={decreaseValue} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>

      <br />
      <br />
      <label>
        Enter text:{' '}
        <input
          type='text'
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <h3>Text: {inputItem}</h3>
      </label>
    </div>
  )
}

export default Counter
