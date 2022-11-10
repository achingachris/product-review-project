import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const [product, setProduct] = useState({})

  const { id } = useParams()
  // get product by id
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [])

  return (
    <>
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>{product.product_name}</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              All products Available for Review
            </p>
          </div>
        </div>
      </header>
    </>
  )
}

export default Product
