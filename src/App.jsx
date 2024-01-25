import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar from "./componentes/NavBar";
import { MainRouter } from './router/MainRouter';
MainRouter

const App =() => {
  
  
return (
  <div className='ContenedorPrincipal' style={{width: "100vw", heitght: "100vh"}}>
  <NavBar /> 
  <MainRouter />  
  </div>
 
 ); 
};

export default App; 


