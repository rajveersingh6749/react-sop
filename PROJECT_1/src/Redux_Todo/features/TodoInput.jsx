import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTodo,
  clearAllTodos,
  clearCompletedTodos,
  setFilter,
} from '../redux/actions'
import TodoList from './TodoList'
import './TodoInput.css'

const TodoInput = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleClick = () => {
    if (text.trim() === '') return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className='parent_container'>
      <h1>
        JustTodos <span>Total: {todos.length}</span>
      </h1>

      <div className='main_container'>
        <div className='input_container'>
          <div className='main'>
            <div className='input_fields'>
              <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleClick()
                  }
                }}
                placeholder='enter text...'
              />
              <button onClick={handleClick}>Add Todo</button>
            </div>

            <div className='filters'>
              <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
              <button onClick={() => dispatch(setFilter('COMPLETED'))}>
                Completed
              </button>
              <button onClick={() => dispatch(setFilter('PENDING'))}>
                Pending
              </button>
              <button
                onClick={() => {
                  if (confirm('Delete all todos?')) {
                    dispatch(clearAllTodos())
                  }
                }}
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  if (confirm('Delete completed todos?')) {
                    dispatch(clearCompletedTodos())
                  }
                }}
                className='lg_btn'
              >
                Clear Completed
              </button>
            </div>
          </div>

          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default TodoInput
