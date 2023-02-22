import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';



function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Link to={"/"}>
        <Navbar.Brand >MyClothes</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <Link to={`/category/${"accesory"}`}>
              <NavDropdown.Item>accesory</NavDropdown.Item>
              </Link>
              <Link to={`/category/${"use"}`}><NavDropdown.Item>use</NavDropdown.Item></Link>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
      
  );
}

export default NavBar;