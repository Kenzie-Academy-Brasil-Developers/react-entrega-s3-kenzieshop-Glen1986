import {Container} from './styles'

import {useDispatch} from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({product, isRemovable = false}) => {

  const dispatch = useDispatch();

  const {name, price, image} = product;

  return (
    <Container>
      <h3>{name}</h3>
      <img src={image} alt="" />
      <h3>{price}</h3>
      {isRemovable ? (

        <button onClick={() => dispatch(removeFromCartThunk(name))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar item no carrinho
        </button>
      )}
    </Container>
  );
};

export default Product;
