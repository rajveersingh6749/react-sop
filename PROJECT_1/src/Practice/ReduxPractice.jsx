import { Provider } from 'react-redux'
import Counter from './Counter'
import store from './redux/store'

const ReduxPractice = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}

export default ReduxPractice
