import logo from '../GIPEYLOGO.jpg';
import '../App.css';
//import PrimarySearchAppBar from './componentes/PrimarySearchAppBar';
import AppBar from './AppBar';



//import ButtonAppBar from './componentes/AppBar';
//import Dashboard from './componentes/Dashboard';


function App() {
  return (
 
      <div className="App">
      <AppBar />
      <img src={logo} className="App-logo" alt="logo" />
            
      
      </div> 
    
  );
} 


export default App;