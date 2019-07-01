import React,{Component} from 'react'
import {FABButton, Icon} from 'react-mdl'

class Coffee extends Component{
    constructor(props){
        super(props);
        this.state = {
            cash: 0,
            amequantity: 0,
            capquantity: 0,
            espquantity: 0,
            teaquantity: 0,
            orders: [],
            order: {
                HotDrinks: 'Sample',
                Quantity: 0
            }


            
        }
    }


    AddAmericano = () => {
        this.setState({cash: this.state.cash +2.50});
        this.setState({amequantity: this.state.amequantity + 1})
        
    }
    DecrementAmericano = () => {
        this.setState({cash: this.state.cash - 2.50});
        this.setState({amequantity: this.state.amequantity - 1})
        
        
    }
    AddCapuchino = () => {
        this.setState({cash: this.state.cash +2.75});
        this.setState({capquantity: this.state.capquantity + 1})
        
    }
    DecrementCapuchino = () => {
        this.setState({cash: this.state.cash - 2.75});
        this.setState({capquantity: this.state.capquantity - 1})
        
        
    }
    AddEspresso = () => {
        this.setState({cash: this.state.cash +1.50});
        this.setState({espquantity: this.state.espquantity + 1})
        
    }
    DecrementEspresso = () => {
        this.setState({cash: this.state.cash - 1.50});
        this.setState({espquantity: this.state.espquantity - 1})
        
        
    }
    AddBlackTea = () => {
        this.setState({cash: this.state.cash +2.00});
        this.setState({teaquantity: this.state.teaquantity + 1})
        
    }
    DecrementBlackTea = () => {
        this.setState({cash: this.state.cash - 2.00});
        this.setState({teaquantity: this.state.teaquantity - 1})
        
        
    }
    
renderOrders = ({HotDrinks, Quantity}) => <div key={Quantity}>{HotDrinks}</div>

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
    const { order } = this.state;
    fetch(`http://localhost:4000/products/add?HotDrinks=${order.HotDrinks}&Quantity=${order.Quantity}`)
    .then(this.getOrders)
    .catch(err => console.error(err))
}

    render(){
        const { orders, order } = this.state;
        return(
            <div className='coffee-body'>

                    {orders.map(this.renderOrders)}
                    <div>
                        <input value={order.HotDrinks} onChange={e =>this.setState({order: {...order, HotDrinks:e.target.value}})} />
                        <input value={order.Quantity} onChange={e =>this.setState({order: {...order, Quantity:e.target.value}})}/>
                        <button onClick={this.addOrder}>Add product</button>
                    </div> 




                      <div className='Americano'>
                        <h1><FABButton colored disabled={!this.state.amequantity} onClick={this.DecrementAmericano}>
                                    <Icon name="-" />
                                </FABButton>Americano
                                <FABButton colored onClick={this.AddAmericano}>
                                    <Icon name="+" />
                                </FABButton><h2>{this.state.amequantity}</h2> 
                                
                        </h1>
                        </div>
                      <div className='Capuchino'>
                        <h1>
                            <FABButton colored disabled={!this.state.capquantity} onClick={this.DecrementCapuchino}>
                                <Icon name="-" />
                            </FABButton>Capuchino
                            <FABButton colored onClick={this.AddCapuchino}>
                                <Icon name="+" />
                            </FABButton><h2>{this.state.capquantity}</h2>
                                
                        </h1>
                        </div>
                      <div className='Espresso'>
                        <h1>
                            <FABButton colored disabled={!this.state.espquantity} onClick={this.DecrementEspresso}>
                                <Icon name="-" />
                            </FABButton>Espresso
                            <FABButton colored onClick={this.AddEspresso}>
                                <Icon name="+" />
                            </FABButton><h2>{this.state.espquantity}</h2>
                                
                        </h1>
                        </div>
                      <div className='BlackTea'>
                        <h1>
                            <FABButton colored disabled={!this.state.teaquantity} onClick={this.DecrementBlackTea}>
                                <Icon name="-" />
                            </FABButton>English Breakfast Tea
                            <FABButton colored onClick={this.AddBlackTea}>
                                <Icon name="+" />
                            </FABButton><h2>{this.state.teaquantity}</h2>
                                
                        </h1>
                        </div>
                     <div>
                     <h2 className='total-div'>Total £ { this.state.cash}</h2>
                     </div> 
                
            </div>
        )
    }
}


export default Coffee;