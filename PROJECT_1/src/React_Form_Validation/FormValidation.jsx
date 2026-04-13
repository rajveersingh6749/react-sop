import { useEffect, useState } from 'react'
import InputFields from './components/InputFields'
import List from './components/List'
import { defaultUsers } from './components/Data'
import './FormValidation.css'

const FormValidation = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('_USERS'))

    if (!stored) {
      localStorage.setItem('_USERS', JSON.stringify(defaultUsers))
      setItems(defaultUsers)
    } else {
      setItems(stored)
    }
  }, [])

  return (
    <div className='_container'>
      <h1 className='title'>User Management Dashboard</h1>
      <div className='app_container'>
        <InputFields items={items} setItems={setItems} />
        <List items={items} />
      </div>
    </div>
  )
}

export default FormValidation
