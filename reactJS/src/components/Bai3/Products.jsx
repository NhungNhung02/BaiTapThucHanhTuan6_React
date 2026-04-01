import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  const productList = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' },
  ]

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            {/* Link tới trang chi tiết với dynamic param */}
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}