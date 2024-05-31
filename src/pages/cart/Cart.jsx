import React, { useState } from 'react'
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { inc, removeFromCart } from '../../context/Card';
import { decrementCart } from '../../context/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import   './Cart.scss'
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from 'axios';

function Cart() {
    const cart = useSelector(s => s.cart.value)
    const dispatch = useDispatch()
    const[modul, setModul] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [lastname, setLastname] = useState('');
    const [number, setnumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const botToken = '7021165985:AAGwqbId3W_92wuIloV_yeJzDM4Q3n1D7ew';
        const chatId = '-4256618912';
        const text = `Name: ${name}\nLast:${lastname}\nEmail: ${email}\nMessage: ${message}\nNumber:${number}`;
    
        axios
          .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })
        .then(response => {
          console.log('Message sent successfully:', response);
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    
        setName('');
        setEmail('');
        setMessage('');
        setLastname('');
        setnumber('');
      };
    
    let products = cart?.map((el) =>
        <div className="" key={el.id}>
            <div  className="cart_item" >
                <div className="cart_div1">
                    <button onClick={() => dispatch(removeFromCart(el))}><IoClose className='X_btn' /></button>
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
            <div className={`modul ${modul ? 'show': ''}`}>
                <div className="modul_btn">
                    <button onClick={() => setModul(!modul)}><IoCloseCircleOutline className='x_btn' /></button>
                </div>
                <h5>Make Payment</h5>
                <form onSubmit={handleSubmit} >
                    <div className="modul_input">
                        <div className="modul_input1">
                            <div className="modul_inputs">
                                <input placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} required type="text" name="" id="" />
                                <input placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="" id="" />
                            </div>
                            <div className="choosePaycard">
                                <p>Select Method of Payment</p>
                                <FormControl>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" >
                                        <div className="modul_img_icon">
                                            <img src={card1} alt="" />
                                            <FormControlLabel className='radio' value="female" control={<Radio />} label="Credit Card Or Debit" labelPlacement="start" />
                                        </div>
                                        <div className="modul_img_icon">
                                            <img src={card2} alt="" />
                                            <FormControlLabel className='radio' value="male" control={<Radio />} label="Paypal" labelPlacement="start" />
                                        </div>
                                        <div className="modul_img_icon">
                                            <img src={card3} alt="" />
                                            <FormControlLabel className='radio' value="other" control={<Radio />} label="Bank Transfer" labelPlacement="start" />
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                                
                            </div>
                        </div>
                        <div className="modul_inputs">
                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} required placeholder='Last Name' type="text" />
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='Address for Delivery' name="" id="" cols="30" rows="10"></textarea>
                            <input value={number} onChange={(e) => setnumber(e.target.value)} required placeholder='Mobile Phone' type="text" />
                        </div>
                    </div>
                    <button type='submint' className='btn_modul'>Go to Payment</button>
                </form>
            </div>
            <div className="all_sum">
                <div className="p_sum">
                    <p>Subtotal</p>
                    <p>$900</p>
                </div>
                <div className="p_sum">
                    <p>discount</p>
                    <p>20%</p>
                </div>
                <div className="p_sum">
                    <p>Coupon</p>
                    <p>No</p>
                </div>
                <div className="line"></div>
                <div className="h_sum">
                    <h6>TOTAL</h6>
                    <h6>$500</h6>
                </div>
                <button onClick={() => setModul(!modul)}>Check out</button>
            </div>

        </div>
    </div>
  )
}

export default Cart