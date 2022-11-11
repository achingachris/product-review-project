import { useEffect, useState } from 'react'
import axios from 'axios'

const Review = () => {
  const [reviews, setReviews] = useState([])
  const [users, setUsers] = useState([])

  // form states
  const [reviewComment, setReviewComment] = useState('A sample Comment')

  // get all reviews
  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get('/reviews')
      setReviews(data)
    }
    fetchReviews()
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
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
              <div className='form-group'>
                <label htmlFor='comment'>Select User</label>

                <select
                  className='form-select'
                  aria-label='Default select example'
                >
                  <option selected=''>Open this select menu</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
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
