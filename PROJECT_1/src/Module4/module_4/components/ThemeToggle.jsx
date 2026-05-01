import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import '../styles/style.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className='card'>
      <h3>Theme (Persisted)</h3>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}

export default ThemeToggle
