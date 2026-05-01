import { useEffect, useState } from 'react'
import '../styles/style.css'

export default function UserProfile() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = () => {
    setLoading(true)
    setError(null)

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user')
        return res.json()
      })
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (error) throw error

  if (loading) return <div className='card'>Loading user...</div>

  return (
    <div className='card'>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button className='btn' onClick={fetchUser}>
        Refresh
      </button>
    </div>
  )
}
