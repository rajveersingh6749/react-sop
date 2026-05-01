import '../styles/style.css'

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className='header'>
      <h1 className='app_name'>Advanced Counter</h1>
      <button onClick={toggleTheme} className='theme-btn'>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default Header
