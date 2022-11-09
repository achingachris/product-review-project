import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Review from "./Components/Review";


function App(){
  return(
    <div classname="7">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/product'element={<Product/>} />
        <Route exact path='/review'element={<Review/>} />
      </Routes>
    </div>
  )
}

export default App;