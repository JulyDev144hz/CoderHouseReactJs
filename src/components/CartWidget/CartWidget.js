import React, { useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'

function CartWidget() {
  const {cart, totalCart} = useContext(CartContext)
  const [total, setTotal] = useState(0)



  return (
    <Link to={routes.cart}><i className='material-icons left'>shopping_cart</i> {totalCart}</Link>
  )
}

export default CartWidget