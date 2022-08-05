import { Link } from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';


const Nav = () => {

  return (

    <nav className="Nav">
          <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/fale-conosco">Fale Conosco</Link></li>
            <li><Link to="/onde-estamos">Onde Estamos</Link></li>
          </ul>
    </nav>
    // <>
    //   <Navbar bg="info" variant="dark" expand="lg" sticky="top" className="justify-content-center" >
    //       <Nav  activeKey="/home">
    //         <Nav.Item>
    //           <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link as={Link} to={"/produtos"}>Produtos</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link as={Link} to={"/fale-conosco"}>Fale Conosco</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link as={Link} to={"/onde-estamos"}>Onde Estamos</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //   </Navbar>
    // </>
  );
}
export default Nav