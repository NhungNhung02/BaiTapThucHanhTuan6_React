import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Bai1/Home'
import About from './components/Bai1/About'
import Contact from './components/Bai1/Contact'
import Notfound from './components/Bai2/Notfound'
import Products from './components/Bai3/Products'
import ProductDetail from './components/Bai3/ProductDetail'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/about">About</Link>{' | '}
        <Link to="/contact">Contact</Link>{' | '}
        <Link to="/products">Products</Link>
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
      </Routes>
    </>
  )
}

export default App