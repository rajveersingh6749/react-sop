import { Suspense, useEffect, useState } from 'react'
import UserList from './components/UserList'
// const UserList = lazy(() => import('./components/UserList'))
import "./DemoSuspense.css"

const DemoSuspense = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    try {
      return await fetch('https://jsonplaceholder.typicode.com/photos')
    } catch (err) {
      console.log('Error', err)
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data!')
        }
        return res.json()
      })
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      <h1 className='demoSuspense'>suspense and lazy loading</h1>
      <Suspense fallback={<div>Loading User Details...</div>}>
        <UserList users={users} />
      </Suspense>
    </div>
  )
}

export default DemoSuspense
