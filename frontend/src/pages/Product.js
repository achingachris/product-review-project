import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const [product, setProduct] = useState({})
  // const [review, setReview] = useState('')

  const { id } = useParams()
  // get product by id
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  // console.log(product.reviews)

  return (
    <>
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>{product.product_name}</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              {product.description}
            </p>
          </div>
        </div>
      </header>

      {/* product display */}
      <section className='py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='row gx-4 gx-lg-5 align-items-center'>
            <div className='col-md-6'>
              <img
                className='card-img-top mb-5 mb-md-0'
                src={product.product_image}
                alt='...'
              />
            </div>
            <div className='col-md-6'>
              <h1 className='display-5 fw-bolder'>{product.product_name}</h1>
              <div className='fs-5 mb-5'></div>
              <p className='lead'>{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* reviews section */}
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <h1 className='text-center'>Available Reviews</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <h3>Chris Achinga</h3>
                <p>It is a good phone</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
