import { useEffect, useState } from 'react'
import InputFields from './components/InputFields'
import List from './components/List'
import { defaultUsers } from './components/Data'
import './FormValidation.css'

const FormValidation = () => {
  const [items, setItems] = useState([])
  const [editUser, setEditUser] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('_USERS'))

    if (!stored) {
      localStorage.setItem('_USERS', JSON.stringify(defaultUsers))
      setItems(defaultUsers)
    } else {
      setItems(stored)
    }
  }, [])

  const handleEdit = (user) => {
    setEditUser(user)
  }

  const handleDelete = (id) => {
    if (confirm('do you want to delete this entry?')) {
      const updatedItems = items.filter((item) => item.id !== id)
      setItems(updatedItems)
      localStorage.setItem('_USERS', JSON.stringify(updatedItems))
    }
  }

  return (
    <div className='_container'>
      <h1 className='title'>User Management Dashboard</h1>
      <div className='app_container'>
        <InputFields
          items={items}
          setItems={setItems}
          editUser={editUser}
          setEditUser={setEditUser}
        />
        <List
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default FormValidation
