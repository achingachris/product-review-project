import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  const [products, setProducts] = useState([])
  // get all products
  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((resp) => resp.json())
      .then((products) => setProducts(products))
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
