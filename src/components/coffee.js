import React,{Component} from 'react'
import {FABButton, Icon} from 'react-mdl'

class Coffee extends Component{
   constructor(){
       super()
        this.state = {
            cash: 0,
            amequantity: 0,
            capquantity: 0,
            espquantity: 0,
            teaquantity: 0,
            Quantity: 0,
            Quantity1: 0,
            Quantity2: 0,
            orders: [],
            // order: {
            //     Name: 'Americano',
            //     Name1: 'Capuchino', 
            //     Name2: 'Espresso', 
            // },
        };
    }
    
 
    AddAmericano = () => {
        this.setState({Quantity: this.state.Quantity + 1})
        this.setState({cash: this.state.cash +2.50});
        this.setState({amequantity: this.state.amequantity + 1})
        
    }
    DecrementAmericano = () => {
        this.setState({Quantity: this.state.Quantity - 1})
        this.setState({cash: this.state.cash - 2.50});
        this.setState({amequantity: this.state.amequantity - 1})
        
        
    }
    AddCapuchino = () => {
        this.setState({Quantity1: this.state.Quantity1 + 1})
        this.setState({cash: this.state.cash +2.75});
        this.setState({capquantity: this.state.capquantity + 1})
        
    }
    DecrementCapuchino = () => {
        this.setState({Quantity1: this.state.Quantity1 - 1})
        this.setState({cash: this.state.cash - 2.75});
        this.setState({capquantity: this.state.capquantity - 1})
        
        
    }
    AddEspresso = () => {
        this.setState({Quantity2: this.state.Quantity2 + 1})
        this.setState({cash: this.state.cash +1.50});
        this.setState({espquantity: this.state.espquantity + 1})
        
    }
    DecrementEspresso = () => {
        this.setState({Quantity1: this.state.Quantity2 + 1})
        this.setState({cash: this.state.cash - 1.50});
        this.setState({espquantity: this.state.espquantity - 1})
        
        
    }
    
renderOrders = ({ Name, Qty}) => <div key={Name}>{Name}, Qty {Qty}</div>

    componentDidMount() {
        this.getOrders();
    }

getOrders = _ =>{
    fetch('http://localhost:4000/products', )
    .then(response => response.json())
    .then(response => this.setState({orders: response.data}))
    .catch(err => console.error(err))
}

addOrder = _ =>{ 
   
    const {Quantity} = this.state;
    const {Quantity1} = this.state;
    const {Quantity2} = this.state;
    fetch(`http://localhost:4000/products/add?Name=Espresso&Qty=${Quantity2}`)
    fetch(`http://localhost:4000/products/add?Name=Americano&Qty=${Quantity}`)
    fetch(`http://localhost:4000/products/add?Name=Capuchino&Qty=${Quantity1}`)
 
    .then(this.getOrders) 
    .catch(err => console.error(err))  
}


    render(){
        const { orders, } = this.state;
        return(
            <div className='coffee-body'>
                    <div className='orders-view-client'> 
                    <h3>Basket</h3>
                        {orders.map(this.renderOrders)}
                        
                    </div> 
                <div className='Buttons-body'>
                    <div className='Americano'>
                        <h1>
                                <FABButton colored disabled={!this.state.amequantity} onClick={this.DecrementAmericano}>
                                        <Icon name="-" />
                                    </FABButton><h3>Americano</h3> 
                                    <FABButton colored onClick={this.AddAmericano}>
                                        <Icon name="+" />
                                </FABButton><h2>{this.state.Quantity}</h2> <button onClick={this.addOrder}>Add product</button>
                                   
                        </h1>
                    </div>


                      <div className='Capuchino'>
                        <h1>
                            <FABButton colored disabled={!this.state.capquantity} onClick={this.DecrementCapuchino}>
                                <Icon name="-" />
                            </FABButton><h3>Capuchino</h3>
                            <FABButton colored onClick={this.AddCapuchino}>
                                <Icon name="+" /></FABButton><h2>{this.state.Quantity1}</h2>
                                  
                        </h1>
                        </div>

 
                      <div className='Espresso'>   
                        <h1>
                            <FABButton colored disabled={!this.state.espquantity} onClick={this.DecrementEspresso}>  
                                <Icon name="-" />
                            </FABButton><h3>Espresso</h3>
                            <FABButton colored onClick={this.AddEspresso}>
                                <Icon name="+" />
                            </FABButton><h2>{this.state.Quantity2}</h2>  
                                
                        </h1>
                        </div>
                    </div>    
                     
                     <div>
                        <h2 className='total-div'>Total £ { this.state.cash}</h2>
                     </div>   
                
            </div>
        )
    }
}


export default Coffee; 