import React,{Component} from 'react'


class Tea extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            order: {
                HotDrinks: 'Sample',
                Quantity: 0
            },
        }
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


    render(){
        const { orders } = this.state;
        return( 

            <div className='contact-body'>
                <div>
                    <h1>
                        Client Orders:
                    </h1>
                </div>
                
                <div>
                    <ol>
                        {orders.map(this.renderOrders)}
                    </ol>
                </div>

            </div>
        )
    }
}


export default Tea;