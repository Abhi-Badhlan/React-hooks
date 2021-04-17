
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from 'react-bootstrap'
import {NavBar} from './shared/NavBar'
import {LoginView} from './views/Login' 
import {SignupView} from './views/Signup'
import {BrowserRouter,Route} from 'react-router-dom' 
function App() {
  return (
<BrowserRouter>
<NavBar/>
<Route path="/login" component={LoginView} />
<Route path="/signUP" component={SignupView} />
</BrowserRouter>
 );
}

export default App;
