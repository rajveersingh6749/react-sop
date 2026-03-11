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

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const addTodo = () => {
    const lastId = todo[todo.length - 1].id
    if(text === '') return null
    let newTodo = { id: lastId + 1, title: text }
    setTodo([...todo, newTodo])
    setText('')
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
      <button type='button' onClick={addTodo}>
        Add Todo
      </button>
      <Todo todos={todo} />
    </div>
  )
}

export default ReactMemo
