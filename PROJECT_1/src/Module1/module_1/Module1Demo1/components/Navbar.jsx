import '../styles/style.css'

export default function Navbar({ cartCount }) {
  return (
    <nav className="nav_bar">
      <h2 className='title'>MyStore</h2>
      <h3>Cart: {cartCount}</h3>
    </nav>
  )
}
