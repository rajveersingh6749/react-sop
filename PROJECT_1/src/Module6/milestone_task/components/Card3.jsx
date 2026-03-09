import './Card3.css'
import { ThemeContext } from '../ThemeContext'
import { useContext } from 'react'

// const Card3 = ({ darkMode, setDarkMode }) => {
const Card3 = () => {
  
  const { darkMode, themeHandler, formattedUser, greetUser } =
    useContext(ThemeContext)

  return (
    <div className='card3'>
      <h1>Card 3:</h1>
      <h3>Jane</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dolorum illo ut illum nulla, rerum esse eius deleniti veritatis ipsum!
      </p>
      <button onClick={greetUser}>Greet</button>
      <button onClick={themeHandler}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>
      <h3>{`Hello, ${formattedUser} again!`}</h3>
    </div>
  )
}

export default Card3
