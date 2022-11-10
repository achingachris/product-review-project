import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./SearchBar";
function NavBar(){
    return(
        <div className="container-fluid">
            <div className="navbar">
                
                <NavLink to='/'>Home</NavLink>                
               <NavLink to= '/Product'>Product</NavLink>
               <NavLink to= '/review'>Review</NavLink>
                 <SearchBar/>         
            </div>
        </div>
    )
}

export default NavBar;
