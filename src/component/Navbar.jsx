import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Mynavbar  = ()=> {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ARG Program</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/cargar">Cargar Datos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
   
    </>
  );
}

export default Mynavbar;