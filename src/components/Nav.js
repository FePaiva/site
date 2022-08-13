import { Link } from 'react-router-dom'
import SendMessages from './SendMessage';

// import './Nav.css';


const Nav = ({ search, setSearch }) => {

  return (

    <nav className="Nav">
          <ul>
            <li><Link to="/sobre">Sobre</Link></li>
            {/* <li><Link to="/produtos">Produtos</Link></li> */}
            <li><Link to="/fale-conosco">Fale Conosco</Link></li>
            <li><Link to="/onde-estamos">Onde Estamos</Link></li>
            <><SendMessages />Whatsapp</>
          </ul>
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmfor="search">Buscar Produto</label>
                <input
                      id="search"
                      type="text"
                      placeholder="Buscar Produto"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                />
          </form>
    </nav>
    
  );
}
export default Nav