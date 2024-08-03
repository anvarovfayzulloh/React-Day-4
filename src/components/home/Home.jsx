import React from 'react'
import Nav from '../nav/Nav'
import Discount from '../discount/Discount'
import Hero from '../hero/Hero'
import Partners from '../partners/Partners'
import Arrivals from '../arrivals/Arrivals'
import TopSales from '../topSales/TopSales'
import Categories from '../categories/Categories'
import Customers from '../customers/Customers'
import Offerrs from '../offers/Offerrs'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Discount />
      <Nav />
      <Hero />
      <Partners />
      <Arrivals />
      <TopSales />
      <Categories />
      <Customers />
      <Footer/>
    </>
  )
}

export default Home