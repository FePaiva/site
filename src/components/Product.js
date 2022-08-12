import React from 'react'
import { Link } from 'react-router-dom'
// import './product.css'

const Product = ({ product }) => {
  return (
    <div className="Product">
          <Link to={`/product/${product.id}`}>
            <img 
                style={{ width: '300px', height: '300px'}}
                src={product.pictureUrl} 
                alt={product.tipo}
            />
            <h2>{product.tipo}</h2>
          </Link>
          {/* <p className="product-description">{
                (product.descricao).length <=100 
                    ? product.descricao
                    : `${(product.descricao).slice(0,100)}...`
                    }
            </p> */}
            <Link to={`/product/${product.id}`}><button className="button" >Saiba Mais</button></Link>
          
    </div>
  )
}

export default Product