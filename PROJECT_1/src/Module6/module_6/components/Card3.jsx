import { useContext } from 'react'
import './Card3.css'
import { UserContext } from '../UserContext'

// const Card3 = ({ user }) => {
const Card3 = () => {

  const { formattedUser, greetUser } = useContext(UserContext)

  return (
    <div className='card3'>
      <h1>Card 3:</h1>
      <h3>Jane</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dolorum illo ut illum nulla, rerum esse eius deleniti veritatis ipsum!
      </p>
      <h2>{`Hello, ${formattedUser} again!`}</h2>
      <button onClick={greetUser}>Greet</button>
    </div>
  )
}

export default Card3
