import React,{Component} from 'react'


class Rewards extends Component{
    constructor(){
        super();
        this.state = {name: 'Uzi'}

    }
    check(){
        console.log(this.state.name)
    }
    render(){
        return(
            <div className='contact-body'>
                <button onClick={this.check}>Button</button> 
            </div>
        )
    }
}


export default Rewards;