import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Layout from './layout/Layout'

import Home from './pages/Home'
import Product from './Components/Product'
import Review from './Components/Review'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/reviews' element={<Review />} />
      </Routes>
    </Layout>
  )
}

export default App
