import React from 'react'
import { Link } from 'react-router-dom'

function ItemComponent({ id, title, img }) {
    return (
        <div className="col s4 ">
            <Link to={`/producto/${id}`}>
                <div className="cardItemComponent">
                    <img src={img} alt="" />
                    <h6>{title}</h6>
                </div>
            </Link>
        </div>
    )
}

export default ItemComponent