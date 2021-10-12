import {Container} from "./styles"
import {useSelector} from 'react-redux';
const Total = () => {
  const product = useSelector((store) => store.cart);
  const total = product.map(item => item.price).reduce((a, b) => (a + b))
  return (
    <Container>
      <h3>Total da suas Compras</h3>
      {product.map((item, index) => (
        <tr key={index} >
          <td className="name"> {item.name} </td>
          <td className="price"> {item.price} </td>
        </tr>

      ))
      }
      <tr><td>total a pagar </td><td>{product.map(item => item.price).reduce((a, b) => (a + b))}</td></tr>
      <button onClick={() => alert(`voce realizou uma compra por: ${total}`)}>Pagar Total</button>

    </Container >
  )
}
export default Total;
