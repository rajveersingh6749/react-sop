import { useEffect, useState } from 'react'
import '../styles/style.css'

const WindowTracker = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='card'>
      <h3>Window Width</h3>
      <p>{width}px</p>
    </div>
  )
}

export default WindowTracker
