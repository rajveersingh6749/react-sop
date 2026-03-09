import { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      let stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : defaultValue
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error('LocalStorage error:', err)
    }
  }, [key, value])

  return [value, setValue]

  //   const setLocalStorageStateValue = (valueOrFn) => {
  //     let newValue
  //     if (typeof valueOrFn === 'function') {
  //       const fn = valueOrFn
  //       newValue = fn(value)
  //     } else {
  //       newValue = valueOrFn
  //     }

  //     localStorage.setItem(key, JSON.stringify(newValue))
  //     setValue(newValue)
  //   }

  //   return [value, setLocalStorageStateValue]
}

export default useLocalStorage
