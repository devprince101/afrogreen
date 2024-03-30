import React from 'react';
import './styles/footer.css';
import Logo from '../logo.svg';

function FooterSection() {
  return (
    <div className='footer'>
        <div className='wrapper'>
            <ul className='foobox'>
                <li className='lines'/>
                <li className='line-container'>
                    <a className='socialicon' href='/appologies'>
                        <i className='fab fa-facebook' />
                    </a>
                    <a className='socialicon' href='/appologies'>
                        <i className='fab fa-instagram' />
                    </a>
                    <a className='socialicon' href='/appologies'>
                        <i className='fab fa-linkedin' />
                    </a>
                    <a className='socialicon' href='/appologies'>
                        <i className='fab fa-pinterest' />
                    </a>
                </li>
                <li className='lines'/>
            </ul>
            <div className='afrogreen'>
                <h3>AfroGreen</h3>
                <p>&copy; AfroGreen Limited. All Right Reserved</p>
                <img src={Logo} className='logo'/>
            </div>
        </div>
    </div>
  )
}

export default FooterSection