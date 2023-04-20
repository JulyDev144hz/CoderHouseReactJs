import React, { useEffect } from 'react'

import useFetch from '../../utils/useFetch'

import ItemComponent from '../ItemComponent/ItemComponent'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

  const {idCategory} = useParams()

  const { data, loading } = useFetch("https://fakestoreapi.com/products")

  useEffect(() => {

    return () => {
    }
  }, [idCategory])


  return (
    <div className="container">
      <div className='row' style={{ height: "100vh" }}>
        <br />
        <br />
        <br />
        <br />

        {loading ? (
          <h1>Loading</h1>
        ) : (
          data.map(e => {
            if (idCategory === "1") {
              if (e.category === "men's clothing") {
                return (
                  <ItemComponent id={e.id} title={e.title} description={e.description} price={e.price} img={e.image} />
                )
              }
            } else if (idCategory === "2") {
              if (e.category === "women's clothing") {
                return (
                  <ItemComponent id={e.id} title={e.title} description={e.description} price={e.price} img={e.image} />
                )
              }
            }

            else {
              if (e.category === "men's clothing" || e.category === "women's clothing") {
                return (
                  <ItemComponent id={e.id} title={e.title} description={e.description} price={e.price} img={e.image} />
                )
              }
            }
          })
        )}

      </div>
    </div>
  )
}

export default ItemListContainer