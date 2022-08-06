import './App.css';
import Header from './Header';
import Nav from './Nav';
import Sobre from './Sobre';
import Produtos from './Produtos';
import FaleConosco from './FaleConosco';
import OndeEstamos from './OndeEstamos';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';

 


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"> 
        <Header  title="Aço Ivaiporã"  />
        <Nav />
        <Routes> 
            <Route path="/sobre"
                   element={<Sobre />} 
            />
            <Route path="/produtos" 
                   element={<Produtos />}
            />
            <Route path="/fale-conosco" 
                   element={<FaleConosco />} 
            />
            <Route path="/onde-estamos"
                   element={<OndeEstamos />}
            />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
