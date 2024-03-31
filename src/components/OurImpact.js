import React from 'react'
import Newsletter from './Subscribe'
import { Link } from 'react-router-dom'
import './styles/impact.css'
import Food1 from './food.jpg';
import Food2 from './food1.jpeg';
import Food3 from './food2.jpeg';
import Food4 from './food3.jpg';


function OurImpact() {
  return (
    <section className='impact'>
        <div className='icontainer'>
            <h2 className='ihead'>Our Impact</h2>
            <div className='iwrapper'>
                <div className='icards'>
                    <h5 className='ichead'>Reviving Forgotten Foods:</h5>
                    <img className='ima' src={Food1} alt='Food'/>
                    <p>
                        Explore the fascinating world of traditional African crops we're bringing back to life. 
                        Learn about their unique flavors, nutritional benefits, and historical significance.
                    </p>
                </div>
                <div className='icards'>
                    <h5 className='ichead'>Sustainable Practices in Action:</h5>
                    <img className='ima' src={Food2} alt='Food'/>
                    <p>
                        Delve into the details of our sustainable farming methods. 
                        Discover how we combine traditional wisdom with modern advancements 
                        to ensure environmental responsibility and long-term soil health.
                    </p>
                </div>
                <div className='icards'>
                    <h5 className='ichead'>Empowering Local Communities:</h5>
                    <img className='ima' src={Food3} alt='Food'/>
                    <p>
                        Meet the inspiring farmers we partner with! See how AfroGreen is fostering 
                        economic growth and knowledge exchange within rural communities.
                    </p>
                </div>
                <div className='icards'>
                    <h5 className='ichead'>Measuring Our Success:</h5>
                    <img className='ima' src={Food4} alt='Food'/>
                    <p>
                        We believe in transparency. Explore the data and stories that showcase the positive 
                        impact AfroGreen is making on food security, environmental sustainability, 
                        and cultural preservation.
                    </p>
                </div>
            </div>
            <div className='invo'>
                <h3 className='ihead'>Get Involved</h3>
                <div className='ishop'>
                    <div className='icards'>
                        <h5 className='ichead'>Buy AfroGreen Products:</h5>
                        <p>
                            Discover the taste of tradition! Explore our selection of fresh, locally-sourced, and sustainably grown African produce from local supermarkets.
                        </p>
                    </div>
                    <div className='icards'>
                        <h5 className='ichead'>Support Our Farmers:</h5>
                        <p>
                            Learn about the challenges faced by smallholder farmers in Africa and how you 
                            can contribute to their success through our various support initiatives.
                        </p>
                    </div>
                    <div className='icards'>
                        <h5 className='ichead'>Become a Partner:</h5>
                        <p>
                            Are you an organization or individual passionate about sustainable agriculture? 
                            Explore partnership opportunities to amplify our impact together.
                        </p>
                    </div>
                    <div className='icards'>
                        <h5 className='ichead'>Spread the Word: </h5>
                        <p>
                            Share the AfroGreen story with your friends and family! Help us raise awareness 
                            about the importance of sustainable food systems and the rich tapestry of 
                            African food cultures.
                        </p>
                    </div>
                </div>
                <div className='iconnect'>
                    <h5 className='ichead'>Stay Connected</h5>
                    <div className='igrid'>
                        <Newsletter/>
                        <div className='ingrid'>
                            <small className='ismall'>
                                We believe that together, we can cultivate a future where healthy food, 
                                environmental responsibility, and cultural heritage thrive in harmony. 
                                Explore AfroGreen and discover how you can be a part of the change!
                            </small>
                            <h5 className='ichead'>Follow us on Social Media links below</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurImpact