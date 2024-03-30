import React from 'react';
import Cropone from './crop1.jpg';
import Croptwo from './crop2.jpg';
import Cropthree from './crop3.jpeg'
import { Link } from 'react-router-dom';
import './styles/become.css';

function Explore() {
  return (
    <section className='become'>
        <div className='smowra'>
            <small className='small'>
                Welcome to a deeper dive into the world of AfroGreen! Here, 
                you'll discover the stories behind our mission, the impact we're creating, 
                and the exciting ways you can be a part of our journey.
            </small>
        </div>
        <h3 className='behead'>Explore a World of Flavor and Sustainability</h3>
        <div className='bewrapper'>
          <ul className='beule'>
            <li className='beli'>
                <img className='beima' src={Cropone} alt='African crops: beans.' />
                <h4 className='before'>Delicious, Nutritious Food:</h4>
                <p>
                    Discover unique African crops, rediscover forgotten flavors, and enjoy fresh, 
                    locally-sourced produce grown with sustainable practices.
                </p>
                <Link to='/produce/crops' className='cropsdetailslink'>African crops</Link>
            </li>
            <li className='beli'>
                <img className='beima' src={Croptwo} alt='Local Farmers.' />
                <h4 className='before'>Empowering Local Farmers:</h4>
                <p>
                    Support smallholder farmers and celebrate their vital 
                    role in building a more secure food system.
                </p>
                <Link to='/supporting_farmers' className='cropsdetailslink'>Our support</Link>
            </li>
            <li className='beli'>
                <img className='beima' src={Cropthree} alt='African crops: beans.' />
                <h4 className='before'>Environmental Responsibility:</h4>
                <p>
                    Learn about our commitment to sustainable agriculture and its positive 
                    impact on soil health and water conservation.
                </p>
                <Link to='/our_impact' className='cropsdetailslink'>African crops</Link>
            </li>
          </ul>
        </div>
        <div className='belink'>
            <button className='bebut'>
                <span>more</span>
                <i className='fas fa-chevron-down'/>
            </button>
        </div>
    </section>
  )
}

export default Explore