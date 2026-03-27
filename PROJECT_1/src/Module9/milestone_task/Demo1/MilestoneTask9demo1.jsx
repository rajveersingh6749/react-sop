import { useState } from 'react'
import List from './components/List'
import './MilestoneTask9demo1.css'

const users = Array.from({ length: 1000 }, (_, index) => `Item ${index}`)

const MilestoneTask9 = () => {
  console.log('Parent component rendering...')
  // const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [dark, setDark] = useState(false)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data!')
  //       }

  //       return response.json()
  //     })
  //     .then((data) => setUsers(data.slice(0, 1000)))
  // }, [])

  const filteredData = () => {
    let result = [...users]
    
    if (search) {
      result = result.filter((item) =>
        item.toLowerCase().includes(search.trim().toLowerCase()),
      )
    }

    return result
  }

  return (
    <div className={dark ? 'light' : 'dark'}>
      <h1>Milestone Task 9 Without Optimization</h1>

      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search...'
      />
      <button
        onClick={() => setDark((prev) => !prev)}
      >{`Switch to ${dark ? 'dark' : 'light'} Mode`}</button>

      <List filteredData={filteredData} />
    </div>
  )
}

export default MilestoneTask9
