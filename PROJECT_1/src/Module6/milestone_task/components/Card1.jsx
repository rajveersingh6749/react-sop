// import { useContext } from 'react'
import './Card1.css'
import Card2 from './Card2'
import { ThemeContext } from '../ThemeContext'

// const Card1 = ({ darkMode, setDarkMode }) => {
const Card1 = () => {

  // const { darkMode, themeHandler, formattedUser, greetUser } =
  //     useContext(ThemeContext)

  return (
    <div className='card1'>
      <h1>Card 1:</h1>
      <h3>Nate</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        molestias architecto ullam accusamus expedita ipsa aliquid, fugiat
        quisquam incidunt aut.
      </p>
      {/* <button onClick={greetUser}>Greet</button>
      <button onClick={themeHandler}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>
      <h3>{`Hello, ${formattedUser} again!`}</h3> */}
      <Card2 />
    </div>
  )
}

export default Card1
