import axios from 'axios'
import { useEffect, useState } from 'react'
import './First.css'

const First = () => {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })

  const [editId, setEditId] = useState(null)

  const API = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    // GET
    axios
      .get(API)
      .then((res) => setUsers(res.data.slice(0, 5)))
      .catch((err) => console.log(err))
  }, [])

  // console.log(users)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEdit = (user) => {
    setFormData({
      title: user.title,
      body: user.body,
    })
    setEditId(user.id)
  }

  const handleDelete = async (deleteId) => {
    // DELETE
    await axios.delete(`${API}/${deleteId}`)
    setUsers(users.filter((user) => user.id !== deleteId))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (editId) {
      // PUT
      let response = await axios.put(`${API}/${editId}`, formData)
      // console.log(response.data)
      setUsers(users.map((user) => (user.id === editId ? response.data : user)))
      setEditId(null)
    } else {
      // POST
      let response = await axios.post(API, formData)
      // console.log(response)
      setUsers([...users, { ...response.data, id: Date.now() }])
    }

    setFormData({ title: '', body: '' })
  }

  console.log(users)

  return (
    <div className='first'>
      <h2>CRUD DEMO USING AXIOS</h2>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='Enter Title'
          required
        />
        <input
          type='text'
          name='body'
          value={formData.body}
          onChange={handleChange}
          placeholder='Enter Body'
          required
        />
        <button type='submit'>{editId ? 'Update' : 'Add'} User</button>
      </form>

      <hr />

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.title}</p>
          <p>{user.body}</p>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default First
