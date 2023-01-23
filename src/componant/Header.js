import {Navbar,Nav,Container} from 'react-bootstrap';
// import {LinkContainer } from 'react-router-bootstrap'
// import styled from 'styled-components';
import {NavLink} from 'react-router-dom'


const Header = ()=>{
    return(
        <header>
         
         <Navbar bg='dark' className="p-1" variant='dark' expand='lg' collapseOnSelect>
      <Container>
      <NavLink to='/'>
        <Navbar.Brand className="p-2" >
            {/* <IMG className="logo" src="./img/proshop.png" alt="logo"/> */}
            ProShop</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">Home</Nav.Link>
            <Nav.Link href="/login">Product</Nav.Link>
            <Nav.Link href="/login">About Us</Nav.Link>
            
           
          </Nav>
          </Navbar.Collapse> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" varient="light">
            <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i>   Cart</Nav.Link>
            <Nav.Link href="/login"> <i className="fas fa-user"></i>  Sign In</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </header>
    )
}
// const IMG = styled.img`
// position:absolute;
//  height:7rem;
//  top:-2rem;
// `
// singale object in last not assign ,
// ` use only javascript`

export default Header;
