import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/home/footer/Footer'
import Header from './components/home/header/Header'
import Navbar from './components/home/navbar/Navbar'
import Belt from './pages/Belt'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SingleRoute from './pages/SingleRoute'
import Sneakers from './pages/Sneakers'
import Wishlist from './pages/wishlist/Wishlist'

function App() {
  return (
    <>
      <Header/>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element ={<SingleRoute/>} />
        <Route path='/sneakers' element ={<Sneakers/>} />
        <Route path='/belt' element ={<Belt/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/wishlist' element ={<Wishlist/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
