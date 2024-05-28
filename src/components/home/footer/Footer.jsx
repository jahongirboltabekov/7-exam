import React from 'react'
import './Footer.scss'
import logo from '../../../assets/logo.svg'
import cards from '../../../assets/PayCards.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footerCard_1">
                <div className="card">
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                </div>
                <div className="card">
                    <h5>Follow Us</h5>
                    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                </div>
                <div className="card">
                    <h5>Contact Us</h5>
                    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>

            </div>
            <div className="footerCard_2">
                <div className="card2">
                    <h5>Infomation</h5>
                    <p>About Us</p>
                    <p>Infomation </p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="card2">
                    <h5>Service</h5>
                    <p>About Us</p>
                    <p>Infomation </p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="card2">
                    <h5>My Account</h5>
                    <p>About Us</p>
                    <p>Infomation </p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="card2">
                    <h5>Our Offers</h5>
                    <p>About Us</p>
                    <p>Infomation </p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div className="line">
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                <img src={cards} alt="" />
            </div>

        </div>

    </div>
  )
}

export default Footer