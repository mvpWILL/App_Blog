 
 import Button from '../atoms/Button';
 import Input from '../atoms/Input'; 
 
const LoginForm = () => (
  <div>
    <form action='/blogform'>
    <Input type="text" id="usuario" name="usuario" label="Nombre de Usuario" required={true} />
    <Input type="password" id="contrasena" name="contrasena" label="Contraseña" required={true} />
   <br />
     <Button text="Iniciar Sesión" />
     </form>
     
    

 
   
  </div>
  
   
);

export default LoginForm;
