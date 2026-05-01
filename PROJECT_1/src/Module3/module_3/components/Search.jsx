import { useEffect, useState } from 'react'
import '../styles/style.css'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) return

    setLoading(true)

    const timeout = setTimeout(() => {
      setResults([`Result for "${query}"`, 'Demo Data'])
      setLoading(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div className='card'>
      <h3>Search</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Type to search...'
      />

      {loading ? <p>Loading...</p> : results.map((r, i) => <p key={i}>{r}</p>)}
    </div>
  )
}

export default Search
