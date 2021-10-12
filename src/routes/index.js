import {Switch, Route} from 'react-router'
//import Products from "../components/products";
import Carro from "../pages/carro";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/carrinho">
        <Carro/>
      </Route>
    </Switch>
  );
};

export default Routes;
