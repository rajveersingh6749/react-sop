import '../styles/style.css'

const Navbar = ({ setView }) => {
  return (
    <div className='navbar'>
      <button onClick={() => setView('dashboard')}>Dashboard</button>
      <button onClick={() => setView('analytics')}>Analytics</button>
      <button onClick={() => setView('profile')}>Profile</button>
    </div>
  )
}

export default Navbar
