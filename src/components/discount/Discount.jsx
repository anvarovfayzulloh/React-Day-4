import React from 'react'
import './discount.css'
import cancel from '../../assets/images/cancel.svg'

const Discount = () => {
  return (
    <div id='discount' className='discount' >
      <div className="container">
        <div className="discount__wrapper">
          <span></span>
          <strong className='discount__text' >
            Sign up and get 20% off to your first order. <span className='span' > Sign Up Now</span>
          </strong>
          <button onClick={() => document.getElementById('discount').remove()} className='discount__btn' ><img src={cancel} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Discount