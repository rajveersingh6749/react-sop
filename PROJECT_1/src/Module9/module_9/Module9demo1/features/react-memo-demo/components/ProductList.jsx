import ProductCard from './ProductCard'
import '../styles/styles.css'

export default function ProductList({ products, addToCart }) {
  console.log('ProductList Rendered')

  return (
    <div className='product-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}
