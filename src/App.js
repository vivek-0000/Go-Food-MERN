
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,
  Routes,
  Route,
  RouterContextProvider
} from "react-router-dom";
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import "bootstrap-dark-5/dist/css/bootstrap-night.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from './Components/ContextReducer';
import MyOrders from './screens/MyOrders';

function App() {
  return (
    <CartProvider>
      <Router>
      <div> 
        <Routes>
          <Route exact path="/" element={<Home></Home>}> </Route>
          <Route exact path="/Login" element={<Login></Login>}> </Route>
          <Route exact path="/CreateUser" element={<SignUp></SignUp>}> </Route>
          <Route exact path="/MyOrders" element={<MyOrders></MyOrders>}> </Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
