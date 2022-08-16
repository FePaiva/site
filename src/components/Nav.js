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
            <li><a target="_blank" href="https://www.google.com/maps/place/A%C3%A7o+Ivaipor%C3%A3/@-24.2453929,-51.6810971,17z/data=!3m1!4b1!4m5!3m4!1s0x94ec158b4ddff415:0x70d9c0f4c4a5b726!8m2!3d-24.2454181!4d-51.6788713">Onde Estamos</a></li>
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