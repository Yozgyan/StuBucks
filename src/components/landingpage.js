import React, {Component} from 'react';
import icecoffee from './icecoffee.png';
import Stu from './Stu.jpg';
import beans from './beans.jpg';
import equipment from './equipment.png';
import tea from './tea.jpg';
import {Link} from 'react-router-dom'



class Landing extends Component{

    render(){
        return(
            <div className='nav-bar' style={{width:'100%', margin: 'auto'}}> 
                <div className='main'>
                    <img className='main-img' alt='Main'src={Stu}/> 
                </div>
                <div className='love-div'>
                    <h1>Love</h1>
                </div>
                <div className='stu-div'>
                    <h1>your Stu</h1>
                </div>
                <div className='love-stu-p'>
                    <p>Look at our range and choose the Stu that suits you.</p>
                </div>
                <button className='button'>
                    <Link className='button-link' to="/coffee">Order your coffee</Link>
                </button>
                <div className='first'>
                    <h3 className='new0'>Try something  </h3>
                    <h3 className='new'>new</h3>
                    <h3 className='new2'>?</h3>
                    
                </div>
                <div className='ice-coffee-div'>
                    <img className='ice-coffee-img' alt="ce-coffee" src={icecoffee}/>
                    <div className='box'>
                        <h1 className='first-h1'>The new </h1>
                        <h1 className='second-h1'>StuBrew</h1>
                        <h4 className='first-h4'>A delicious new</h4>
                        <h4 className='second-h4'>nitro brew</h4>
                        <h4 className='thirt-h4'>developed</h4>
                        <h4 className='fourth-h4'>carefully on the darkside of the moon,</h4>
                        <h4 className='fifth-h4'>instilled with the freshness of Stu himself.</h4>
                    </div>
                </div>
                <div className='third-page'>
                    <h1 className='third-page-first-h1'>The Stu </h1>
                    <h1 className='third-page-second-h1'>Shop</h1>
                </div>
                <div className='last-page'>
                    <div className='beans-img-div'>
                        <img className='beans-img' alt="beans-img" src={beans}/>
                    </div>
                    <div className='beans-text'>
                        <h1 className='beans-text-h1'>Shop Coffee</h1>
                        <hr></hr>
                        <h4 className='beans-text-h4'>Hand-roasted coffe,<br></br>
                        delivered fresh for <br></br>ultimate flavour.
                        </h4>

                    </div>
                    <div > 
                        <img className='tea-img' alt='Tea' src={tea}/>
                    </div>
                    <div className='tea-text'>
                        <h1 className='tea-text-h1'>Shop Tea</h1>
                        <hr></hr>
                        <h4 className='tea-text-h4'>Our finest selection of<br></br>
                        premium whole leaf <br></br>tea.
                        </h4>

                    </div>
                    <div >
                        <img className='equipment-img' alt='Equipment' src={equipment}/>
                    </div>
                    <div className='equipment-text'>
                        <h1 className='equipment-text-h1'>Shop Equipment</h1>
                        <hr></hr>
                        <h4 className='equipment-text-h4'>Brewers and presses<br></br>
                        for making the perfect <br></br>Stu at home.
                        </h4>

                    </div>
                </div>
                <div className='footer'>
                    <div className='top-part'>
                        <div  className='help-section'> 
                            <h2>Help</h2>
                            <h6>My account<br></br>Stu Card<br></br>Stu Rewards<br></br>Shippin & Returns<br></br>Current Offers<br></br>Contact Us</h6>
                        </div>

                        <div className='company-section'>
                            <h2>Company Info</h2>
                            <h6>Code Ethics<br></br>Responsible Sourcing<br></br>Supply Chain<br></br>LImited Partners<br></br>Office Coffee</h6>
                        </div>
                        <div className='about-section'>
                            <h2>About Us</h2>
                            <h6>Join Stu<br></br>Social Responsibility<br></br>Our People<br></br>Newsroom</h6>
                        </div>
                        <div className='share-section'>
                            <h2>Share</h2>
                            <h3>
                                <a className='a-tag-font' href="http://localhost:3000/locations"> <i class="fab fa-facebook"></i></a>
                                <a className='a-tag-font' href="http://localhost:3000/Menu"> <i class="fab fa-instagram"></i></a>
                                <a className='a-tag-font' href="http://localhost:3000/Rewards"> <i class="fab fa-linkedin"></i></a>
                                <a className='a-tag-font' href="http://localhost:3000/Specials"> <i class="fab fa-twitter-square"></i></a>
                                <a className='a-tag-font' href="http://localhost:3000/Tea"> <i class="fab fa-pinterest-square"></i></a>
                            </h3>
                        </div>
                    </div>
                    <div id='bottom-part-id' className='bottom-part'>
                        <div className='left-part-footer'>
                            <h6>StuBucks Chester<br></br>Cheshire<br></br>Since 2019</h6>
                        </div>
                        <div className='right-part-footer'>
                            <h6 id='h6-id'>Stubucks Coffee | Privacy Policy | Terms of Service<br></br>Stubucks is not a registered trademark, in fact it was just something Stuart made Dan make even though he didn't have any spare<br></br>time.But he likes designing stuff so that's OK.</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;