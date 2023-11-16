import React from 'react';
import '../../estylos/App.css' 
 import LoginForm from '../moleculas/LoginForm';

const LoginContainer = () => {
  return(
  <div className="container">
   <h1>Accede al Mundo de las Historias Únicas</h1>
    <img className="user-image" src="Logo.png" alt="Imagen de Usuario" /> 
  
    <LoginForm />
    
  </div>
);
};
export default LoginContainer;
