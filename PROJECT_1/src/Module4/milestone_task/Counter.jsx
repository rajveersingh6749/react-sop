import { useEffect } from 'react'
import './Counter.css'
import useLocalStorage from './useLocalStorage'
import useDebounce from './useDebounce'

const Counter = () => {
  const [count, setCount] = useLocalStorage('count', 0)
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true)

  const debouncedValue = useDebounce(count, 500)

  function handleIncrement() {
    setCount((prev) => prev + 1)
  }

  function handleDecrement() {
    setCount((prev) => (prev > 0 ? prev - 1 : prev))
  }

  function handleReset() {
    setCount(0)
  }

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'

    return () => {
      document.body.className = ''
    }
  }, [darkMode])

  function handleToggleTheme() {
    setDarkMode((prev) => !prev)
  }

  // function handleInputChange(event) {
  //   setSearchInput(event.target.value)
  // }

  //   function handleToggleTheme() {
  //     setDarkMode(prev => !prev);

  //     if(!darkMode) {
  //         document.body.className = "dark";
  //     } else {
  //         document.body.className = "light";
  //     }
  //   }

  return (
    <div>
      <h1>Milestone Task 4:</h1>
      <h2>Counter: {debouncedValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggleTheme}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>
    </div>
  )
}

export default Counter
