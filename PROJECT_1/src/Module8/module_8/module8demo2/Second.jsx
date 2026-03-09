import { useState, useEffect } from 'react'
import './Second.css'

export default function Home() {
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
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch data!')
      }

      return response.json()
    } catch (error) {
      throw new Error('Failed to fetch data!', error.message)
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  //   console.log(results)

  return (
    <div className='data_container'>
      <h1>Fetched Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        results &&
        results.map((user) => (
          <div key={user.id} className='data'>
            <br />
            <p>
              <b>UserID: </b> {user.userId}
            </p>
            <p>
              <b>Title: </b>
              {user.title}
            </p>
            <p>
              <b>Body: </b>
              {user.body}
            </p>
          </div>
        ))
      )}
    </div>
  )
}
