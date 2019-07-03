import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,  CardMenu, IconButton} from 'react-mdl'



class Locations extends Component{
    constructor(props){
        super(props) ;
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 1){
            return(
               <div  className='projects-grid'> 
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height:'176px;'}}>React Project 1</CardTitle>
                        <CardText>Text hereText hereText hereText hereText hereText hereText hereText hereText her</CardText>
                        <CardActions border>
                            {/* <Button colored>GitHub</Button> */}
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
                        </CardActions>              
                        <CardMenu style={{color:'white'}}>
                            <IconButton name='share'/>    
                        </CardMenu>     
                    </Card>
                </div>
                

            )
        }else if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                    <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'Black', height:'176px;',}}>Tea</CardTitle>
                        <CardText><br></br><br></br><br></br></CardText>
                        <CardActions border>
                            {/* <Button style={{color: 'black', marginTop:'auto;'}} href="https://github.com/Yozgyan/High-Low" target='_blank' colored>GitHub</Button> */}
                            {/* <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button> */}
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
                    <h1>Cakes</h1>
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
                    <Tab>Drinks</Tab>
                    <Tab>Hot Drinks</Tab>
                    <Tab>Bakery</Tab>
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