import { useState } from "react"
import useLocalStorage from "./hooks/useLocalStorage"
import Header from "./components/Header"
import CounterDisplay from "./components/CounterDisplay"
import Controls from "./components/Controls"
import Stats from "./components/Stats"
import HistoryPanel from "./components/HistoryPanel"

export default function PersistentCounterApp() {
  const [count, setCount] = useLocalStorage('count', 0)
  const [history, setHistory] = useState([])

  const addHistory = (text) => {
    const item = { id: Date.now(), text }
    setHistory((prev) => [item, ...prev])
  }

  const increment = () => {
    setCount((prev) => prev + 1)
    addHistory('Incremented')
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
    addHistory('Decremented')
  }

  const reset = () => {
    setCount(0)
    addHistory('Reset')
  }

  return (
    <div className='app'>
      <Header reset={reset} />

      <div className='container'>
        <div className='counter-box'>
          <CounterDisplay count={count} />
          <Controls increment={increment} decrement={decrement} />
          <Stats count={count} />
        </div>

        <HistoryPanel history={history} />
      </div>
    </div>
  )
}
