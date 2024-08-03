import React from 'react'
import './categories.css'
import casual from "../../assets/images/casual.png"
import formal from "../../assets/images/formal.png"
import party from "../../assets/images/party.png"
import gym from "../../assets/images/gym.png"

const Categories = () => {
    return (
        <section className='categories' >
            <div className="container">
                <div className="categories__wrapper">
                    <h3 className='categories__title' >
                        BROWSE BY dress STYLE
                    </h3>
                    <div className='categories__cards' >
                        <div className='first__line' >
                            <div className='categories__card' >
                                <h2 className='categories__card-title' >
                                casual
                                </h2>
                                <img className='categories__card__img' src={casual} alt="" />
                            </div>
                            <div className='categories__card' >
                                <h2 className='categories__card-title' >
                                formal
                                </h2>
                                <img className='categories__card__img' src={formal} alt="" />
                            </div>
                        </div>
                        <div className='second__line' >
                        <div className='categories__card' >
                                <h2 className='categories__card-title' >
                                party
                                </h2>
                                <img className='categories__card__img' src={party} alt="" />
                            </div>
                            <div className='categories__card' >
                                <h2 className='categories__card-title' >
                                gym
                                </h2>
                                <img className='categories__card__img' src={gym} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories