import React from 'react'
import './Home_cards.scss'
import truk from '../../../assets/truk.svg'
import nike from '../../../assets/nike.svg'
import figma from '../../../assets/figma.svg'
import kronos from '../../../assets/kronos.svg'
import shoes from '../../../assets/card_shoes.png'
import { MdOutlineStar} from "react-icons/md";
function Home_cards() {
  return (
    <div>
        <div className="container">
            <div className="cards">
                <div className="cards_1">
                    <div className="card_1">
                        <img src={truk} alt="" />
                        <h4>FREE SHIPPING</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="card_1">
                        <img src={truk} alt="" />
                        <h4>100% REFUND</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="card_1">
                        <img src={truk} alt="" />
                        <h4>SUPPORT 24/7</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="cards_2">
                    <h3>LATEST NEWS</h3>
                    <div className="Cards_2">
                        <div className="card_2">
                            <img src={nike} alt="" />
                            <div className="text">
                                <h6>01 Jan, 2015</h6>
                                <h5>Fashion Industry</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="card_2">
                            <img src={figma} alt="" />
                            <div className="text">
                                <h6>01 Jan, 2015</h6>
                                <h5>Best Design Tools</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="card_2">
                            <img src={kronos} alt="" />
                            <div className="text">
                                <h6>01 Jan, 2015</h6>
                                <h5>HR Community</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="cards_3">
                    <h3>FEATURED PRODUCTS</h3>
                    <div className="Cards_3">
                        <div className="card_3">
                            <img src={shoes} alt="" />
                            <div className="text">
                                <h5>Blue Swade Nike Sneakers</h5>
                                <div className="star">
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='emp_star'/>
                                </div>
                                <p>$499 <span>$599</span></p>
                            </div>
                        </div>
                        <div className="card_3">
                            <img src={shoes} alt="" />
                            <div className="text">
                                <h5>Blue Swade Nike Sneakers</h5>
                                <div className="star">
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='emp_star'/>
                                </div>
                                <p>$499 <span>$599</span></p>
                            </div>
                        </div>
                        <div className="card_3">
                            <img src={shoes} alt="" />
                            <div className="text">
                                <h5>Blue Swade Nike Sneakers</h5>
                                <div className="star">
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='star_full' />
                                    <MdOutlineStar className='emp_star'/>
                                </div>
                                <p>$499 <span>$599</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="input">
                    <input placeholder='Search query' type="text" />
                    <button>Search</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home_cards