import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import './Header.css';



const Header = ({  }) => {
  
  return (
    <> 
      <header className="Header"> 
        <Link to="/"><img  className="Logo" src={ logo } alt="Aço Ivaiporã" /></Link>
            <h1>Construindo o futuro com você!</h1>
      </header>
    </>
    )
}

export default Header