import Counter from './app/Counter'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Todo from './app/Todo'
import './ReduxApp.css'

const Redux = () => {
  return (
    <div className='redux_app_container'>
      <h1>Redux Set Up</h1>

      <div className='redux_app'>
        <Provider store={store}>
          <Counter />
          <Todo />
        </Provider>
      </div>
    </div>
  )
}

export default Redux
