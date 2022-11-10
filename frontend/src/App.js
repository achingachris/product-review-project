import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/products' element={<Product />} />
      </Routes>
    </Layout>
  )
}

export default App
