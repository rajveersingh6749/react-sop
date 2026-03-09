// import { useContext } from 'react'
import './Card2.css'
import Card3 from './Card3'
import { ThemeContext } from '../ThemeContext'

// const Card2 = ({ darkMode, setDarkMode }) => {
const Card2 = () => {
  // const { darkMode, themeHandler, formattedUser, greetUser } =
  //   useContext(ThemeContext)

  return (
    <div className='card2'>
      <h1>Card 2:</h1>
      <h3>Dan</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel
        amet iste! A esse, neque error fuga aperiam voluptatem! Sapiente!
      </p>

      {/* <button onClick={greetUser}>Greet</button>
      <button onClick={themeHandler}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>
      <h3>{`Hello, ${formattedUser} again!`}</h3> */}

      <Card3 />
    </div>
  )
}

export default Card2
