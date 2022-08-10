import React from 'react'
import Produto from './Produto'
import "./Produtos.css"


const Produtos = ({ produtos }) => {

  console.log("produtos", produtos)
  return (
<ul className="cards">
      {/* render a list of <Produto> components in here */}
      {produtos.map(produto => <Produto produto={produto} key={produto.id}/>)}
    </ul>
  )
}

export default Produtos