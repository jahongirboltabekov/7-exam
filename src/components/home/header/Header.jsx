import React from 'react'
import './Header.scss'
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Header() {
    let wishlist = useSelector(state => state.heart.value)
    let cart = useSelector(state => state.cart.value)
 

  return (
    <div>
        <div className="container">
            <div className="head">
                <div className="select">
                    <select name="" id="">
                        <option value="">ENG</option>
                        <option value="">UZ</option>
                        <option value="">RU</option>
                    </select>
                    <select name="" id="">
                        <option value="">USD</option>
                        <option value="">UZC</option>
                    </select>
                </div>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/login'} ><IoPersonOutline className='icons' /></NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/wishlist'}><CiHeart className='icons' /><span>{wishlist.length}</span></NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/cart'}><IoCartOutline className='icons' /><span>{cart.length}</span></NavLink></li>
                    <li className='li1'>Items</li>
                    <li className='li2'>$0.00</li>
                    <li><IoSearchSharp className='icons' /></li>
                </ul>

            </div>
        </div>
        <div className="line">

        </div>
    </div>
  )
}

export default Header