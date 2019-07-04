import React,{Component} from 'react'
import rewards from './rewards.png'
import StarbucksRewards from './StarbucksRewards.jpg'


class Rewards extends Component{
    
    render(){
        return(
            <div className='contact-body'>
                <img src={StarbucksRewards}/>
            </div>
        )
    }
}


export default Rewards;