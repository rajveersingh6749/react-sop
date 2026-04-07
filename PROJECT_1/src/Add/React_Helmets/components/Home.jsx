import { Link } from 'react-router-dom'
import { PRODUCTS } from './Products'
import SEO from './SEO'
import '../styles/styles.css'

const Home = () => {
  return (
    <div>
      <SEO
        title='Home | My Store'
        description='Browse latest products like iPhone, MacBook and more.'
      />
      <ul className='list_helmet_container'>
        {PRODUCTS.map((product) => (
          <li key={product.id} className='product_list_item'>
            <Link to={`/helmet/product/${product.id}`} className='product_link'>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
