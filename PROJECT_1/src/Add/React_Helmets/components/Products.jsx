import { PRODUCTS } from './Products'
import SEO from './SEO'

const Products = () => {
  return (
    <div className='product_details_container'>
      <SEO
        title='Products | My Store'
        description='Explore all available products in our store.'
      />

      <h1 className='product_title'>Products List</h1>
      <ul className='helmet_products_list'>
        {PRODUCTS.map((product, index) => (
          <li key={product.id} className='helmet_products_list_item'>
            <h2>{`${index + 1}. ${product.name}`}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
