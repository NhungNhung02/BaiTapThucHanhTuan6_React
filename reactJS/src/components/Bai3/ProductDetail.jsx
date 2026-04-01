import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const handleBuy = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <h2>Chi tiet san pham</h2>
            <p>Product ID: {id}</p>

            <button onClick={handleBuy}>
                Mua hàng
            </button>
        </div>
    )
}