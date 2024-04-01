import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct, getAllProducts } from './Api/product'
import { Tproduct } from './interfaces/product'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Tproduct[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getAllProducts()
      setProducts(data)
    })()
  }, [])
  const handleAddProduct = (product: Tproduct) => {
    ;(async () => {
      const newProduct = await createProduct(product)
      setProducts([...products, newProduct])
      navigate('/admin')
    })()
  }
  return (
    <>
      <Header />
      <main className='main container'>
        <Routes>
          {/* client */}
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          {/* admin */}
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
          </Route>

          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
