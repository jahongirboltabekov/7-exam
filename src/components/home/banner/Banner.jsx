import banner from '../../../assets/banner.png'
import './Banner.scss'
import card from '../../../assets/banner_card.png'
import card2 from '../../../assets/banner_card2.png'
import card3 from '../../../assets/banner_card3.png'

function Banner() {
  return (
    <div>
        <img className='img' src={banner} alt="" />
        <div className="container">
            <div className="banner_position">              
              <h2>Super Flash Sale <br /> 50% Off</h2>
              <div className="banner_cards">
                <div className="banner_card">
                  <p className='about'>FS - QUILTED MAXI CROSS BAG</p>
                  <div className="div_img">
                    <img src={card} alt="" />
                  </div>
                  <div className="div_p">
                    <p  className='discount'><span>$534,33</span> 24% Off </p>
                    <p className='price'>$299,43</p>
                  </div>

                </div>
                <div className="banner_card">
                  <p className='about'>FS - Nike Air Max 270 React...</p>
                  <div className="div_img">
                    <img src={card2} alt="" />
                  </div>
                  <div className="div_p">
                    <p  className='discount'><span>$534,33</span> 24% Off </p>
                    <p className='price'>$299,43</p>
                  </div>

                </div>
                <div className="banner_card">
                  <p className='about'>FS - Nike Air Max 270 React...</p>
                  <div className="div_img">
                    <img src={card3} alt="" />
                  </div>
                  <div className="div_p">
                    <p  className='discount'><span>$534,33</span> 24% Off </p>
                    <p className='price'>$299,43</p>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner