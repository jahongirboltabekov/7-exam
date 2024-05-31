import './Contact_header.scss'
import React, { useState } from 'react';
import axios from 'axios';

function Contact_header() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const botToken = '7021165985:AAGwqbId3W_92wuIloV_yeJzDM4Q3n1D7ew';
        const chatId = '-4256618912';
        const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
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
      };
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
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <p>Fullname</p>
                        <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' />
                    </div>
                    <div className="input">
                        <p>Email</p>
                        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email...' />
                    </div>
                    <div className="input">
                        <p className='message_p'>Message</p>
                        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Type your message'></textarea>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div >
            <div className="input_search">
                <input placeholder='Search query' type="text" />
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Contact_header