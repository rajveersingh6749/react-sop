import { useCallback, useState } from 'react'
import './UseCallback.css'
import TaskList from './components/TaskList'

const CallbackCompo = () => {
  console.log('Parent Component is being rendered...')

  const [text, setText] = useState('')
  const [task, setTask] = useState([
    { id: 1, title: 'Read Books' },
    { id: 2, title: 'Play Games' },
    { id: 3, title: 'Learn Javascript' },
    { id: 4, title: 'Learn React' },
    { id: 5, title: 'Solve Coding Challenges' },
    { id: 6, title: 'Practice Previous Task' },
  ])

  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const addTodo = () => {
    if (text === '') return

    const lastId = task[task.length - 1].id || 0
    const newTask = { id: lastId + 1, title: text }
    setTask([...task, newTask])
  }

  return (
    <div>
      <h1>Task Management (useCallback)</h1>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add todo...'
      />
      <button onClick={addTodo}>Add</button>
      <p>Count: {count}</p>

      <TaskList handleIncrement={increment} task={task} />
    </div>
  )
}

export default CallbackCompo
