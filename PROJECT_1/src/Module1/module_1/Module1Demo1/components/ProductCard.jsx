import '../styles/style.css'

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product_card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className='product_card_btn' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}
