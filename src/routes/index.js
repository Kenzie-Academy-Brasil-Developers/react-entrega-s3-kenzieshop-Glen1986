
import { Switch, Route } from "react-router-dom";
import Products from "../components/products";
import Cart from "../components/carrinho";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/carriho">
        <Cart />
      </Route>
    </Switch>
  );
};

export default routes;
