'use client'
import { Link } from 'react-router-dom'
import './Home.css'
// import { useEffect, useState } from 'react'
import { use } from 'react'
// import { getData } from './fetchData'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
  (response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data!')
    }
    return response.json()
  },
)

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
  if (!results) {
    return <p>loading...</p>
  }

  return (
    <div className='card'>
      <h1>List of Users:</h1>
      {results &&
        results.map((user) => (
          <ul key={user.id} className='user_list'>
            <li>
              <Link to={`/milestone8/user/${user.id}`} className='home_link'>
                {user.name}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  )
}

export default Home
