import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <Navbar bg="light" expand="lg" className='navbar navbar-dark menu'>
            <Container>
                <Navbar.Brand>e-Roro shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Accueil</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register' >S'inscrire</Nav.Link>
                        <NavDropdown title="Autres" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/produit'>produits</NavDropdown.Item>
                            <NavDropdown.Item >

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">

                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;