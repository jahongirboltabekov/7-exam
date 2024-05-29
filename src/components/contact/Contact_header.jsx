import React from 'react'
import './Contact_header.scss'

function Contact_header() {
  return (
    <div>
       
        <div className="product_text">
            <div className="container">
                <h3> <span>Home</span> / Contact Us </h3>
            </div> 
        </div>

        <div className="container">
            <div className="wrap">
                <div className="text">
                    <h1>get in touch</h1>
                    <p>contact@e-comm.ng</p>
                    <p>+234 4556 6665 34</p>
                    <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                </div>
                <div className="inputs">
                    <div className="input">
                        <p>Fullname</p>
                        <input type="text" placeholder='Enter your name...' />
                    </div>
                    <div className="input">
                        <p>Email</p>
                        <input type="text" placeholder='Enter you email...' />
                    </div>
                    <div className="input">
                        <p className='message_p'>Message</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type your message'>

                        </textarea>
                    </div>
                </div>
            </div>
            <div className="input_search">
                <input placeholder='Search query' type="text" />
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Contact_header