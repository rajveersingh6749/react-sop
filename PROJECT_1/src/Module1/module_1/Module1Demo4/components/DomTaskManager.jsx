import { useEffect } from 'react'
import '../styles/style.css'

export default function DomTaskManager() {
  useEffect(() => {
    const btn = document.getElementById('addTaskBtn')

    btn.onclick = () => {
      const input = document.getElementById('taskInput')
      const list = document.getElementById('taskList')

      if (!input.value) return

      const li = document.createElement('div')
      li.className = 'task'
      li.innerText = input.value

      list.appendChild(li)

      input.value = ''
    }
  }, [])

  return (
    <div>
      <input id='taskInput' placeholder='Enter task' />
      <button id='addTaskBtn'>Add</button>

      <div id='taskList' className='task-list'></div>
    </div>
  )
}
