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
      <div className='row'>
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
                  <ItemComponent item={e} />
                )
              }
            } else if (idCategory === "2") {
              if (e.category === "women's clothing") {
                return (
                  <ItemComponent item={e} />
                )
              }
            }

            else {
              if (e.category === "men's clothing" || e.category === "women's clothing") {
                return (
                  <ItemComponent item={e} />
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