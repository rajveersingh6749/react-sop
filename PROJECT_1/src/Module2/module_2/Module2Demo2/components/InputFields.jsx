import { useEffect, useState } from 'react'
import './InputFields.css'

const InputFields = ({ items, setItems, editUser, setEditUser }) => {
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

  const [errors, setErrors] = useState({})

  // If edit button gets clicked form is filled with the details and let the password and confirm password be empty.
  useEffect(() => {
    if (editUser) {
      setInput({
        ...editUser,
        password: '',
        confirmPassword: '',
      })
    }
  }, [editUser])

  // Prevent page from getting refreshed if any changes are made during editing otherwise let it be refreshed.
  useEffect(() => {
    if (
      editUser &&
      (input.name.trim() !== editUser.name.trim() ||
        input.email !== editUser.email ||
        input.age !== editUser.age ||
        input.gender !== editUser.gender ||
        JSON.stringify(input.skills) !== JSON.stringify(editUser.skills) ||
        input.role !== editUser.role ||
        input.phone.trim() !== editUser.phone.trim() ||
        input.experience !== editUser.experience)
    ) {
      const handleReload = (e) => {
        e.preventDefault()
      }
      // console.log('Input Age: ', typeof input.age)
      // console.log('EditUser Age: ', typeof editUser.age)

      window.addEventListener('beforeunload', handleReload)
      return () => {
        window.removeEventListener('beforeunload', handleReload)
      }
    }
  }, [editUser, input])

  // Validate all the fields
  const validate = () => {
    const newErrors = {}

    const name = input.name.trim()
    const pattern = /^[A-Za-z ]+$/
    if (!name) {
      newErrors.name = '** Name is Required'
    } else if (name.length < 2) {
      newErrors.name = '** Name must be at least 2 characters'
    } else if (!pattern.test(name)) {
      newErrors.name = '** Only alphabets are allowed'
    }

    // Check whether the entry with current email already exists
    const email = input.email.trim()
    const isFound = items.some((item) => {
      return item.email.toLowerCase() === input.email.toLowerCase()
    })
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    if (email === '') {
      newErrors.email = '** Email is Required'
    } else if (!emailPattern.test(email)) {
      newErrors.email = '** Enter a valid email address'
    } else if (!editUser && isFound) {
      newErrors.email = '** Email already exits'
    }

    const age = input.age
    if (age === '') {
      newErrors.age = '** Age is Required'
    } else if (Number(age) < 1 || Number(age) > 99) {
      newErrors.age = '** Age must be between 1 to 100'
    }

    if (!input.gender) {
      newErrors.gender = '** Select your gender'
    }

    if (input.skills.length === 0) {
      newErrors.skills = '** Select your skills'
    }

    if (!input.role) {
      newErrors.role = '** Select your role'
    }

    const phonePattern = /^[6-9]\d{9}$/
    if (!input.phone) {
      newErrors.phone = '** Phone Number is Required'
    } else if (input.phone.length < 10 || input.phone.length > 10) {
      newErrors.phone = '** Phone No. must be 10 digits'
    } else if (!phonePattern.test(input.phone)) {
      newErrors.phone = '** Enter a valid number'
    }

    if (Number(input.experience) > 10) {
      newErrors.experience = '** Maximum 10 years of experience is allowed'
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    if (!input.password.trim()) {
      newErrors.password = '** Password is Required'
    } else if (input.password.trim().length < 8) {
      newErrors.password = '** Password must be at least 8 characters'
    } else if (!passwordPattern.test(input.password.trim())) {
      newErrors.password =
        '** Password must be a combination of uppercase, lowercase, digits and spacial characters'
    }

    if (!input.confirmPassword.trim()) {
      newErrors.confirmPassword = '** Confirm your password'
    } else if (input.password.trim() !== input.confirmPassword.trim()) {
      newErrors.confirmPassword = `** Passwords don't match`
    }

    return newErrors
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    // If any error occur stop form from being submitted
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    let updatedUsers
    if (editUser) {
      updatedUsers = items.map((item) =>
        item.id === editUser.id ? { ...input, id: editUser.id } : item,
      )
    } else {
      const newUser = {
        id: Date.now(),
        ...input,
      }
      updatedUsers = [...items, newUser]
    }

    localStorage.setItem('_USERS', JSON.stringify(updatedUsers))
    setItems(updatedUsers)

    setEditUser(null)
    setErrors({})
    resetForm()
  }

  // If form is empty, disable submit button
  const isFormEmpty = Object.values(input).every(
    (val) =>
      val === '' || val === '0' || (Array.isArray(val) && val.length === 0),
  )

  // Check Whether the form is valid.
  // const isFormValid = Object.keys(validate()).length === 0

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
            />
            {errors.name && <p className='error'>{errors.name}</p>}
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
            {errors.email && <p className='error'>{errors.email}</p>}
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
            {errors.age && <p className='error'>{errors.age}</p>}
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
            {errors.gender && <p className='error'>{errors.gender}</p>}
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

            <label>
              <input
                type='checkbox'
                value='React'
                checked={input.skills.includes('React')}
                onChange={handleSkills}
              />
              React
            </label>
            {errors.skills && <p className='error'>{errors.skills}</p>}
          </div>

          <label>Role:</label>
          <select name='role' value={input.role} onChange={handleChange}>
            <option value='' disabled>
              Select
            </option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='fullstack'>Fullstack</option>
            <option value='react'>React</option>
          </select>
          {errors.role && <p className='error'>{errors.role}</p>}

          <label>
            Phone:
            <input
              type='tel'
              name='phone'
              value={input.phone}
              onChange={handleChange}
              placeholder='enter your phone number...'
            />
            {errors.phone && <p className='error'>{errors.phone}</p>}
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
            {errors.experience && <p className='error'>{errors.experience}</p>}
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
            {errors.password && <p className='error'>{errors.password}</p>}
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
            {errors.confirmPassword && (
              <p className='error'>{errors.confirmPassword}</p>
            )}
          </label>

          <div className='btn'>
            <button type='submit' disabled={isFormEmpty}>
              {editUser ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputFields
