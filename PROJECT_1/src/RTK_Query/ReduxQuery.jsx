import { Provider } from 'react-redux'
import { store } from './redux/store'
import Posts from './features/posts/Posts'


function ReduxQuery() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  )
}

export default ReduxQuery
