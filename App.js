import './App.css';
import SignIn from './componentes/SignIn';
import SignUp from './componentes/SignUp';
import Home from './componentes/Home';
import Dashboard from './componentes/Dashboard';
import NDashboard from './componentes/NDashboard';
import ADashboard from './componentes/ADashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Productos from './componentes/Productos';
import Perfil from './componentes/Perfil';
import NPerfil from './componentes/NPerfil';
import Comercios from './componentes/Comercios';
import Movimientos from './componentes/Movimientos';
import Cobrar from './componentes/Checkout';
import ListUsuarios from './componentes/ListUsuarios';
import AgregarUsuario from './componentes/AgregarUsuario';


//import ButtonAppBar from './componentes/AppBar';
//import Dashboard from './componentes/Dashboard';


function App() {
  return (
    <Router>
        
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin"   component={SignIn} />
        <Route path="/dash"   component={Dashboard} />
        <Route path="/ndash"   component={NDashboard} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/productos"   component={Productos} />
        <Route path="/perfil"  component={Perfil} />
        <Route path="/nperfil"  component={NPerfil} />
        <Route path="/comercios"  component={Comercios} />
        <Route path="/movimientos"  component={Movimientos} />
        <Route path="/cobrar"  component={Cobrar} />
        <Route path="/adash"   component={ADashboard} />
        <Route path="/lusuarios"   component={ListUsuarios} />
        <Route path="/ausuario"   component={AgregarUsuario} />
      </Switch>  
     
    </Router>
  );
} 


export default App;