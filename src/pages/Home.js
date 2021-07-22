import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  let history = useHistory();

  const dispatch = useDispatch();

  const name= useSelector(state => state.usuario.name);
  const cont= useSelector(state => state.usuario.contador);

  const handleButton = () => {
    setTimeout(() => {
      history.replace("/sobre");
    }, 2000);
  };

  const handleNovoUsuario = () => {
    dispatch({
      type: 'SET_NAME',
      payload:{name:'Natanael Roberto Rodrigues'}
    });
  }

  const handleContador = () => {
    dispatch({
      type: 'INCREMENT_CONTADOR'
    });
  }

  return (
    <>
      <h4>Pagina home</h4>

      NOME: {name}
      <br/><br/>
      # Contagem: {cont}
      <br/><br/>
      <br/><br/>

      <button onClick={handleContador}>Setar Contador</button>
      <br/><br/>
      <button onClick={handleNovoUsuario}>Setar nome do Usuario</button>
      <br/><br/>
      <button onClick={handleButton}>Ir para a página SOBRE</button>
    </>
  );
}

export default Home;
