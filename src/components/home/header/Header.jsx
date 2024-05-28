import React from 'react'
import './Header.scss'
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
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
                    <li><IoPersonOutline className='icons' /></li>
                    <li><CiHeart className='icons' /></li>
                    <li><IoCartOutline className='icons' /></li>
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