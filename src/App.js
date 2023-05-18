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
  const [totalCart, setTotalCart] = useState(0);



  const addToCart = (item) => {
    setTotalCart(totalCart+1)
    let coincidencias = cart.filter((i) => i.id === item.id);
    try{
      cart[cart.indexOf(coincidencias[0])].count = coincidencias[0].count + 1;
      setCart(cart)
    } catch {
      item.count = 1
      setCart([...cart, item]);
    }
  };
  const removeFromCart = (id) => {
    cart.map(i=>{
      if(i.id===id){
        i.count--
        setTotalCart(totalCart-1)
      }

      if(i.count==0){
        setCart(cart.filter(_i=>!(_i.id===id)))
        
      }else{
        setCart(cart)
      }
    })
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, totalCart}}>
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
