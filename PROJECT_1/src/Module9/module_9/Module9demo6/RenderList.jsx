import { useState } from 'react'
import './RenderList.css'

const RenderList = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data!')
        }
        return response.json()
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Rendering List of 5000 Users</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.id}. ${user.title}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderList
