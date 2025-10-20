import MapComponent from './components/MapComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Mapa de Quito - ESRI Ecuador</h1>
        <p>Haz clic en el botón inferior derecho para cambiar entre mapas base</p>
      </header>
      <MapComponent />
    </div>
  );
}

export default App;