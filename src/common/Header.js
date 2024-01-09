import React from 'react'
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';





const Header = () => {
  return (
    <div style={{backgroundColor:'#ffffff'}}>
        <div className='uk-container'>
        
        <Navbar className='navbar_custom'>
        <Link to={'/'}>
            <div className='logo' >
            <img src='images/logo.jpeg'/>
            </div>
        </Link>
            
    <Nav >
      <Nav.Item icon={<HomeIcon />}> <Link to={'/'}> Home </Link> </Nav.Item>
      <Nav.Item > <Link to={'/services'}> Services </Link> </Nav.Item>
      <Nav.Item > <Link to={'/contact'}> Contact </Link> </Nav.Item>
      
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    
    
  </Navbar>
  
  </div>
  </div>
  )
}

export default Header