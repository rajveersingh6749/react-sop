import TodoInput from './features/TodoInput'
import { Provider } from 'react-redux'
import store from './redux/store'
import './Redux_Todo.css'

const Redux_Todo = () => {
  return (
    <div className='todo_app'>
      <Provider store={store}>
        <TodoInput />
      </Provider>
    </div>
  )
}

export default Redux_Todo
