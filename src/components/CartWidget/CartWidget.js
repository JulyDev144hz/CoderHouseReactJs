import React from 'react'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'

function CartWidget() {
  const {cart} = useContext(CartContext)



  return (
    <Link to={routes.cart}><i className='material-icons left'>shopping_cart</i> {cart.length}</Link>
  )
}

export default CartWidget