import React, { useEffect } from 'react'


import ItemComponent from '../ItemComponent/ItemComponent'
import { useParams } from 'react-router-dom'
import useFirestore from '../../utils/useFirestore'

function ItemListContainer() {

  const {idCategory} = useParams()

  const nameCollection = 'items'
  const documentId = 'hMoNFraRKdLEkhE6fM4k'

  const [data, loading ] = useFirestore({nameCollection,documentId})

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