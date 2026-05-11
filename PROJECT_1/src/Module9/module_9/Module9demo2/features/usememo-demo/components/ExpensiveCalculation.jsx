import { useMemo, useState } from 'react'
import '../styles/styles.css'

export default function ExpensiveCalculation() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const expensiveResult = useMemo(() => {
    console.log('Heavy calculation running...')

    let result = 0

    for (let i = 0; i < 1000000000; i++) {
      result += number
    }

    return result
  }, [number])

  return (
    <div className={`panel ${dark ? 'dark-box' : ''}`}>
      <h2>⚡ Expensive Calculation</h2>

      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>Toggle Box Theme</button>

      <p>Result: {expensiveResult}</p>
    </div>
  )
}
