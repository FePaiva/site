import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Product = ({ product }) => {
  return (
    <div className="product">
          <Link to={`/product/${product.id}`}>
            <img 
                style={{ width: '300px', height: '300px'}}
                src={product.image} 
                alt={product.tipo}
            />
            <h2>{product.tipo}</h2>
          </Link>
          <div className='product-description'>
              <p>{product.modelos}</p>
              <p>{product.descricao}</p>
          </div>
    </div>
  )
}

export default Product