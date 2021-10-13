
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Menu = () => {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);
  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem onClick={() => sendTo("/")}>KenzieShop</MenuItem>
          <ShoppingCartIcon onClick={() => sendTo("/carrinho")}>{cart.length}</ShoppingCartIcon>
          <p>{cart.length}</p>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KenzieShop
          </Typography>
        <Button onClick={()=>sendTo("/login")} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
