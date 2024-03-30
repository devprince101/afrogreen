import React from 'react';
import './styles/mission.css';


function Mission() {
  return (
    <section id='mission'>
        <div className='miwrapper'>
            <h2 className='mihead'>Join us on our journey to:</h2>
            <div className='miwrapper'>
                <ul className='miule'>
                    <li>
                        Ensure food security for Africa's growing population.
                    </li>
                    <li>
                        Protect the environment through sustainable farming tech
                    </li>
                    <li>
                        Empower local communities by supporting smallholder farmers.  
                    </li>
                    <li>
                        Celebrate the unique flavors of African cuisine.
                    </li>
                </ul>
                <div className='mismall'>
                    <small>
                        Explore our website to learn more about our mission, our impact, 
                        and how you can get involved in building a more sustainable future for Africa.
                    </small>
                </div>
                <button className='mibutton'>
                    <span>Explore</span><i className='fas fa-chevron-down'/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Mission