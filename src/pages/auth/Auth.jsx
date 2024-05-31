import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    let isLogin = localStorage.getItem("x-auth-token")

  return isLogin ? <Outlet/> : <Navigate replace to={'/login'}/>
}

export default Auth