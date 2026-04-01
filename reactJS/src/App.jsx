import { Routes, Route, Link } from 'react-router-dom'

import { AuthProvider } from './components/Bai6/AuthContext'
import ProtectedRoute from './components/Bai6/ProtectedRoute'
import Login from './components/Bai6/Login'

import Home from './components/Bai1/Home'
import About from './components/Bai1/About'
import Contact from './components/Bai1/Contact'
import Notfound from './components/Bai2/Notfound'

import Products from './components/Bai3/Products'
import ProductDetail from './components/Bai3/ProductDetail'

import Dashboard from './components/Bai4/Dashboard'
import Profile from './components/Bai4/Profile'
import Orders from './components/Bai4/Orders'
import Setting from './components/Bai4/Setting'

import Checkout from './components/Bai5/Checkout'

function App() {
  return (
    <AuthProvider>
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/about">About</Link>{' | '}
        <Link to="/contact">Contact</Link>{' | '}
        <Link to="/products">Products</Link>{' | '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Setting />} />
        </Route>

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AuthProvider>
  )
}

export default App