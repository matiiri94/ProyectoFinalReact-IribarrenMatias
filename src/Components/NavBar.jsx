import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"; 


  const NavBar = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">TIENDA LA NAVE </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">INICIO</Nav.Link>
              <Nav.Link href="#link">OFERTAS</Nav.Link>
              <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">COSMETICA </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  HOGAR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ELECTRODOMESTICOS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  TECNOLOGIA
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    
    ) 

  }

  export default NavBar; 