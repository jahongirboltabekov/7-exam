import React from 'react'
import './Banner_2.scss'
import shoes from '../../../assets/banner_shoes.png'

function Banner_2() {
  return (
    <div>
        <div className="banner_2">
            <div className="container">
                <div className="shoes_banner">
                    <div className="banner_text">
                        <h3>Adidas Men Running Sneakers</h3>
                        <p>Performance and design. Taken right to the edge.</p>
                        <button>SHOP NOW</button>
                    </div>
                    <div className="img_shoes">
                        <img src={shoes} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner_2