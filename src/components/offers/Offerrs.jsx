import React from 'react'
import './offers.css'

const Offerrs = () => {
    return (
        <section className='offers' >
            <div className="container">
                <div className="offers__wrapper">
                    <h2 className='offers__title' >
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <form className='offers__form' >
                        <input placeholder='Enter your email address' className='offers__input' type="email" />
                        <button className='offers__btn' >Subscribe to Newsletter</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Offerrs