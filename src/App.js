
import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, IconButton, Menu, MenuItem } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './components/logo.png';

import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <div className='logo-img'> 
             <img className='logo-img' alt="logo" src={logo}/> 
        </div> 
        <div className='top-bar'>
            <div className='left-side'>
                <p className=' left-side-ptag' >
                Free shipping on orders of £30+ | Use Code STULOVE > offer details >
                </p>
            </div>
            <div className='right-side'>
              <p className='right-ptag'>
                Find nearest store
              </p>
            </div>
        </div>
        <Header className='header-color'  title=" " scroll>
            <Navigation className='nav-controller'>
                <Link className="title" to="/Landing">STUBUCKS</Link>  
                <Link className="title" to="/coffee">Make Order</Link>
                <Link className="title" to="/tea">Barista View</Link>
                <Link className="title"to="/menu">Menu</Link>
                <Link className="title" to="/rewards">Rewards</Link>
                <Link className="title" to="/wanttjot">Want to join our team?</Link>
                <Link className="title" to="/locations">Locations</Link>
                <Link className="title" to="/specials">Specials</Link>
            </Navigation>
        </Header>
        <Navigation id='dotted' className='dotted-menu' >
            <div style={{position: 'relative'}}>
                <IconButton name=''  id="demo-menu-lower-left" />
                <Menu id='menu-id' target="demo-menu-lower-left">
                    <MenuItem><Link className="title" to="/Landing">STUBUCKS</Link> </MenuItem>
                    <MenuItem><Link className="title" to="/coffee">Make Order</Link></MenuItem>
                    <MenuItem><Link className="title" to="/tea">Barista View</Link></MenuItem>
                    <MenuItem><Link className="title"to="/menu">Menu</Link></MenuItem>
                    <MenuItem><Link className="title" to="/rewards">Rewards</Link></MenuItem>
                    <MenuItem><Link className="title" to="/wanttjot">Want to join our team?</Link></MenuItem>
                    <MenuItem><Link className="title" to="/locations">Locations</Link></MenuItem>
                    <MenuItem><Link className="title" to="/specials">Specials</Link></MenuItem>
                </Menu>
            </div>
        </Navigation>
        
               
        
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
  </div>
  );
  
  }
}

export default App;



