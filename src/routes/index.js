import {Switch, Route} from 'react-router'
//import Products from "../components/products";
import Carro from "../pages/carro";
import Login from "../pages/login/index";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/carrinho">
        <Carro />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  );
};

export default Routes;

