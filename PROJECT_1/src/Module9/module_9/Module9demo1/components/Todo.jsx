import './Todo.css'
import { memo } from 'react'

const Todo = memo(({ todos, editTodo, deleteTodo }) => {
  console.log('Todo Component Rendered!')

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {`${index + 1}. ${todo.title}`}{' '}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Todo
