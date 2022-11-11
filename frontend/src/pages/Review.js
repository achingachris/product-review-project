import { useEffect, useState } from 'react'
import axios from 'axios'

const Review = () => {
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])

  // form states
  const [getUser, setGetUser] = useState('')
  const [getProduct, setGetProduct] = useState('')
  const [reviewComment, setReviewComment] = useState('A sample Comment')

  // get all reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get('/reviews')
      setReviews(data)
    }
    fetchReviews()
  }, [])

  // get all products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  // get all users
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/users')
      setUsers(data)
    }
    fetchUsers()
  }, [])

  // handle form submit

  const handleCommentChange = (e) => {
    setReviewComment(e.target.value)
  }

  const handleUserChange = (e) => {
    setGetUser(e.target.value)
    console.log(e.target.value)
  }

  const handleProductChange = (e) => {
    setGetProduct(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
    const review = {
      user_id: getUser,
      product_id: getProduct,
      comment: reviewComment,
    }
    console.log(review)
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
  }

  return (
    <>
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Reviews</h1>
          </div>
        </div>
      </header>

      {/* get all reviews */}
      <section className='container'>
        {reviews.map((review) => (
          <div className='row' key={review.id}>
            <div className='col-md-7'>
              <h3>{review.user.name}</h3>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </section>

      {/* add a review */}
      <section className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <h3>Add a review</h3>
            <form onSubmit={handleSubmit}>
              {/* select user */}
              <div className='form-group'>
                <label htmlFor='comment'>Select User</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={handleUserChange}
                >
                  <option>Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* slect product */}
              <div className='form-group'>
                {/* select user */}
                <label htmlFor='comment'>Select Product</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={handleProductChange}
                >
                  <option>Select Product Name</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.product_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='comment'>Comment</label>
                <textarea
                  className='form-control'
                  id='comment'
                  value={reviewComment}
                  onChange={handleCommentChange}
                  rows='3'
                  placeholder='Enter your comment'
                ></textarea>
              </div>
              <button type='submit' className='btn btn-primary m-3'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review
