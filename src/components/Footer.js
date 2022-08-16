import React from 'react'
import { SocialIcon } from 'react-social-icons';
// import './Footer.css';
import Table from 'react-bootstrap/Table';
// import SendMessages from './SendMessage';



const Footer = () => {
  // const today = new Date();

  return (

    <Table className="Footer" >
      <thead>
        <tr>
          <th>Endereco</th>
          <th>Contato</th>
          <th>Redes Sociais</th>
        </tr>
      </thead>
      <tbody className="tbodyFooter">
        <tr>
          <td>Rua Sete De Setembro, 904</td>
          <td>(43) 999911-1746</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Centro - CEP 86870-000</td>
          <td><a href="mailto:acoivaipora@hotmail.com">acoivaipora@hotmail.com</a></td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Ivaipora, PR - Brasil</td>
          {/* <td style={{ cursor: 'pointer' }}><SendMessages /></td> */}
        </tr>
      </tbody>
    </Table>
  )
}

export default Footer