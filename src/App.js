import './App.css';
import Carrusel from './Components/Carrusel';
import ComponentCard from './Components/ComponentCard';
import ContainerAccordion from './Components/ContainerAccordion';
import Header from './Components/Header';
import InfoConVectores from './Components/InfoConVectores';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Header style={{ zIndex: "998" }} />
      <Carrusel style={{ zIndex: "997" }} />
      <InfoConVectores style={{ zIndex: "996" }} />
      <Slider style={{ zIndex: "996" }} />
      <ComponentCard style={{ zIndex: "996" }} />
      <ContainerAccordion style={{ zIndex: "996" }} />
    </div>
  );
}

export default App;
