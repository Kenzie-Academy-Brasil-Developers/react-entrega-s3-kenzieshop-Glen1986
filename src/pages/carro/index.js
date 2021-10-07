import {useSelector} from "react-redux";
import {useHistory} from "react-router";
const Carro = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory()
  return (
    <>
      {cart.map((product, index) => (
        <tr key={index}>
          <td><img src={product.image} alt="Produto" /></td>
          <td> {product.name}</td>
          <td> <button></button></td>
        </tr>
      ))}
      <button onClick={() => history.push("/")}>click</button>
    </>
  )
}
export default Carro;
