import { startTransition, use, useState } from 'react'
import './Transition.css'
import { usersPromise } from './fetchData'
import LargestList from './components/LargestList'

const Transition = () => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredItems, setFilteredItems] = useState([])

  const users = use(usersPromise)
//   console.log("Users: ", users)

  const handleClick = (e) => {
    const value = e.target.value
    setSearchItem(value)
    
    startTransition(() => {
        const filtered = users.filter((user) =>
          user.title.toLowerCase().includes(value.toLowerCase()),
        )
        setFilteredItems(filtered)
    })
  }

//   console.log("Filtered Data: ", filteredItems)

  return (
    <div className='transition'>
      <div className='navbar'>
        <h1>Mark State Updates Non-Urgent With startTransition Function</h1>
        <form>
          <input
            type='text'
            value={searchItem}
            placeholder='Search...'
            onChange={handleClick}
          />
        </form>
      </div>
      <LargestList items={searchItem === '' ? users : filteredItems} />
    </div>
  )
}

export default Transition
