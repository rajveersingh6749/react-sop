import { useEffect } from 'react'
import '../styles/style.css'

const Toast = ({ message, onClose, duration = 2000 }) => {
  useEffect(() => {
    if (!message) return

    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [message, duration, onClose])

  if (!message) return null

  return <div className='toast'>{message}</div>
}

export default Toast
