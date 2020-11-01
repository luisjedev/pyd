import React, {useState, useEffect} from 'react' // importar react y react hooks
import '../assets/styles/contenedores/App.scss';
import Header from '../componentes/Header'
import Banner from '../componentes/Banner'
import Footer from '../componentes/Footer'
import Title from '../componentes/Title'
import Carousel from '../componentes/Carousel'
import CarouselItem from '../componentes/CarouselItem'

import imagen from '../assets/imagenes/laminas/i2.png'
import imagen2 from '../assets/imagenes/laminas/i3.png'
import imagen3 from '../assets/imagenes/laminas/i4.png'
import imagen4 from '../assets/imagenes/laminas/i5.png'
import imagen5 from '../assets/imagenes/laminas/i6.png'
import imagen6 from '../assets/imagenes/laminas/i7.png'


const App = ()=> {
  const [ videos, setVideos ] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/initalState')
      .then( response => response.json())
      .then( data => setVideos(data));
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <Header></Header>
      <Banner titulo="HACEMOS REALIDAD TU IDEA" subtitulo="Contáctanos sin compromiso"></Banner>
      <Title titulo="Recientes"></Title>
      <Carousel>
          <CarouselItem imagen={imagen} />
          <CarouselItem imagen={imagen2} />
          <CarouselItem imagen={imagen3} />
          <CarouselItem imagen={imagen4} />
          <CarouselItem imagen={imagen5} />
          <CarouselItem imagen={imagen6} />
      </Carousel>
      <Footer></Footer>
    </div>
  )}

export default App;
