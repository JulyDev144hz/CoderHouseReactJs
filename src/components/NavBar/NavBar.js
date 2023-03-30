import React from 'react'
import 'materialize-css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className='navbar-fixed' >
      <nav style={{background:"rgba(0,0,0,.2)", top:0, left: 0} }>

        <div class="nav-wrapper z-depth-4">
          <a href="#" class="brand-logo ml-2"><img src="../../imgs/Screenshot_1.png" alt="" class="circle responsive-img" /> SneakerSociety</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li></li>
            <li><a href="#">Jordan</a></li>
            <li><a href="#">Air Force One</a></li>
            <li><a href="#">Blazer</a></li>
            <li><CartWidget /></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar