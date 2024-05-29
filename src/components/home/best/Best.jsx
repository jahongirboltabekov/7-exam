
import React, { useEffect, useState } from 'react'
import './Best.scss'
import { MdOutlineStar} from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {toggleHeart} from '../../../context/Heart/index'
import { addToCart } from '../../../context/Card';




function Best({data, loading}) {

  let wishlist = useSelector(state => state.heart.value)
  let dispatch = useDispatch()

    const [count, setCount] = useState(1)
    const [dataSet,  setData] = useState(data)
    const [loadingset,setLoading] = useState(loading)

    useEffect(() =>{
        setLoading(true)
        axios
            .get(`https://fakestoreapi.com/products?limit=${count*8}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
                setLoading(false);              
            })
        }, [count])

    let products = dataSet?.map((el) => 
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
                    <div onClick={() => dispatch(addToCart(el))} className="img">
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
            <div className="container">
                <div className="best_seller">
                    <h2>BEST SELLER</h2>

                    {
                        loadingset ? <h1>Loading</h1>
                        :
                        <></>
                    }
                    <div className="best_cards">
                        {products}
                    </div>
                    <button onClick={() => setCount(p => p + 1)}>LOAD MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Best