import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Users } from '../Users'
import './Card.css'

const Card = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const user = Users.find((user) => user.id === JSON.parse(id))
  console.log('User: ', user)

  if (!user) {
    return <Navigate to='/milestone7/' replace />
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='card_container'>
      <button onClick={handleBack} className='back_btn'>
        Go Back
      </button>

      <h1>User Details!</h1>
      <div className='user_container'>
        <p>
          <b>Name: </b>
          {user.name}
        </p>
        <p>
          <b>Age: </b>
          {user.age}
        </p>
        <p>
          <b>City: </b>
          {user.city}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
        <p>
          <b>Skill: </b>
          {user.skill}
        </p>
        <p>
          <b>Education: </b>
          {user.education}
        </p>
      </div>
    </div>
  )
}

export default Card
