import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {

  const { id } = useParams();
  const product = products.find(product => (product.id).toString() === id);

  return (

    <table className="ProductPage">
        <thead>
            <tr>
                <th></th>
                <th scope="col">Produto</th>
                <th scope="col">Modelos</th>
                <th scope="col">Descriçao</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                <img 
                    style={{ width: '300px', height: '300px'}}
                    src={product.pictureUrl} 
                    alt={product.tipo}
                />
                </th>
                <td>{product.name}</td>
                <td>{product.modelos}</td>
                <td>{product.descricao}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="row" colSpan="1"><Link to='/'><button className="button">Voltar</button></Link><button className="button">Baixe nosso catálogo</button></th>
            </tr>
        </tfoot>
    </table>

    // <main className="ProductPage">
    //     <article className="product">
    //         {product &&
    //         <>
    //             <img 
    //                 // style={{ width: '300px', height: '300px'}}
    //                 src={product.pictureUrl} 
    //                 alt={product.tipo}
    //             />
    //             <p>{product.name}</p>
    //             <p>{product.modelos}</p>
    //             <p className="product-description">{product.descricao}</p>
    //             <p>
    //                 <Link to='/'><button className="button">Voltar</button></Link>
    //             </p>
    //         </>
    //         }
    //         {!product && 
    //           <> 
    //             <h2>Produto não encontrado no momento.</h2>
    //             <p>
    //                 <Link to='/'>Volte para Aço Ivaiporã</Link>
    //             </p>
    //             </>
    //         }
    //     </article>
    // </main>
  )
}

export default ProductPage