import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch';
import { useState } from 'react';


function ItemDetail() {
    const { idProduct } = useParams();
    const [product, setProduct] = useState([]);



    useEffect(() => {
        return () => {
            fetch(`https://fakestoreapi.com/products/${idProduct}`)
                .then(r => r.json())
                .then(data => setProduct(data))
        }
    }, [idProduct])


    return (
        <div className='productDetail'>
            <img src={product.image} alt="" />
            <div className='productDetailInformation'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="productDetailPrice">
                    <span>U$D {product.price}</span>
                    <span>Category: {product.category}</span>
                </div>
                <button>Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default ItemDetail