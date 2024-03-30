import React from 'react';
import CropFour from './crop4.jpeg';
import Cropfive from './crop5.jpg';
import Cropsix from './crop6.jpg';
import Cropseven from './crop7.jpg';
import Newsletter from './Subscribe';
import './styles/become.css';

function Become() {
  return (
    <section className='become'>
        <h3 className='behead'>Become Part of the Change:</h3>
        <div className='bewrapper'>
            <small className='small'>
                There are countless ways to join the AfroGreen movement and contribute 
                to a thriving future for Africa:
            </small>
            <ul className='beule'>
                <li className='beli'>
                    <img className='beima' src={CropFour} alt='Shopping Cart' />
                    <h4 className='before'>Shop AfroGreen:</h4>
                    <p>
                        Savor the taste of tradition while supporting our mission!
                    </p>
                </li>
                <li className='beli'>
                    <img className='beima' src={Cropfive} alt='African crops: beans.' />
                    <h4 className='before'>Support Our Farmers:</h4>
                    <p>
                        Empower local communities by contributing to their success.
                    </p>
                </li>
                <li className='beli'>
                    <img className='beima' src={Cropsix} alt='African crops: beans.' />
                    <h4 className='before'>Become a Partner:</h4>
                    <p>
                        Amplify our impact by joining forces with a like-minded organization.
                    </p>
                </li>
                <li className='beli'>
                    <img className='beima' src={Cropseven} alt='African crops: beans.' />
                    <h4 className='before'>Spread the Word:</h4>
                    <p>
                        Share the AfroGreen story and raise awareness about sustainable agriculture.
                    </p>
                </li>
            </ul>
        </div>
        <Newsletter/>
    </section>
  )
}

export default Become