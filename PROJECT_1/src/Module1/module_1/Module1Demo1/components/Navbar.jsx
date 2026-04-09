export default function Navbar({ cartCount }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>My Store</h2>
      <h3>Cart: {cartCount}</h3>
    </nav>
  )
}
