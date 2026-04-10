import { useState } from 'react'
import './InputFields.css'

const InputFields = ({ items, setItems }) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    skills: [],
    role: '',
    phone: '',
    experience: '0',
    password: '',
    confirmPassword: '',
  })

  console.log('ITEMS: ', items)

  const submitHandler = (e) => {
    e.preventDefault()

    const updatedUsers = [...items, input]
    localStorage.setItem('_USERS', JSON.stringify(updatedUsers))
    setItems(updatedUsers)

    resetForm()
  }

  const resetForm = () => {
    setInput({
      name: '',
      email: '',
      age: '',
      gender: '',
      skills: [],
      role: '',
      phone: '',
      experience: '0',
      password: '',
      confirmPassword: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSkills = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setInput({
        ...input,
        skills: [...input.skills, value],
      })
    } else {
      setInput({
        ...input,
        skills: input.skills.filter((skill) => skill !== value),
      })
    }
  }

  return (
    <div className='main_container'>
      <div className='form_container'>
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={input.name}
              onChange={handleChange}
              placeholder='enter your name...'
              minLength={2}
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={input.email}
              onChange={handleChange}
              placeholder='enter your email...'
            />
          </label>
          <label>
            Age:
            <input
              type='number'
              name='age'
              value={input.age}
              onChange={handleChange}
              placeholder='enter your age...'
            />
          </label>
          <div className='gender'>
            <label>Gender:</label>
            <label>
              <input
                type='radio'
                name='gender'
                value='male'
                checked={input.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type='radio'
                name='gender'
                value='female'
                checked={input.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div className='skills'>
            <label>Skills:</label>
            <label>
              <input
                type='checkbox'
                value='HTML'
                checked={input.skills.includes('HTML')}
                onChange={handleSkills}
              />
              HTML
            </label>
            <label>
              <input
                type='checkbox'
                value='CSS'
                checked={input.skills.includes('CSS')}
                onChange={handleSkills}
              />
              CSS
            </label>
            <label>
              <input
                type='checkbox'
                value='JS'
                checked={input.skills.includes('JS')}
                onChange={handleSkills}
              />
              JS
            </label>
          </div>
          <label>Role:</label>
          <select name='role' value={input.role} onChange={handleChange}>
            <option value='' disabled>
              Select
            </option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='fullstack'>Fullstack</option>
          </select>

          <label>
            Phone:
            <input
              type='tel'
              name='phone'
              value={input.phone}
              onChange={handleChange}
              placeholder='enter your phone number...'
            />
          </label>
          <label>
            Experience:
            <input
              type='range'
              name='experience'
              value={input.experience}
              onChange={handleChange}
            />
            <span>{input.experience}</span>
          </label>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={input.password}
              onChange={handleChange}
              placeholder='enter your password...'
            />
          </label>
          <label>
            Confirm Password:
            <input
              type='password'
              name='confirmPassword'
              value={input.confirmPassword}
              onChange={handleChange}
              placeholder='enter your password...'
            />
          </label>

          <div className='btn'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputFields
