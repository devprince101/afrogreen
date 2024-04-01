import React from 'react';
import './styles/contact.css'
import Greencover from './crop.jpg';

function Contact() {
  return (
    <section id='contact'>
        <div className='cowrapper'>
            <h1 className='cohe'>Ready to Connect?</h1>
            <div className='cocont'>
                <small className='cosmall'>we would like to hear from you!</small>
                <div className='cogrid'>
                    <div className='coheads'>
                        <h2 className='cohead'>AfroGreen Limited</h2>
                        <img className='coima' src={Greencover} alt='Green Cover'/>
                        <small className='cooo'>&copy; AfroGreen Limited. All Rights Reserved!</small>
                    </div>
                    <ul className='cogreet'>
                        <li><strong>Location: </strong> Nakuru County, KE 20108</li>
                        <li><strong>Tel: </strong> +2547500066990</li>
                        <li><strong>Email: </strong>afrogreenltd@afrogreen.com</li>
                        <li><strong>Website: </strong>https://afrogreen.vercel.app/</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact