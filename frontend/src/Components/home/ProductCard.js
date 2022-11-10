import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        {/* Product image*/}
        <img
          className='card-img-top'
          src={product.product_image}
          alt='...'
        />
        {/* Product details*/}
        <div className='card-body p-4'>
          <div className='text-center'>
            {/* Product name*/}
            <h5 className='fw-bolder'>{product.product_name}</h5>
            <p className='text-muted'>{product.description}</p>
          </div>
        </div>
        {/* Product actions*/}
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            <NavLink className='btn btn-outline-dark mt-auto' to='/product'>
              View Product
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
