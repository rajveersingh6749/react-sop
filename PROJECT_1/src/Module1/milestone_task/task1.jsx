import ProductCard from './Components/ProductCard'
import Car from '../../assets/formula_car.jpg'
import Player from '../../assets/hockey-players-1.png'
import Fighter from '../../assets/karate_fighters.jpg'
import './task1.css'
function task1() {
  return (
    <>
      <h1>Milestone Task 1:</h1> <br />
      <div className='cards'>
        {DATA.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}

        {/* <ProductCard
          name='Volvo'
          image={Car}
          price='$5000'
          desc='This is a formula car'
        />
        <ProductCard
          name='Nate'
          image={Player}
          price='$5000'
          desc='This is a player'
        />
        <ProductCard
          name='John'
          image={Fighter}
          price='$5000'
          desc='This is a fighter'
        /> */}
      </div>
    </>
  )
}

const DATA = [
  {
    id: 1,
    name: 'Volvo',
    image: Car,
    price: '$5000',
    desc: 'This is a formula car',
  },
  {
    id: 2,
    name: 'Nate',
    image: Player,
    price: '$6000',
    desc: 'This is a player',
  },
  {
    id: 3,
    name: 'John',
    image: Fighter,
    price: '$4000',
    desc: 'This is a fighter',
  },
]

export default task1
