// import { useEffect, useState } from 'react'
import UserList from './components/UserList'

const PropCompo = () => {
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Failed to Fetch data!')
  //       }

  //       return res.json()
  //     })
  //     .then((data) => setUsers(data))
  // }, [])

  return (
    <div>
      <h1>PropTypes</h1>
      {/* <UserList users={users} /> */}
      <UserList name="Dan" age={24} phone="1245789632"/>
    </div>
  )
}

export default PropCompo
