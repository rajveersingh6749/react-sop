import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import TodoList from './TodoList'
import './TodoInput.css'

const TodoInput = () => {
  const [text, setText] = useState('')
  const [editTodo, setEditTodo] = useState(null)

  const dispatch = useDispatch()

  const handleClick = () => {
    if (text.trim() === '') return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className='input_container'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='enter text...'
      />
      <button onClick={handleClick}>Add Todo</button>
      <TodoList text={text} setText={setText} editTodo={editTodo} setEditTodo={setEditTodo} />
    </div>
  )
}

export default TodoInput
