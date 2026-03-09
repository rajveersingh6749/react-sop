import useFetch from "./hooks/useFetch"

function Fetch() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  )

  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>{error}</h3>
  return (
    <>
      <h2>User List</h2>
      {data.map((user) => (
        <div key={user.id}>
          <ol>
            <li>
              <strong>Name</strong>: {user.name}
            </li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </ol>
        </div>
      ))}
    </>
  )
}

export default Fetch
