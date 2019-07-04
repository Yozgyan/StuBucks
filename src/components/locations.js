import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,  CardMenu, IconButton} from 'react-mdl'
import Manchester from './Manchester.jpg'
import London from './London.jpg'
import Liverpool from './Liverpool.jpg'


class Locations extends Component{
    constructor(props){
        super(props) ;
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
               <div  className='projects-grid'> 
                <div >
                    <Card className='firstCard' shadow={50}  >
                        <CardTitle >Manchester</CardTitle>
                        <img src={Manchester}/>
                        <CardText>
                            
                        </CardText>
                        <CardActions border>
                            
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                    </div>
                    <div>
                    <Card className='firstCard'shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>London</CardTitle>
                        <img src={London}/>
                        <CardText></CardText>
                        <CardActions border>
                            
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                    </div>
                    <div>
                    <Card className='firstCard' shadow={50} style={{minWidth: '550', margin: 'auto'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>Liverpool</CardTitle>
                        <img src={Liverpool}/>
                        <CardText></CardText>
                        <CardActions border>
                            
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                    </div>
                </div>
                
                

            )
        }else if(this.state.activeTab === 1){
            return(
                <div className='projects-grid'>
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto', background:'url(https://moovitapp.com/index/en-gb/public-transit-resources/location/site_34735638.jpg)'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>UE</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                </div>
                
            )
        }
        else if(this.state.activeTab === 2 ){
            return(
                <div>
                    <Card shadow={50} style={{minWidth: '550', margin: 'auto', background:'url(https://moovitapp.com/index/en-gb/public-transit-resources/location/site_34735638.jpg)'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>USA</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                </div>

            )
        }
        // }//else if(this.state.activeTab === 3 ){
        //     return(
        //         <div>
        //             <h1>Drinks</h1>
        //         </div>

        //     )
        // }
    }
    render(){
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>UK</Tab>
                    {/* <Tab>EU</Tab>
                    <Tab>USA</Tab> */}
                    {/* <Tab>CSS</Tab> */}
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                
            </div>
        )
    }
}



export default Locations;