import React, { useState } from 'react'
import "./Produto.css"

const Produto = ({ produto }) => {

  const [isModelos, setIsModelos] = useState(true)

  function handleClick() {
    setIsModelos(!isModelos)
  }

  return (
    <li className="cards__item">
    <div className="card">
      <img onClick={handleClick}
        src={produto.image}
        alt={produto.name}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__title">{produto.tipo}</div>
        <p className="card__text">{isModelos ? produto.modelos : produto.descricao}</p>
        <div className="card__detail">
          {/* <p>{produto.twitter}</p> */}
          <p>
            {/* {
             produto.fromUSA ? "USA-based" : "Working overseas"
            } */}
          </p>
        </div>
      </div>
    </div>
  </li>
  )
}

export default Produto