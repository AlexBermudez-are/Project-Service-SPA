import './App.css';
import Carrusel from './Components/Carrusel';
import Header from './Components/Header';
import InfoConVectores from './Components/InfoConVectores';

function App() {
  return (
    <div className="App">
      <Header style={{ zIndex: "998" }} />
      <Carrusel style={{ zIndex: "997" }} />
      <InfoConVectores style={{ zIndex: "996" }} />
    </div>
  );
}

export default App;
