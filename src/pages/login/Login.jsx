import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

function Login() {

  let navigate = useNavigate()
  const [username, setUsername] = useState("mor_2314")
  const [password, setPassword] = useState("83r5^_")

  const handleLogin = (e)=>{
      e.preventDefault()
      let user = {
          username,
          password
      }

      axios
          .post("https://fakestoreapi.com/auth/login", user )
          .then(res => {
              console.log("res>>", res.data.token )
              toast.success("Saxifanggizga xushkelibsiz!")
              localStorage.setItem("x-auth-token", res.data.token)
              navigate("/admin")
          })
          .catch(err => {
              console.log("err>>", err)
              toast.error("Username yoiki Password xato kiritilgan.")
              navigate("/login")
          })
  }

  // useEffect(() => {
  //   const token = localStorage.getItem("x-auth-token")
  //   if (token) {
  //     navigate('/admin')
  //   } else{
  //     navigate('/login')
  //   }
  // }, [navigate])

  return (
    <div>
      <div className="product_text">
        <div className="container">
          <h3> <span>Home</span> / Contact us</h3>
        </div> 
      </div>
      <div className="container">
        <form onSubmit={handleLogin} className="login">
          <div className="input">
            <p>Username</p>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter your username' type="text" />
          </div>
          <div className="input">
            <p>Password</p>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' type="password" />
          </div>
          <button>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login