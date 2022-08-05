import './App.css';
import Header from './Header';
import Sobre from './Sobre';
import Produtos from './Produtos';
import Footer from './Footer';
import Navi from './Navi';
 


function App() {
  return (
    <div className="App">
        <Header title="Aço Ivaiporã"  />
        <Navi />
        <Sobre />
        <Produtos />
        <Footer />
    </div>
  );
}

export default App;
