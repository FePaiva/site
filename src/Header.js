import React from 'react'
import logo from './images/logo.png'
const Header = ({  }) => {
  
  return (
    <div className="Header"> 
    <img  className="Logo" src={ logo } alt="Aço Ivaiporã" />
    <p className='Frase'>Construindo o futuro com você!</p>
    </div>
    )
}

export default Header