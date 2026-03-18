import { useState } from 'react'
import Todo from './components/Todo'
import './ReactMemo.css'

const ReactMemo = () => {
  console.log('React Memo Component Rendered!')

  const [todo, setTodo] = useState([
    { id: 1, title: 'Read Book' },
    { id: 2, title: 'Fix Bug' },
    { id: 3, title: 'Learn Coding' },
    { id: 4, title: 'Build Project' },
    { id: 5, title: 'Play Football' },
    { id: 6, title: 'Practice React' },
  ])

  const [text, setText] = useState('')
  const [editId, setEditId] = useState(null)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const addOrUpdateTodo = () => {
    if (text === '') return

    if (editId !== null) {
      const updatedTodo = todo.map((item) =>
        item.id === editId ? { ...item, title: text } : item,
      )
      setTodo(updatedTodo)
      setEditId(null)
    } else {
      const lastId = todo[todo.length - 1].id || 0
      let newTodo = { id: lastId + 1, title: text }
      setTodo([...todo, newTodo])
    }
    setText('')
  }

  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((item) => item.id !== id)
    setTodo(updatedTodos)
  }

  const editTodo = (id) => {
    const selectedTodo = todo.find((item) => item.id === id)
    setText(selectedTodo.title)
    setEditId(id)
  }

  console.log(todo)

  return (
    <div className='todo_container'>
      <h1>React Memo</h1>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Add Todo...'
      />
      <button type='button' onClick={addOrUpdateTodo}>
        {editId ? 'Update Todo' : 'Add Todo'}
      </button>
      <Todo todos={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default ReactMemo
