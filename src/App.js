import logo from './GIPEYLOGO.jpg';
import './App.css';
//import PrimarySearchAppBar from './componentes/PrimarySearchAppBar';
import AppBar from './componentes/AppBar';
//import ButtonAppBar from './componentes/AppBar';
//import Dashboard from './componentes/Dashboard';


function App() {
  return (
   <div className="App">
      <AppBar></AppBar>  
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
      </header>    
    </div> 
  );
} 


export default App;
