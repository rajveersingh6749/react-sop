import ProductCard from './ProductCard'
import { products } from '../../data/product.js'
import '../../styles/style.css'

export default function ProductList({ addToCart }) {
  return (
    <div className='product-list'>
      {products.map((p) => (
        <ProductCard key={p.name} product={p} addToCart={addToCart} />
      ))}
    </div>
  )
}
