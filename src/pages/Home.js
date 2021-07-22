import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

function Home(props) {
  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => {
      history.replace("/sobre");
    }, 2000);
  };

  const handleNovoUsuario = () => {
    props.setName('Natanael Rodrigues')
  }

  const handleContador = () => {
    props.setContador()
  }

  return (
    <>
      <h4>Pagina home</h4>

      NOME: {props.name}
      <br/><br/>
      # Contagem: {props.contador}
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

const mapStateToProps = (state) =>{
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
      }),
    setContador: () => dispatch({
      type: 'INCREMENT_CONTADOR'
    })    
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);
