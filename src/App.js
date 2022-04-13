import './App.css';
import Carrusel from './Components/Carrusel';
import ComponentCard from './Components/ComponentCard';
import ContainerAccordion from './Components/ContainerAccordion';
import Header from './Components/Header';
import InfoConVectores from './Components/InfoConVectores';
import Newsletter from './Components/Newsletter';
import Slider from './Components/Slider';
import { ReactComponent as Publicidad } from './Assets/Icons/Publicidad.svg'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header style={{ zIndex: "998" }} />
      <Carrusel style={{ zIndex: "997" }} />
      <InfoConVectores style={{ zIndex: "996" }} />
      <Slider style={{ zIndex: "996" }} />
      <ComponentCard style={{ zIndex: "996" }} />
      <p className='line'></p>
      <ContainerAccordion style={{ zIndex: "996" }} />
      <Newsletter />
      <Publicidad style={{ width: "100%", height: "53px" }} />
      <Footer />
    </div>
  );
}

export default App;
