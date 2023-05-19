import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import ItemComponent from "../components/ItemComponent/ItemComponent";
import Brief from "../components/Brief/Brief";
function CartView() {
  const { cart } = useContext(CartContext);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    return () => {
      let ids = [];
      let newProducts = [];
      cart.map((i) => {
        if (ids.includes(i.id)) {
          return;
        } else {
          newProducts.push(i);
          ids.push(i.id);
        }
      });
      setProductos(newProducts);
    };
  }, []);

  return (
    <>
      <div className="cartView">
        <h1>
          <i className="material-icons left">shopping_cart</i>Carrito
        </h1>
        <div className="container">
          <div className="row">
            {productos
              ? productos.map((e) => {
                  e.cartView = true;
                  return <ItemComponent item={e} />;
                })
              : "loading"}
          </div>
        </div>
      </div>
      {cart.length>0?<Brief></Brief>:''}
    </>
  );
}

export default CartView;
