import React, {Component} from 'react';
import HolidayPromo from './HolidayPromo.png'
import Choose from './Choose.jpg'
import Sticks from './Sticks.jpg'

class Specials extends Component{
    render(){
        return(
            <div className='specials-body'>
                <div className='spec-first-img'>
                    <img className='Promo-img' alt='HolidayIMG' src={HolidayPromo}/>
                </div>
                <div className='spec-second-img'>
                    <img className='Choose-img' alt='ChooseIMG' src={Choose}/>
                </div>
                <div className='spec-thirth-img'>
                    <img className='Sticks-img' alt='SticksIMG' src={Sticks}/>
                </div>
            </div>
        )
    }
}


export default Specials;