import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../stlyes/navbar.css'; // Asegúrate de importar los estilos

function NavbarComponent() {
    return (
        <Navbar className="custom-navbar px-4 shadow-lg" expand="lg">
            <Link to="/" className="navbar-brand p-2">
                <img src={logo} width={55} height={50} alt="Logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto fs-4 gap-3">
                    <Link to="/" className="nav-link hover-underline-animation">Inicio</Link>
                    <Link to="/about" className="nav-link hover-underline-animation">Sobre Nosotros</Link>
                    <Link to="/team" className="nav-link hover-underline-animation">Equipo</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
