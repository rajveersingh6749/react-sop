import { Navigate, useNavigate, useParams } from 'react-router-dom'

import './Card.css'
import { useEffect, useState } from 'react'

const Card = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
      .then((data) => {
        setResults(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Failed to fetch data!')
      }

      return response.json()
    } catch (error) {
      throw new Error('Failed to fetch data!', error.message)
    }
  }

  if (isLoading) {
    return <p>loading...</p>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  const user = results.find((user) => (user.id) === Number(id))
  console.log('User: ', user)

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
