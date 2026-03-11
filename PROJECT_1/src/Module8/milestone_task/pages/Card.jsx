import { Navigate, useNavigate, useParams } from 'react-router-dom'

import './Card.css'
import { usersPromise } from './fetchData'
import { use } from 'react'

const Card = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const results = use(usersPromise)

  const user = results.find((user) => user.id === Number(id))
  console.log('Card: ', user)

  if (!user) {
    return <Navigate to='/milestone8/' replace />
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
        <ul key={user.id} className='user_list'>
          <li>
            <b>Name: </b>
            {user.name}
          </li>
          <li>
            <b>Username: </b>
            {user.username}
          </li>
          <li>
            <b>Email: </b>
            {user.email}
          </li>
          <li>
            <b>Phone: </b>
            {user.phone}
          </li>
          <li>
            <b>Website: </b>
            {user.website}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
