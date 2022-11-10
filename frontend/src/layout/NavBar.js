import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow fixed-top'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          ProductYelp
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <NavLink className='navbar-brand' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='navbar-brand' to='/products'>
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='navbar-brand' to='/reviews'>
                Review
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='navbar-brand' to='/register'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
