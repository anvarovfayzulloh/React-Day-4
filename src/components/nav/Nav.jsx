import React from 'react'
import "./nav.css"
import arrow__down from "../../assets/images/arrow__down.svg"
import basket from "../../assets/images/basket.svg"
import profile__img from "../../assets/images/profile__img.svg"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper">
          <h1 className='nav__title' >SHOP.CO</h1>
          <ul className='nav__list' >
            <li>
              <Link to="/">Home<img src={arrow__down} alt="" /></Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#">Arrivals</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
          <input className='search__input' type="text" placeholder='Search for products...' />
          <div className='nav__actions' >
            <img src={basket} alt="" />
            <img src={profile__img} alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav