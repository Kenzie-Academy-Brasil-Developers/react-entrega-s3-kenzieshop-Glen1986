
import {AnimationContainer, Container, Content} from './styles'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
//import api from '../../services/api'
//import { useHistory} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
//import {useState } from 'react'
//import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form';
/*
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
*/

const Login =()=>{
//    const [error, setError] = useState();
    const schema = yup.object().shape({
    username: yup.string().required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .min(8, "minimo 8 caracteres")
      .required("campo Obrigatorio!!!"),
  })
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })
 // const dispatch = useDispatch()
 // const history = useHistory()

  const onSubmitFunction = (data) =>{
    console.log(data)
 //   api.post("/users", data)
  //  return history.push("/dashboard");
  }
  
  return(
    <Container>
      <Content>
        <AnimationContainer>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <input
              icon={FiMail}
              label="username"
              placeholder="username"
              name="username"
              {...register("username")}
            />
            <input
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              {...register("password")}
            />
          <button onClick={()=>console.log("click")}
            >Entrar</button>

          </form>
        </AnimationContainer>
      </Content>
    </Container>

  );
};
export default Login
