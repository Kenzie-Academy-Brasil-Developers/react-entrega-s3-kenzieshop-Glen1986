import {Container, Content} from '../../components/products/styles'
import formatValue from '../../util/formatValue'
import api from '../../services/api'
import Products from '../../components/products';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';


const Home = () => {
  const dispatch = useDispatch() ;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const res = await api.get("/products/");
    const data = res.data.map((product)=>({
      ...product,
      princeFormated: formatValue(product.price),
    }));
    setLoading(false);
    setProducts(data);
  }

  useEffect(()=>{
    loadProducts();
  },[])

  return (
    <Container>
       <Products></Products>
    </Container>
  )
}
export default Home;

