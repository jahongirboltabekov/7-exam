import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.scss'
import { MdOutlineStar} from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { toggleHeart } from '../../context/Heart';
import { RiHeartsFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";


function Wishlist() {
    const dispatch = useDispatch()
  let wishlist = useSelector(state => state.heart.value)

  let products = wishlist?.map((el) => 
        <div className="best_card" key={el.id}>
            <div className="best_img">
                <img src={el.image} alt="" />
                <div className="hover_div">
                <div className="icons_hover">
                    <div onClick={() => dispatch(toggleHeart(el))} className="img">
                    {
                            wishlist?.some(item => item.id === el.id)
                            ?
                            <FaHeart />
                            :
                            <FiHeart />
                        }
                    </div>
                    <div className="img">
                        <PiShoppingCartBold />
                    </div>
                </div>
            </div>
            </div>

            <NavLink to={`/products/${el.id}`}>
                <div className="about">
                        <h3>{el.title.slice(0,20)}</h3>
                    <div className="star">
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='emp_star'/>
                    </div>
                    <div className="div_p">
                        <p className='price'>${el.price}</p>
                        <p className="discount"> <span>${((el.price*100)/24).toFixed(0)}</span> 24% Off</p>
                    </div>
                </div>
            </NavLink>

        
            
        </div>
    )
  
  return (
    <div>

      <div className="product_text">
          <div className="container">
              <h3> <span>Home</span> / Wishlist</h3>
          </div> 
      </div>



      <div className="container">
        <h3>Wishlist</h3>

            {
                wishlist.length
                ?
                <div className="best_cards">
                    {products}
                </div>
                :
                <div className="empty">
                    <RiHeartsFill className='hearts' />
                    <h1>Sizga yoqqanini qoʻshing</h1> 
                    <p>Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing</p>
                    <NavLink to={'/'}><button>Bosh Sahifaga</button></NavLink>
                    
                </div>

            }
      </div>


    </div>
  )
}

export default Wishlist