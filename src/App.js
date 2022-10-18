import './App.css';
import React, { useState } from "react";
import Acoes from './components/Acoes/Acoes';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Recursos from './components/Recursos/Recursos';

function App() {
  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0,
    casa: 0,
    trabalhador: 0
  });
  
  const [transacoes, setTransacoes] = useState({
    cortar: { madeira: 1 },
    vender: { madeira: -1, ouro: 1 },
    construir: { madeira: -5, ouro: -5, casa: +1 },
    contratarLenhador: { ouro: -10, casa: -1, trabalhador: 1 }
  });

  const handleClick = (e) => {
    const id = e.target.id;
    switch(id) {
      case "cortarBtn":
        setEstoque((prevState) => ({
          ...prevState, 
          madeira: prevState.madeira + transacoes.cortar.madeira
        }));
        break;
      
      case "venderBtn":
        if(estoque.madeira >= transacoes.vender.madeira * -1) {
          setEstoque((prevState) => ({
            ...prevState, 
            madeira: prevState.madeira + transacoes.vender.madeira,
            ouro: prevState.ouro + transacoes.vender.ouro,
          }));
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <Cabecalho />
      <Recursos estoque={estoque}/>
      <Acoes transacoes={transacoes} handleClick={handleClick} />
    </div>
  );
} 

export default App;