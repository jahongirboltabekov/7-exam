import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../assets/logo.svg'

function Navbar() {
  return (
    <div>
        <div className="container">
            <nav>
                <NavLink  to={'/'} ><img src={logo} alt="" /></NavLink>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/'}>HOME</NavLink></li>
                    <li><NavLink>BAGS</NavLink></li>
                    <li><NavLink>SNEAKERS</NavLink></li>
                    <li><NavLink>BELT</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "link-active" : ""} to={'/contact'}>CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar