import React from 'react'
import Jumbotron from './Jumbotron';
import Mission from './Mission';
import Navbar from './Navbar';
import Explore from './Explore';
import Become from './Become';
import FooterSection from './FooterSection'


function Home() {
  return (
    <>
     <Navbar/>
     <Jumbotron/>
     <Mission/>
     <Explore/>
     <Become/>
     <FooterSection/>
    </>
  )
}

export default Home