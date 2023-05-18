import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useState } from "react";

import { useContext } from "react";
import CartContext from "../context/CartContext";

function ItemDetail() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);

  const { addToCart } = useContext(CartContext);

  const addItem = () => {
    addToCart(product);
  };

  useEffect(() => {
    return () => {
      fetch(`https://fakestoreapi.com/products/${idProduct}`)
        .then((r) => r.json())
        .then((data) => setProduct(data));
    };
  }, [idProduct]);

  return (
    <div className="productDetail">
      {product.image ? (
        <>
          <img src={product.image} alt="" />
          <div className="productDetailInformation">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="productDetailPrice">
              <span>U$D {product.price}</span>
              <span>Category: {product.category}</span>
            </div>
            <button onClick={addItem}>Agregar al Carrito</button>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default ItemDetail;
