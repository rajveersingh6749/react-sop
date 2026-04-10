import { useEffect, useState } from 'react'
import InputFields from './components/InputFields'
import List from './components/List'
import './FormValidation.css'

const defaultUsers = [
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    gender: 'male',
    skills: ['HTML', 'CSS'],
    phone: '9999999999',
    experience: '2',
    age: 25,
  },
  {
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    gender: 'female',
    skills: ['React'],
    phone: '8888888888',
    experience: '3',
    age: 28,
  },
  {
    name: 'Alex',
    email: 'alex@gmail.com',
    gender: 'male',
    skills: ['JS'],
    phone: '7777777777',
    experience: '1',
    age: 22,
  },
]

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
    <div className='app_container'>
      <InputFields items={items} setItems={setItems} />
      <List items={items} />
    </div>
  )
}

export default FormValidation
