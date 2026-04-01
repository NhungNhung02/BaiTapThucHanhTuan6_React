import { Routes, Route, Link } from 'react-router-dom'

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
    <>
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

        {/* Route danh sách sản phẩm */}
        <Route path="/products" element={<Products />} />

        {/* Route chi tiết sản phẩm */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Route 404 */}
        <Route path="*" element={<Notfound />} />
        {/* Route Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/settings" element={<Setting />}></Route>
        {/* Route useNavigate */}
        <Route path="/checkout" element={<Checkout />}></Route>


      </Routes>
    </>
  )
}

export default App