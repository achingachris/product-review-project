import React from 'react'
import {NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap-grid.min.css';
function Navbar(){
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