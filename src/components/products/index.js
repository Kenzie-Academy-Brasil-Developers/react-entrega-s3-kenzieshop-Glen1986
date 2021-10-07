import {Container} from './styles'
import { useSelector } from "react-redux";
import Product from "../product";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
