import Counter from './features/Counter'
import { store } from './features/store'
import { Provider } from 'react-redux'
import './Redux.css'

const Redux = () => {
  return (
    <div className='redux'>
      <h1>Redux Setup</h1>

      <div className='redux_st'>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </div>
  )
}

export default Redux
