import './Card1.css'
import Card2 from './Card2'


const Card1 = () => {
  return (
    <div className='card1'>
      <h1>Card 1:</h1>
      <h3>Nate</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        molestias architecto ullam accusamus expedita ipsa aliquid, fugiat
        quisquam incidunt aut.
      </p>
      <Card2 />
    </div>
  )
}

export default Card1
