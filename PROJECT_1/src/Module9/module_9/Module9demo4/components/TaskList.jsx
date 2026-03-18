import { memo } from 'react'

const TaskList = memo(({ handleIncrement, task }) => {
  console.log('Child Component is being rendered...')

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <ul>
        {task.map((item) => (
          <li key={item.id}>{`${item.id}. ${item.title}`}</li>
        ))}
      </ul>
    </div>
  )
})

export default TaskList
