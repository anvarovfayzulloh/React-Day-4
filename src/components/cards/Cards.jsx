import React from 'react'
import './cards.css'
import rating__stars from "../../assets/images/rating__stars.svg"

const Cards = ({product}) => {
    return (
        <div className='card' >
            <img className='card__img' src={product.images[0]} alt="" />
            <h3 className='card__title' >{product.title.slice(0, 16) ? product.title.slice(0, 15) + '...' : product.title}</h3>
            <div className='rating__wrapper' >
                <img src={rating__stars} alt="" />
                <strong className='card__rating' >{product.rating}/5</strong>
            </div>
            <p className='card__price' >${product.price}</p>
        </div>
    )
}

export default Cards