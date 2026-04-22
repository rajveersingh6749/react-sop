import { createStore } from 'redux'
import { reducer } from './reducer'

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('persistentState', JSON.stringify(state))
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem('persistentState')
    if (!serializedData) {
      return undefined
    }
    return JSON.parse(serializedData)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const store = createStore(reducer, loadFromLocalStorage())

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
