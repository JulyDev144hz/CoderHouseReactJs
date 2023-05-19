import React, { useContext, useMemo } from "react";
import CartContext from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Brief = () => {
  const collectionOrders = "orders";
  const { cart ,setCart} = useContext(CartContext);
  const navigate = useNavigate();

  const _totalCompra = useMemo(() => {
    return cart.reduce(
      (partialSum, item) => partialSum + parseFloat(item.price),
      0
    );
  }, [cart]);

  const _order = useMemo(() => {
    const items = cart;
    const date = new Date().toLocaleDateString("es-AR");
    return { items, date };
  }, [cart]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`order de compra creada: ${id}`);
      setCart([])
      navigate('/')
    });
  };

  return (
    <div className="briefContainer">
      <span className="Pzas">PZAS: {cart.length}</span>
      <span className="Total">TOTAL: {_totalCompra}$</span>
      <button className="btnComprar" onClick={actionBuy}>Comprar</button>
    </div>
  );
};

export default Brief;
