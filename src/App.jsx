import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/home/footer/Footer'
import Header from './components/home/header/Header'
import Navbar from './components/home/navbar/Navbar'
import Cart from './pages/cart/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SingleRoute from './pages/SingleRoute'
import Wishlist from './pages/wishlist/Wishlist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login'

function App() {
  return (
    <>
    <ToastContainer/>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element ={<SingleRoute/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/wishlist' element ={<Wishlist/>} />
        <Route path='/cart' element ={<Cart/>} />
        <Route path='/login' element ={<Login/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
