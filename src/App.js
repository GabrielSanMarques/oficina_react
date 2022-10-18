import './App.css';
import Acoes from './components/Acoes/Acoes';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Recursos from './components/Recursos/Recursos';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Recursos />
      <Acoes />
    </div>
  );
} 

export default App;