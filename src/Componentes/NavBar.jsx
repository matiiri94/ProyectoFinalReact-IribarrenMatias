import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"; 


  const NavBar = () => {

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">TIENDA DE MASCOTAS M </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">INICIO</Nav.Link>
              <Nav.Link href="#link">OFERTAS</Nav.Link>
              <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PERROS CACHORROS </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  GATOS CACHORROS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">PERROS ADULTOS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  GATOS ADULTOS
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