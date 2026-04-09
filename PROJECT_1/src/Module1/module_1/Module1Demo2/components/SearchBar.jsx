import '../styles/style.css'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search products...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{' '}
      {/* self-closing tag */}
    </div>
  )
}
