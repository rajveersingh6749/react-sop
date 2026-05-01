import Notes from './components/Notes'
import SearchUsers from './components/SearchUsers'
import ThemeToggle from './components/ThemeToggle'
import './styles/style.css'

export default function CustomHooksApp() {
  return (
    <div className='app'>
      <h1 className='app_title'>Advanced Custom Hooks Demo</h1>

      <div className='grid'>
        <ThemeToggle />
        <SearchUsers />
        <Notes />
      </div>
    </div>
  )
}
