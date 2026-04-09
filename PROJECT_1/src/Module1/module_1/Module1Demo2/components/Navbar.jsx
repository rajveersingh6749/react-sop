import '../styles/style.css'

export default function Navbar({ title }) {
  return (
    <nav className='navbar'>
      <h1>{title}</h1> {/* embedding expression */}
      <p>{new Date().toLocaleDateString()}</p>
    </nav>
  )
}
