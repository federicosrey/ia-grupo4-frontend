
import './App.css';

import SignIn from './componentes/SignIn';
import SignUp from './componentes/SignUp';
import Home from './componentes/Home';
import Dashboard from './componentes/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Productos from './componentes/Productos';
import Perfil from './componentes/Perfil';
import Comercios from './componentes/Comercios';


//import ButtonAppBar from './componentes/AppBar';
//import Dashboard from './componentes/Dashboard';


function App() {
  return (
    <Router>
        
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin"  component={SignIn} />
        <Route path="/dash"  component={Dashboard} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/productos"  component={Productos} />
        <Route path="/perfil"  component={Perfil} />
        <Route path="/comercios"  component={Comercios} />
      </Switch>  
     
    </Router>
  );
} 


export default App;

/* function App() {
  return (
    <Router>
      <div className="App">
      <AppBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
      </header>   
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin"  component={SignIn} />
      </Switch>  
      </div> 
    </Router>
  );
}  */