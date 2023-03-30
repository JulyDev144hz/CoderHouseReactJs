import React from 'react'

function ItemListContainer(props) {
  return (
    <div className='valign-wrapper' style={{height:"100vh"}}>
        <h3 className=''>{props.item}</h3>
    </div>
  )
}

export default ItemListContainer