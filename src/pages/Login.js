import React from "react";
import { connect } from 'react-redux';

function Login(props) {
  
  const handleTroca = () =>{
    props.setName('Anônimo');
  }

  return (
    <>
      <h1>Pagina LOGIN</h1>
      Usuário: {props.name}
      <br/>
      <br/>
      <br/>
      <button onClick={handleTroca}>Trocar nome para Anônimo</button>
    </>
  );
}


const mapStateToProps = (state) =>{
  return {
    name: state.usuario.name,
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
