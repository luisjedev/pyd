import '../assets/styles/contenedores/App.scss';
import Header from '../componentes/Header'
import Banner from '../componentes/Banner'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner titulo="HACEMOS REALIDAD TU IDEA" subtitulo="Contáctanos sin compromiso"></Banner>
    </div>
  );
}

export default App;
