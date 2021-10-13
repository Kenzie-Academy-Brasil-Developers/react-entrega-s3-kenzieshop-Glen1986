import {Switch, Route} from 'react-router'
//import Products from "../components/products";
import Carro from "../pages/carro";
import Home from "../pages/home";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route  path="/carrinho">
        <Carro/>
      </Route>
      <Route  path="/login">
        <Login/>
      </Route>
      <Route  path="/home">
        <Home/>
      </Route>
    </Switch>
  );
};

export default Routes;
