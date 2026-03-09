import './Card3.css'

const Card3 = ({ user }) => {
  return (
    <div className='card3'>
      <h1>Card 3:</h1>
      <h3>Jane</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dolorum illo ut illum nulla, rerum esse eius deleniti veritatis ipsum!
      </p>
      <h2>{`Hello, ${user} again!`}</h2>
      <button onClick={() => alert(`Hello, ${user} again!`)}>Greet</button>
    </div>
  )
}

export default Card3
