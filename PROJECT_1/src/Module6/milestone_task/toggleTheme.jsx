import { useCallback, useEffect, useMemo, useState } from 'react'
import Card1 from './components/Card1'
import './toggleTheme.css'
import { ThemeContext } from './ThemeContext'

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [user] = useState('Millie')

  // const formattedUser = user.toUpperCase()
  // console.log(formattedUser)
  const formattedUser = useMemo(() => {
    console.log('Formatting user...')
    return user.toUpperCase()
  }, [user])

  // alert(`Hello ${formattedUser}`)
  const greetUser = useCallback(() => {
    alert(`Hello ${formattedUser}`)
  }, [formattedUser])

  const themeHandler = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'

    return () => {
      document.body.className = ''
    }
  }, [darkMode])

  return (
    <>
      <ThemeContext.Provider
        value={{
          darkMode,
          themeHandler,
          formattedUser,
          greetUser,
        }}
      >
        <h1>Milestone Task 6:</h1>
        <div className='top_level'>
          <h2>Toggle Theme Component</h2>
          <h3>{`Hello ${formattedUser}`}</h3>
          <Card1 />
          {/* <Card1 darkMode={darkMode} setDarkMode={themeHandler} /> */}
        </div>
      </ThemeContext.Provider>

      {/* <h1>Milestone Task 6:</h1>
      <div className='top_level'>
        <h2>Toggle Theme Component</h2>
        <h3>{`Hello ${formattedUser}`}</h3>
        <Card1
          darkMode={darkMode}
          setDarkMode={themeHandler}
        />
      </div> */}
    </>
  )
}

export default ToggleTheme
