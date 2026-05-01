import { useEffect, useState } from 'react'
import '../styles/style.css' 

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <div className='card'>
      <h3>Theme</h3>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}

export default ThemeToggle
