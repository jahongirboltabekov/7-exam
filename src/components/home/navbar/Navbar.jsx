import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../assets/logo.svg'
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
        <div className="container">
            <nav>
                <div className="nav_img">
                  <NavLink  to={'/'} ><img src={logo} alt="" /></NavLink>
                </div>
                <ul className={`ul_link ${menu ? "show" : ""}`}>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/'}>HOME</NavLink></li>
                    <li><NavLink>BAGS</NavLink></li>
                    <li><NavLink>SNEAKERS</NavLink></li>
                    <li><NavLink>BELT</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/contact'}>CONTACT</NavLink></li>
                </ul>
                  <HiMenu onClick={() => setMenu(!menu)} className='menu' />
                

            </nav>
        </div>
    </div>
  )
}

export default Navbar