import React from 'react'
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { inc, removeFromCart } from '../../context/Card';
import { decrementCart } from '../../context/Card';
import   './Cart.scss'

function Cart() {
    const cart = useSelector(s => s.cart.value)
    const dispatch = useDispatch()
    
    let products = cart?.map((el) =>
        <div className="" key={el.id}>
            <div  className="cart_item" >
                <div className="cart_div1">
                    <button onClick={() => dispatch(removeFromCart(el))}><IoClose /></button>
                    <img src={el.image} alt="" />
                    <p>{el.title.slice(0, 25)}</p>
                </div>
                <div className="cart_div2">
                    <p>${el?.price*el.quantity}</p>
                    <div className="PlusMinus">
                        <button disabled={el.quantity<=1} onClick={() => dispatch(decrementCart(el))}>-</button>
                        <h5>{el.quantity}</h5>
                        <button onClick={() => dispatch(inc(el))}>+</button>
                    </div>
                    <p>${el.price}</p>
                </div>
            </div> 
            <div className="line"></div>
        </div>

    )
    return (
    <div>
        <div className="product_text">
          <div className="container">
              <h3> <span>Home</span> / Cart</h3>
          </div> 
        </div>

        <div className="container">
            <h3>Cart</h3>
            <div className="cartslice">
                <div className="text_cart">
                    <p>PRODUCT</p>
                    <div className="p_cart">
                        <p>PRICE</p>
                        <p>QTY</p>
                        <p>UNIT PRICE</p>
                    </div>
                </div>
                <div className="line"></div>
                    {
                        cart.length
                        ?
                        <div className="cart_products">
                            {products}
                        </div>
                        :
                        <div className="empty">
                            <BsFillCartXFill className='hearts' />
                            <h1>Hozirda savatinggiz bo'sh</h1> 
                            <p>Agarda maxsulot sotib olmoqchi bo'lsanggiz bosh sahifaga o'tib savatcha tugmasini bosing</p>
                            <NavLink to={'/'}><button>Bosh Sahifaga</button></NavLink>
                            
                        </div>

                    }

                </div>

        </div>
    </div>
  )
}

export default Cart