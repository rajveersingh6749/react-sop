import { Provider } from 'react-redux'
import NoteInput from './features/NoteInput'
import store from './features/store'

const Notes = () => {
  return (
    <div>
      <Provider store={store}>
        <NoteInput />
      </Provider>
    </div>
  )
}

export default Notes
