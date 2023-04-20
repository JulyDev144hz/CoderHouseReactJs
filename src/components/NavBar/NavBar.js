import React from 'react'
import 'materialize-css';
import CartWidget from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-fixed' style={{position:'fixed'}} >
      <nav style={{background:"rgba(30,0,0,.4)", top:0, left: 0} }>

        <div className="nav-wrapper z-depth-4">
          <Link to="/" class="brand-logo ml-2"><img src="../../imgs/Screenshot_1.png" alt="" class="circle responsive-img" /> SneakerSociety</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to={"catalogo"}>Catalogo</Link></li>
            <li><Link to={"catalogo/1"}>Hombres</Link></li>
            <li><Link to={"catalogo/2"}>Mujeres</Link></li>
            <li><CartWidget /></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar