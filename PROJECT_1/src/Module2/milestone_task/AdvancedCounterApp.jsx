import { useState } from 'react'
import Header from './components/Header'
import CounterDisplay from './components/CounterDisplay'
import Controls from './components/Controls'
import './styles/style.css'
import HistoryPanel from './components/HistoryPanel'

export default function AdvancedCounterApp() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [history, setHistory] = useState([])

  const updateHistory = (action) => {
    setHistory((prev) => [action, ...prev])
  }

  const increment = () => {
    setCount((prev) => prev + 1)
    updateHistory('Incremented')
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
    updateHistory('Decremented')
  }

  const reset = () => {
    setCount(0)
    updateHistory('Reset to 0')
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme
  }

  return (
    <div className='app'>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className='container'>
        <div className='counter-box'>
          <CounterDisplay count={count} />
          <Controls increment={increment} decrement={decrement} reset={reset} />
        </div>

        <HistoryPanel history={history} />
      </div>
    </div>
  )
}
