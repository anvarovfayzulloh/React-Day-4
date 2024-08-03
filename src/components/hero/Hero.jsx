import React from 'react'
import './hero.css'
import hero__banner from '../../assets/images/hero__banner.png'

const Hero = () => {
	return (
		<section className='hero' >
			<img className='hero__banner' src={hero__banner} alt="" />
			<div className="container">
				<div className="hero__wrapper">
					<h2 className='hero__title' >
						FIND CLOTHES THAT MATCHES YOUR STYLE
					</h2>
					<p className='hero__text' >
						Browse through our diverse range of meticulously
						crafted garments, designed to bring out your
						individuality and cater to your sense of style.
					</p>
					<button className='hero__btn' >
						Shop Now
					</button>
					<div className='hero__statics' >
						<div className='hero__static' >
							<h4 className='static__title' >
								200+
							</h4>
							<p className='static__text' >
								International Brands
							</p>
						</div>
						<div className='hero__static' >
							<h4 className='static__title' >
							2,000+
							</h4>
							<p className='static__text' >
							High-Quality Products
							</p>
						</div>
						<div className='hero__static' >
							<h4 className='static__title' >
							30,000+
							</h4>
							<p className='static__text' >
							Happy Customers
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero