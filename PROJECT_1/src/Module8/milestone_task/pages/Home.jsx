import { Link } from 'react-router-dom'
import './Home.css'
// import { useEffect, useState } from 'react'
import { use } from 'react'
import { usersPromise } from './fetchData'

const Home = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [results, setResults] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   fetchData()
  //     .then((data) => {
  //       setResults(data)
  //       setIsLoading(false)
  //     })
  //     .catch((err) => {
  //       setError(err)
  //       setIsLoading(false)
  //     })
  // }, [])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data!')
  //     }

  //     return response.json()
  //   } catch (error) {
  //     throw new Error('Failed to fetch data!', error.message)
  //   }
  // }

  // if (isLoading) {
  //   return <p>loading...</p>
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  // console.log('Data: ', results)

  const results = use(usersPromise)

  console.log('Home: ', results)

  return (
    <div className='card'>
      <h1>List of Users:</h1>
      <ul className='user_list'>
        {results.map((user) => (
          <li key={user.id}>
            <Link to={`/milestone8/user/${user.id}`} className='home_link'>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
