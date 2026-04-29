import { Provider } from 'react-redux'
import Posts from './features/posts/Posts'
import store from './redux/store'

const CreateAsyncThunk = () => {
  return (
    <div>
      <Provider store={store}>
        <Posts />
      </Provider>
    </div>
  )
}

export default CreateAsyncThunk
