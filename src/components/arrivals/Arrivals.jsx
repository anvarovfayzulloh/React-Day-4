import React, { useEffect, useState } from 'react'
import './arrivals.css'
import Cards from '../cards/Cards'

const Arrivals = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])
  return (
    <section className='arrivals' >
      <div className="container">
        <div className="arrivals__wrapper">
          <h2 className='arrivals__title' >
            NEW ARRIVALS
          </h2>
          <div className='card__wrapper' >
            {
              products.slice(0, 4).map(product => (
                <Cards product={product}/>
              ))
            }
          </div>
          <button className='arrivals__btn' >View All</button>
        </div>
      </div>
    </section>
  )
}

export default Arrivals