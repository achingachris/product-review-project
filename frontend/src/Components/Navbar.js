import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/review'>Review</NavLink>
        </div>
        </div>
  )
}

export default Navbar