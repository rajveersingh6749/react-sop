import './Card2.css'
import Card3 from './Card3'

const Card2 = ({ user }) => {
  return (
    <div className='card2'>
      <h1>Card 2:</h1>
      <h3>Dan</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel
        amet iste! A esse, neque error fuga aperiam voluptatem! Sapiente!
      </p>

      <Card3 user={user} />
    </div>
  )
}

export default Card2
