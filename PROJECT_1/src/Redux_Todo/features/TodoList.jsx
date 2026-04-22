import { useDispatch, useSelector } from 'react-redux'
import './TodoList.css'
import { deleteTodo, toggleTodo } from '../redux/actions'
import { updateTodo } from '../redux/actions'
import { useState } from 'react'

const TodoList = () => {
  const [editId, setEditId] = useState(null)
  const [editedText, setEditedText] = useState('')

  const { todos, filters } = useSelector((state) => state)
  // console.log("Todos: ", todos)
  const dispatch = useDispatch()

  const filteredTodos = todos.filter((todo) => {
    if (filters === 'COMPLETED') return todo.completed
    if (filters === 'PENDING') return !todo.completed
    return true
  })

  const handleDelete = (id) => {
    if (confirm('do you want to delete this todo?')) {
      dispatch(deleteTodo(id))
    }
  }

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditedText(todo.text)
  }

  const handleUpdate = () => {
    if (editedText.trim() === '') return
    dispatch(updateTodo(editId, editedText))
    setEditId(null)
  }

  return (
    <div className='list_container'>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type='text'
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: '8px',
                    marginRight: '10px',
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleEdit(todo)}
                  disabled={todo.completed}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
