import React from 'react'
import '../styles/styles.css'

function ProductCard({ product, addToCart }) {
  console.log(`${product.name} rendered`)

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default React.memo(ProductCard)
