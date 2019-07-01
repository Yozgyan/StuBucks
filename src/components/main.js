import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import Locations from './locations';
import Specials from './specials';
import Wanttjot from './wanttjot';
import Rewards from './rewards';
import Coffee from './coffee';
import Tea from './tea';
import Menu from './menu';


const Main = () =>(
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route  path='/Landing' component={LandingPage} />
        <Route  path='/specials' component={Specials} />
        <Route  path='/locations' component={Locations} />
        <Route  path='/wanttjot' component={Wanttjot} /> 
        <Route  path='/rewards' component={Rewards} />
        <Route  path='/coffee' component={Coffee} />
        <Route  path='/tea' component={Tea} />
        <Route  path='/menu' component={Menu} />
    </Switch>
)


export default Main;