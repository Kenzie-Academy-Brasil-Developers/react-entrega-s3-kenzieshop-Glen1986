import Cart from '../../components/cart'
import {useSelector} from 'react-redux';
const Carro = () => {
  const price = useSelector((store) => store.products)
  return (
    <div>
      <Cart />

    </div>
  )
}
export default Carro;
