import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
// import './Header.css';
// import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';


const Header = ({ width }) => {
  
  return (
    <> 
      <header className="Header"> 
        <Link to="/"><img  className="Logo" src={ logo } alt="Aço Ivaiporã" /></Link>
            <h1>Construindo o futuro com você!</h1>
            {/* {width < 768 ? <FaMobileAlt /> 
                : width < 992 ? <FaTabletAlt /> 
                    : <FaLaptop /> } */}
      </header>
    </>
    )
}

export default Header