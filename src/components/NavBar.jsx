import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';



function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">MyClothes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Clothes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jackets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Swetters</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/> <p> 2</p>
      </Container>
    </Navbar>
      
  );
}

export default NavBar;