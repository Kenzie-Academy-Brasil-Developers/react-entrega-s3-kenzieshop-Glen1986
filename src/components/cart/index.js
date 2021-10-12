import {Container} from './styles'
import {useSelector} from "react-redux";
import Product from "../product";
import Total from '../total';

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  return (
    < Container >
      <h1>Meu carrinho de compras</h1>
      <Total />
      <div className="products">
        {
          cart.map((product) => (
            <Product key={product.id} product={product} isRemovable />
          ))
        }
      </div>
    </Container >
  );
};

export default Cart;
