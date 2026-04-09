import '../styles/style.css'

export default function ProductCard({ product }) {
  const isExpensive = product.price > 1000

  return (
    <div className={`card ${isExpensive ? 'expensive' : ''}`}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.category.toUpperCase()}</p>

      {/* embedding expressions */}
      <span>{isExpensive ? 'Premium Product 💎' : 'Budget Friendly 💰'}</span>
    </div>
  )
}
