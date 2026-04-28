import { createStore } from 'redux'
import counterReducer from './reducer'

const loadFromLocalStorage = () => {
  const serializedData = localStorage.getItem('counter')
  if (!serializedData) return undefined
  return JSON.parse(serializedData)
}

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('counter', JSON.stringify(state))
  } catch (error) {
    console.log('Error: ', error)
  }
}

const store = createStore(counterReducer, loadFromLocalStorage())

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
