import React from 'react'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  const today = new Date();

  return (
    <footer className="Footer">
      <p>Endereço</p>
      <p>Rua Sete De Setembro, 904</p>
      <p>Centro, Ivaipora,</p>
      <p>PR, CEP 86870-000, Brasil</p>
      {/* <p>Copyright &copy; Aço Ivaiporã {today.getFullYear()}</p> */}
    </footer>
    
  )
}

export default Footer