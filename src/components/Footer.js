import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
import Table from 'react-bootstrap/Table';



const Footer = () => {
  const today = new Date();

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Endereco</th>
          <th>Contato</th>
          <th>Redes Sociais</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rua Sete De Setembro, 904</td>
          <td>407-280-4111</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Centro - CEP 86870-000</td>
          <td>acoivaipora@email.com</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Ivaipora, PR - Brasil</td>
          <td>acoivaipora@email.com</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>





    // <div className="main-footer">
    //   <div className="container">
    //     <div className="row">
    //       {/* Column1 */}
    //       <div className="col">
    //         <h4>ACO IVAIPORA</h4>
    //         <ul className="list-unstyled">
    //           <li>Rua Sete De Setembro, 904</li>
    //           <li>Centro - CEP 86870-000 </li>
    //           <li>Ivaipora, PR - Brasil</li>
    //         </ul>
    //       </div>
    //       {/* Column2 */}
    //       <div className="col">
    //         <h4>ACO IVAIPORA</h4>
    //         <ul className="list-unstyled">
    //           <li>Rua Sete De Setembro, 904</li>
    //           <li>Centro - CEP 86870-000 </li>
    //           <li>Ivaipora, PR - Brasil</li>
    //         </ul>
    //       </div>
    //       {/* Column3 */}
    //       <div className="col">
    //         <h4>ACO IVAIPORA</h4>
    //         <ul className="list-unstyled">
    //           <li>Rua Sete De Setembro, 904</li>
    //           <li>Centro - CEP 86870-000 </li>
    //           <li>Ivaipora, PR - Brasil</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className="row">
    //       <p className="col-sm">
    //         &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
    //         Terms Of Service | Privacy
    //       </p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Footer