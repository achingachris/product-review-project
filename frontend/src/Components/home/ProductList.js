import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductList = () => {
  const [products, setProducts] = useState([])
  
  // get all products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <section>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
