import { useCallback, useMemo, useState } from 'react'
import './module6_demo3.css'
import Child from './Child'

const Module6demo3 = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo'])
  }

  return (
    <div className='calc'>
      <div>
        Count: {count}
        <h2>Expensive Calculation</h2>
        <h3>{calculation}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={addTodo}>Add Todo</button>
        <Child increment={increment} />
      </div>
      <div>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
      </div>
    </div>
  )
}

const expensiveCalculation = (num) => {
  console.log('Calculating...')
  for (let i = 0; i < 1000000000; i++) {
    num += 1
  }

  return num
}

export default Module6demo3
