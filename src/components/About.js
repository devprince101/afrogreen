import React from 'react'
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import './styles/become.css'
import Approach from './Approach'
import OurImpact from './OurImpact'

function About() {
  return (
    <>
      <Navbar/>
      <section className='become' id='about'>
          <div>
             <h1 className='behead' id='abhead'>Our Story</h1>
             <div className='smowra absmall'>
                <small className='small'>
                  Africa boasts a vibrant tapestry of food traditions, 
                  each with its own unique flavors and stories. But this rich heritage is under threat as 
                  rapid modernization leads to the decline of traditional agricultural practices.
                </small>
                <div/>
                <small className='small'>
                  AfroGreen was born out of a passion for preserving this legacy while ensuring a 
                  healthy and sustainable future for Africa. We believe that the answer lies in 
                  <strong> fulfilling </strong>
                </small>
             </div>
             <div className='bgreen' id='agreen'>
                <h3 className='vision' id='avision'>Our Vision</h3>
                <div className='smowra' id='abwra'>
                  <h5 className='green'>
                    A thriving Africa where healthy food, environmental responsibility, 
                    and cultural heritage flourish together.
                  </h5>
                  <small className='small'>
                    To achieve this, we have established a clear mission
                  </small>
                </div>
             </div>
             <div className='bgreen'>
                <h3 className='behead'>Our mission</h3>
                <div className='smowra'>
                  <h5 className='brown'>
                  To revitalize African agriculture by merging time-tested practices with modern advancements, 
                  ensuring food security, empowering local communities, protecting the environment, 
                  and celebrating the unique
                  </h5>
                  <small className='smallgreen'>
                    This approach directly contributes to our goal 
                  </small>
                </div>
             </div>
             <div className='bgreen'>
                <h3 className='vision'>Our Goal</h3>
                <div className='smowra'>
                  <h5 className='green'>
                  Our goal is becoming a leading force in sustainable agriculture across Africa, fostering a future where tradition meets innovation to create a more secure, nutritious, and culturally rich food system.
                  </h5>
                </div>
             </div>
          </div>
      </section>
      <Approach/>
      <OurImpact/>
      <FooterSection/>
    </>
  )
}

export default About