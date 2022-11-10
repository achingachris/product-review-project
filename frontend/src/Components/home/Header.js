const Header = () => {
  return (
    <header className='bg-dark py-5 mb-3'>
      <div className='container px-5'>
        <div className='row gx-5 justify-content-center'>
          <div className='col-lg-6'>
            <div className='text-center my-5'>
              <h1 className='display-5 fw-bolder text-white mb-2'>
                Product Review
              </h1>
              <p className='lead text-white-50 mb-4'>
                Just Add a Review, Nothing Much. Actually
              </p>
              <div className='d-grid gap-3 d-sm-flex justify-content-sm-center'>
                <a
                  className='btn btn-outline-light btn-lg px-4'
                  href='https://github.com/achingachris/product-review-project/'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
