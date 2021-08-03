import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark"> 
  <Container>
  <Navbar.Brand >
  <Link to='/'  style={{textDecoration:'none'}}> 
    <i className="fa fa-github" /> GitHub Finder </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      <Link style={{textDecoration:'none', padding:'15px',margin:'15px' 
    }} to='/'> Home</Link> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>   
    )
}

export default NavBar
