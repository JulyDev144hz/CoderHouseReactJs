import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useState } from "react";

import { useContext } from "react";
import CartContext from "../context/CartContext";
import useFirestore from "../utils/useFirestore";

function ItemDetail() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);

  const { addToCart } = useContext(CartContext);

  const addItem = () => {
    addToCart(product);
  };
  const nameCollection = "items";
  const documentId = "hMoNFraRKdLEkhE6fM4k";

  const [data, loading] = useFirestore({ nameCollection, documentId });
  useEffect(() => {
    if (!loading) {
      data.map((i) => {
        if (parseInt(i.id) === parseInt(idProduct)) {
          setProduct(i);
        }
        return ''
      });
    }
  }, [!loading]);

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
