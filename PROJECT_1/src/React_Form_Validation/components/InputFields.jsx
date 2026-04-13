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

  const [errors, setErrors] = useState({})

  // console.log('ITEMS: ', items)

  const nameValidation = () => {
    const name = input.name.trim()
    const pattern = /^[A-Za-z ]+$/
    if (name === '') {
      return '** name is required'
    } else if (name.length < 2) {
      return '** name must contain at least 2 containers'
    } else if (!pattern.test(name)) {
      return '** only text allowed'
    }

    return ''
  }

  const emailValidation = () => {
    const email = input.email.trim()
    const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    if (email === '') {
      return '** email is required'
    } else if (!pattern.test(email)) {
      return '** enter a valid email address'
    }

    return ''
  }

  const ageValidation = () => {
    const age = input.age.trim()
    if (age === '') {
      return '** age is required'
    } else if (isNaN(age)) {
      return '** enter a valid age(number)'
    } else if (age.length < 1 || age.length > 99) {
      return '** enter a valid age'
    }

    return ''
  }

  const genderValidation = () => {
    const gender = input.gender
    if (!gender.checked) {
      return '** select gender'
    }

    return ''
  }

  const passwordValidation = () => {
    const password = input.password.trim()
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
    if(password === "") {
      return '** password is required'
    } else if(password.length < 8){
      return '** password must have at least 8 characters'
    }
     else if(!pattern.test(password)) {
      return '** password must contain at least one uppercase letter'
    }

  }

  const matchPassword = () => {
    if(!(input.password !== '' && input.confirmPassword !== '' && (input.password === input.confirmPassword))) {
      return '** password does not match'
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const nameError = nameValidation()
    if (nameError) {
      setErrors({ name: nameError })
    }

    const emailError = emailValidation()
    if (emailError) {
      setErrors({ email: emailError })
    }

    const ageError = ageValidation()
    if (ageError) {
      setErrors({ age: ageError })
    }

    const genderError = genderValidation()
    if (genderError) {
      setErrors({ gender: genderError })
    }

    const passwordError = passwordValidation()
    if(passwordError) {
      setErrors({ password: passwordError })
    }

    const confirmPasswordError = passwordValidation()
    if(confirmPasswordError) {
      setErrors({ confirmPassword: confirmPasswordError })
    }

    const passwordMatchingError = matchPassword()
    if(passwordMatchingError) {
      setErrors({ passwordMatching: passwordMatchingError })
    }

    const newUser = {
      id: Date.now(),
      ...input,
    }
    const updatedUsers = [...items, newUser]
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
      passwordMatching: ''
    })
    // setErrors({
    //   name: '',
    //   email: '',
    //   age: '',
    //   gender: '',
    //   skills: [],
    //   role: '',
    //   phone: '',
    //   experience: '0',
    //   password: '',
    //   confirmPassword: '',
    // })
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
            {errors.passwordMatching && <p className='error'>{errors.passwordMatching}</p>}
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
