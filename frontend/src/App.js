import React from "react";
import {Routes, Routes} from 'react-router-dom';
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Review from "../Components/Review";


function App(){
  return(
    <div classname="7">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/product'element={<Product/>} />
        <Route exact path='/review'element={<Review/>} />
      </Routes>
    </div>
  )
}