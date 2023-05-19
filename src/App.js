import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "materialize-css/dist/css/materialize.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./views/ItemDetail";

import { routes } from "./routes";

import CartContext from "./context/CartContext";
import { useState } from "react";
import CartView from "./views/CartView";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (id) => {
    console.log(id)

    let borradoUno = false;
    let filtro = []
    cart.map((i) => {
      if(i.id!==id || (borradoUno && i.id===id)){
        filtro.push(i)
      }else if(i.id===id){
        borradoUno = true
      }
    });
    setCart(filtro);

  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart , setCart}}>
      <Router>
        <NavBar />
        <Routes>
          <Route path={routes.root} element={<LandingPage />}></Route>
          <Route
            path={routes.catalogue}
            element={<ItemListContainer />}
          ></Route>
          <Route path={routes.category} element={<ItemListContainer />}></Route>
          <Route path={routes.productDetail} element={<ItemDetail />}></Route>
          <Route path={routes.cart} element={<CartView />}></Route>
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
