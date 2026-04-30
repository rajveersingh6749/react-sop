import ProductCard from './ProductCard'
import '../styles/style.css'

export default function ProductList({ products, addToCart }) {
  return (
    <div className='parent_product_list'>
      <div className='product_list'>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}
