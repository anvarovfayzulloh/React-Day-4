import React from 'react'
import './footer.css'
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagramm from "../../assets/images/instagramm.svg"
import github from "../../assets/images/github.svg"
import github1 from "../../assets/images/1.svg"
import github2 from "../../assets/images/2.svg"
import github3 from "../../assets/images/3.svg"
import github4 from "../../assets/images/4.svg"
import github5 from "../../assets/images/5.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__lists">
                        <div className='company__description' >
                            <h2 className='nav__title' >
                                SHOP.CO
                            </h2>
                            <p className='footer__text' >
                                We have clothes that suits your style and
                                which you’re proud to wear. From women to
                                men.
                            </p>
                            <div className='footer__links' >
                                <img src={twitter} alt="" />
                                <img src={facebook} alt="" />
                                <img src={instagramm} alt="" />
                                <img src={github} alt="" />
                            </div>
                        </div>
                        <ul className='footer__list' >
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Works</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                        </ul>
                        <ul className='footer__list' >
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Customer Support</a>
                            </li>
                            <li>
                                <a href="#">Delivery Details</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                        <ul className='footer__list' >
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Account</a>
                            </li>
                            <li>
                                <a href="#">Manage Deliveries</a>
                            </li>
                            <li>
                                <a href="#">Orders</a>
                            </li>
                            <li>
                                <a href="#">Payments</a>
                            </li>
                        </ul>
                        <ul className='footer__list' >
                            <li>
                                <a href="#">Resources</a>
                            </li>
                            <li>
                                <a href="#">Free eBooks</a>
                            </li>
                            <li>
                                <a href="#">Development Tutorial</a>
                            </li>
                            <li>
                                <a href="#">How to - Blog</a>
                            </li>
                            <li>
                                <a href="#">Youtube Playlist</a>
                            </li>
                        </ul>
                    </div>
                    <hr style={{ margin: "50px 0px 0px 0px" }} />
                    <div className='copyrights' >
                        <p className='copyright' >
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>
                        <div>
                            <img src={github1} alt="" />
                            <img src={github2} alt="" />
                            <img src={github3} alt="" />
                            <img src={github4} alt="" />
                            <img src={github5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer