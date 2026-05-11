import ProductCard from './ProductCard'
import '../styles/styles.css'

export default function ProductGrid({ products, addToCart }) {
  return (
    <div className='product-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}
