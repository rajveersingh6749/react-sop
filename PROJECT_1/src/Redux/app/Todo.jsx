import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todosSlice'
import './Todo.css'

const Todo = () => {
  const [text, setText] = useState('')

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className='todo_container'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='enter text...'
      />
      <button onClick={() => dispatch(addTodo(text))}>Add Todo</button>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>{`${index + 1}. ${todo.text}`}</li>
          ))}
      </ul>
    </div>
  )
}

export default Todo
