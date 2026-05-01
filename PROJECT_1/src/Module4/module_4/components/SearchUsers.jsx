import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useFetch from '../hooks/useFetch'
import '../styles/style.css'

const SearchUsers = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  const { data, loading } = useFetch(
    debouncedQuery
      ? `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`
      : null,
  )

  return (
    <div className='card'>
      <h3>User Search</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search users...'
      />

      {loading && <p>Loading...</p>}

      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchUsers
