import React from 'react';
import './styles/mission.css';
import { Link } from 'react-router-dom';

function Jumbotron() {
  return (
    <div className='miwrapper1'>
      <div className='miwrapper'>
        <h1 className='mihead1'><strong className='mistrong'>AfroGreen:</strong> Cultivating a Sustainable Future for Africa</h1>
        <div className='micon'>
          <p>
              At AfroGreen, we believe in the power of tradition. 
              We're a social enterprise dedicated to revitalizing African agriculture 
              by merging time-tested practices with modern advancements. 
              Our mission is to cultivate healthy, delicious food while preserving 
              the rich heritage of African food cultures.
          </p>
          <button className='mibutt'>
            <Link to="/about">Find out more <i className='fas fa-chevron-right'/> </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron