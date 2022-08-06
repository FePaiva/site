import { Link } from 'react-router-dom'
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
    
  );
}
export default Nav