import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function ItemComponent({ item }) {

    const {addToCart,removeFromCart} = useContext(CartContext)
    
    const addStock = ()=>{
        addToCart(item)
    }
    const removeStock = ()=>{
        removeFromCart(item.id)
    }

  return (
    <div className="col s4 ">
      {!item.count ? (
        <Link to={`/producto/${item.id}`}>
          <div className="cardItemComponent">
            <img src={item.image} alt="" />
            <h6>{item.title}</h6>
          </div>
        </Link>
      ) : (
        <div className="cardItemComponentCart">
          <Link to={`/producto/${item.id}`}>
            <div className="cardItemComponentCartContent">
              <img src={item.image} alt="" />
              <h6>{item.title}</h6>
            </div>
          </Link>
          <div className="addCountItemComponentCart">
            <button onClick={removeStock}>-</button>
            <span>{item.count}</span>
            <button onClick={addStock}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemComponent;
