import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Sobre from './Sobre';
import FaleConosco from './FaleConosco';
import OndeEstamos from './OndeEstamos';
import ProductPage from './ProductPage';
import Missing from './Missing';
import useWindowSize from '../hooks/useWindowSize';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// images
// import Chapas from '../images/Chapas.png';
// import ConjElevacao from '../images/ConjElevacao.png';
// import Degraus from '../images/Degraus.png';
// import Formas from '../images/Formas.png';
// import Janelas from '../images/Janelas.png';
// import Laminados from '../images/Laminados.png';
// import MarcoPorta from '../images/MarcoPorta.png';
// import Perfis from '../images/Perfis.png';
// import PerfisIW from '../images/PerfisIW.png';
// import TiraRaiada from '../images/TiraRaiada.png';
// import Trilhos from '../images/Trilhos.png';
// import TubosIndustriais from '../images/TubosIndustriais.png';

function App() {

  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     image: Perfis,
  //     tipo: "Perfis",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 2,
  //     image: Janelas,
  //     tipo: "Janelas",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 3,
  //     image: MarcoPorta,
  //     tipo: "Marco de porta",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 4,
  //     image: Trilhos,
  //     tipo: "Trilhos",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 5,
  //     image: Formas,
  //     tipo: "Formas",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 6,
  //     image: Laminados,
  //     tipo: "Laminados",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 7,
  //     image: ConjElevacao,
  //     tipo: "Conjunto de Eleva????o",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 8,
  //     image: PerfisIW,
  //     tipo: "Perfils I e W",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 9,
  //     image: Chapas,
  //     tipo: "Chapas",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 10,
  //     image: TiraRaiada,
  //     tipo: "Alum??nio, Tira Raiada, Telas",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 11,
  //     image: TubosIndustriais,
  //     tipo: "Tubos industriais",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   },
  //   {
  //     id: 12,
  //     image: Degraus,
  //     tipo: "Degraus",
  //     modelos:"Perfil estrutural perfiladeira",
  //     descricao: "Vou postar alguma coisa aqui pra testar se funciona.\n\nNao tenho oq escrever por enquanto."
  //   }
  // ])
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { width } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = products.filter(product => 
      ((product.name).toLowerCase()).includes(search.toLocaleLowerCase())
      ||((product.mod1).toLowerCase()).includes(search.toLocaleLowerCase())
      );

      setSearchResults(filteredResults);
  }, [products, search])


  useEffect(() => {
    fetch("http://localhost:3500/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3000/products');


  return (
    <div className="App">
        <Header width={width}   
        />
        <Nav search={search} setSearch={setSearch} />
      <div className="content-wrap"> 
        <Routes> 
        <Route path="/"
                   element={<Home 
                                products={searchResults}
                            />} 
            />
            <Route path="/sobre"
                   element={<Sobre />} 
            />
            {/* <Route path="/produtos" 
                   element={<Produtos produtos={produtos}/>}
            /> */}
            <Route path="/product/:id" 
                   element={<ProductPage products={products}/>}
            />
            <Route path="/fale-conosco"  
                   element={<FaleConosco />} 
            />
            <Route path="/onde-estamos"
                   element={<OndeEstamos />}
            />
            <Route path="*" 
                    element={<Missing />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
