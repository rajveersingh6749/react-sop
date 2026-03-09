import { useEffect, useState } from 'react'

import './About.css'

const About = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState(null)
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

  console.log('Full Object: ', results)

  return (
    <div>
      <h1>About</h1>
      <div className='about'>
        {results &&
          results.map((user) => (
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
          ))}
      </div>
    </div>
  )
}

export default About
