import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import ItemComponent from "../components/ItemComponent/ItemComponent";

function CartView() {
  const { cart } = useContext(CartContext);


  return (
    <div className="cartView">
      <h1>CartView</h1>
      <div className="container">
        <div className="row">
          {cart
            ? cart.map((e) => {
                return (
                  <ItemComponent
                    item={e}
                  />
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default CartView;
