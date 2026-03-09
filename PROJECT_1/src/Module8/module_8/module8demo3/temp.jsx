import { use } from 'react'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
  (response) => response.json(),
)

const Third = () => {
  const users = use(usersPromise)
  console.log(users)

  return (
    <div>
      <h1>Fetch Data Using use Hook</h1>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default Third
