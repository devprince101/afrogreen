import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Experimental() {
  return (
    <>
    <Navbar/>
    <div>
        <h5>Forgive me please!</h5>
        <small>
            Sorry for driving you here, this is just an experimental website for a school project
        </small>
        <button>
            <Link to='/'>
                <span>Back to home</span>
                <i className='fas fa-home'/>
            </Link>
        </button>
    </div>
    </>
  )
}

export default Experimental