import React,{Component} from 'react'
import MENUIMG from './MENUIMG.jpg'


class Menu extends Component{
    render(){
        return(
            <div className='menu-body'>
                <div>
                    <img src={MENUIMG}/>
                </div>
            </div>
        )
    }
}


export default Menu;