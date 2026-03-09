import { useState, useEffect } from 'react'

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    console.log('Event listener added')

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('Cleanup: listener removed')
    }
  }, [width])

  return (
    <>
      <h1>Module 3:</h1>
      <h2>Window width: {width}px</h2>
      <br />
    </>
  )
}

export default WindowWidth
