import React,{Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Tea extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell className='cell1' col='{6}'>
                        <h2>Tea</h2>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em', }}>text text text texte textetentket nten ktjnk tnek n</p>
                    </Cell>
                    <Cell className='cell2' col='{6}'>
                        <div className='details'>
                            <h2>Tea</h2>
                            <h3>Tea</h3>
                            <h3>Tea</h3>
                            <h3>Tea</h3>
                            <h3>Tea, <br></br>Tea</h3>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}


export default Tea;