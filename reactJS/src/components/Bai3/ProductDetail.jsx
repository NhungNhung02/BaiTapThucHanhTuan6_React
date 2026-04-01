import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail(){
    const{id} =useParams()

    return(
        <div>
            <h2>Chi tiet san pham</h2>
            <p>Prouct ID: {id}</p>
        </div>
    )
}