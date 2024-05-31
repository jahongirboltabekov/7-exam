import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Admin.scss'

function Admin() {
  let navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("x-auth-token")
    if (token) {
      navigate('/admin')
    } 
  }, [navigate])
  return (
    <div>
        <div className="product_text">
        <div className="container">
          <h3> <span>Home</span> / Contact us</h3>
        </div>
      </div>
        <div className="container">
            <div className="admin_text">
                <h1>Admin panel</h1>
                <div className="admin_p">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>     
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
                </div>
                <NavLink to={'/login'}><button>Log out</button></NavLink>
            </div>
        </div> 
    </div>
  )
}

export default Admin