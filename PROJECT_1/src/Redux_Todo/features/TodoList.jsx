import { useDispatch, useSelector } from 'react-redux'
import './TodoList.css'
import { deleteTodo } from '../redux/actions'
import { updateTodo } from '../redux/actions'

const TodoList = ({ text, setText, editTodo, setEditTodo }) => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id) => {
    dispatch(updateTodo(id, text))
    setText(text)
  }

  return (
    <div className='list_container'>
      <ul>
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <li>
              {`${index + 1}. ${todo.text}`}
              <button onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
