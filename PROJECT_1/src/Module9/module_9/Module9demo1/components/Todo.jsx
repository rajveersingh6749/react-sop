import './Todo.css'

const Todo = ({ todos }) => {
  console.log('Todo Component Rendered!')

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>{`${index + 1}. ${todo.title}`}</li>
      ))}
    </ul>
  )
}

export default Todo
