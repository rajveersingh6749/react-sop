import '../styles/styles.css'

export default function Header({ theme, setTheme }) {
  return (
    <header className='header'>
      <h1>🧠 useMemo Performance Dashboard</h1>

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </header>
  )
}
