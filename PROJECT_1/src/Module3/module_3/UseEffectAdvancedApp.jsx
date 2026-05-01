import Search from "./components/Search";
import ThemeToggle from "./components/ThemeToggle";
import Timer from "./components/Timer";
import WindowTracker from "./components/WindowTracker";
import './styles/style.css'

export default function UseEffectAdvancedApp() {
  return (
    <div className='app'>
      <h1 className="app_title">useEffect Advanced Demo</h1>

      <div className='grid'>
        <Timer />
        <WindowTracker />
        <Search />
        <ThemeToggle />
      </div>
    </div>
  )
}
