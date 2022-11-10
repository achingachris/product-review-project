import React from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Layout from './layout/Layout'

import Home from './pages/Home'
import Product from './pages/Product'
import Review from './Components/Review'
import Form from './Components/Form'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/Form' element={<Form/>} />
        <Route exact path='/reviews' element={<Review />} />
      </Routes>
    </Layout>
  )
}

export default App
