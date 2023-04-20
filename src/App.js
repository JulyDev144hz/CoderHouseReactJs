import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './views/LandingPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './views/ItemDetail';

import {routes} from './routes'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={routes.root} element={<LandingPage />}></Route>
        <Route path={routes.catalogue} element={<ItemListContainer />}></Route>
        <Route path={routes.category} element={<ItemListContainer />}></Route>
        <Route path={routes.productDetail} element={<ItemDetail />}></Route>
      </Routes>

      
    </Router>
  );
}

export default App;
