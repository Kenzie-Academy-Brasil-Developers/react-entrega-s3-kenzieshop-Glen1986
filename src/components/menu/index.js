
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux'

const Menu = () => {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);
  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>KenzieShop</MenuItem>
        <ShoppingCartIcon onClick={() => sendTo("/carrinho")}>{cart.length}</ShoppingCartIcon>
        <p>{cart.length}</p>

      </Toolbar>
    </AppBar>
  );
};

export default Menu;
