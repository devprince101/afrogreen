import React from 'react'
import './styles/appro.css'

function Approach() {
  return (
    <section id='approach'>
        <div className='acontainer'>
            <h2 className='ahead'>Our Approach</h2>
            <div className='awrapper'>
                <small className='asmall'>
                  We work hand-in-hand with local farmers to implement sustainable cultivation methods that combine traditional knowledge with modern advancements. This includes:
                </small>
                <ul className='aule'>
                  <li className='ali'>
                    <strong>
                      Identifying and reviving forgotten crops 
                    </strong> best suited to local environments.
                    </li>
                  <li className='ali'>
                    <strong>
                      Promoting eco-friendly practices  
                    </strong> that conserve water, improve soil health, and minimize environmental impact.
                  </li>
                  <li className='ali'>
                    <strong>
                      Building a network 
                    </strong> to connect farmers with consumers and ensure fair prices.
                    </li>
                  <li className='ali'>
                    <strong>
                      Investing in education and training   
                    </strong> to empower the next generation of African farmers.
                  </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Approach