import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notesSlice'

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('notes', JSON.stringify(state.notes.notes))
})

export default store
