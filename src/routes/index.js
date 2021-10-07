import {Switch, Route} from "react-router-dom";
import Products from "../components/products";
import Carro from "../pages/carro";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/carriho">
        <Carro />
      </Route>
    </Switch>
  );
};

export default routes;
