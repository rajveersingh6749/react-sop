import { use, useEffect, useState } from 'react'
import './Third.css'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
  (response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data!')
    }
    return response.json()
  },
)

const Third = () => {
  const [results, setResults] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const [editId, setEditId] = useState(null)

  const users = use(usersPromise)
  useEffect(() => {
    setResults(users.slice(0, 5))
  }, [users])

  console.log('Users: ', users)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEdit = (result) => {
    setFormData({
      name: result.name,
      email: result.email,
    })
    setEditId(result.id)
  }

  const handleDelete = async (deleteId) => {
    // DELETE
    await fetch(`https://jsonplaceholder.typicode.com/users/${deleteId}`, {
      method: 'DELETE',
    })
    setResults(results.filter((result) => result.id !== deleteId))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (editId) {
      // PUT
      await fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((response) =>
          setResults(
            results.map((result) => (result.id === editId ? response : result)),
          ),
        )

      setEditId(null)
    } else {
      // POST
      await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((response) =>
          setResults([...results, { ...response, id: Date.now() }]),
        )
    }

    setFormData({ name: '', email: '' })
  }

  return (
    <div className='third'>
      <h1>Fetch Data Using use API</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter Name'
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Email'
          required
        />
        <button type='submit'>{editId ? 'Update' : 'Add'} User</button>
      </form>

      {results.map((result) => (
        <div key={result.id}>
          <p>
            <b>Name: </b>
            {result.name}
          </p>
          <p>
            <b>Email: </b>
            {result.email}
          </p>
          <button onClick={() => handleEdit(result)}>Edit</button>
          <button onClick={() => handleDelete(result.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Third
