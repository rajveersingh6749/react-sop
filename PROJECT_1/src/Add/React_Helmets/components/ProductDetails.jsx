import { Navigate, useParams } from 'react-router-dom'
import { PRODUCTS } from './Products'
import SEO from './SEO'

import '../styles/styles.css'

const ProductDetails = () => {
  const { id } = useParams()

  const product = PRODUCTS.find((product) => product.id === Number(id))
  console.log('Product with id', product)

  if (!product) {
    return <Navigate to='/helmet/' />
  }

  return (
    <div className='product_details_container'>
      <SEO
        title={`${product.name} | My Store`}
        description={product.description}
      />

      <h1>Product Details</h1>
      <div className='product_details'>
        <p>
          <b>Name: </b>
          {product.name}
        </p>
        <p>
          <b>Description: </b>
          {product.description}
        </p>
        <p>
          <b>Price: </b>
          {product.price}
        </p>
        <p>
          <b>Brand: </b>
          {product.brand}
        </p>
        <p>
          <b>Category: </b>
          {product.category}
        </p>
        <p>
          <b>Stock: </b>
          {product.stock}
        </p>
        <p>
          <b>Rating: </b>
          {product.rating}
        </p>
        <p>
          <b>Reviews: </b>
          {product.reviews}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
