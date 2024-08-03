import React from 'react'
import "./partners.css"
import versace from "../../assets/images/versace.png"
import zara from "../../assets/images/zara-logo-1 1.png"
import gucci from "../../assets/images/gucci-logo-1 1.png"
import prada from "../../assets/images/prada-logo-1 1.png"
import klein from "../../assets/images/klein.png"

const Partners = () => {
  return (
    <div className='partners'>
        <div className="container">
            <div className="partners__wrapper">
                <img src={versace} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={klein} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Partners