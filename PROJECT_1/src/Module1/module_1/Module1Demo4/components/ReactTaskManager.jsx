import { useState } from 'react'
import TaskCard from './TaskCard'
import '../styles/style.css'

export default function ReactTaskManager() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input) return

    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter task'
      />
      <button onClick={addTask}>Add</button>

      <div className='task-list'>
        {tasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  )
}
