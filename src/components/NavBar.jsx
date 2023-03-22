import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';





function NavBar() {
  

  return (
    <>
    
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Link to={"/"}>
        <Navbar.Brand >MyClothes</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <NavDropdown title="categories">
            <NavDropdown.Item>
              <Link to={`/category/Accesory`}>Accesory</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to={`/category/Use`}>Use</Link>
            </NavDropdown.Item>
           </NavDropdown>
          </Nav>
            
        </Navbar.Collapse>

        <CartWidget/>
        
      </Container>
    </Navbar>
    </>
      
  );
}

export default NavBar;