import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {

  const { id } = useParams();
  const product = products.find(product => (product.id).toString() === id);

  return (
    <main className="ProductPage">
        <article className="product">
            {product &&
            <>
                <img 
                    // style={{ width: '300px', height: '300px'}}
                    src={product.pictureUrl} 
                    alt={product.tipo}
                />
                <p>{product.name}</p>
                <p>{product.modelos}</p>
                <p className="product-description">{product.descricao}</p>
                <p>
                    <Link to='/'><button className="button">Voltar</button></Link>
                </p>
            </>
            }
            {!product && 
              <> 
                <h2>Produto não encontrado no momento.</h2>
                <p>
                    <Link to='/'>Volte para Aço Ivaiporã</Link>
                </p>
                </>
            }
        </article>
    </main>
  )
}

export default ProductPage