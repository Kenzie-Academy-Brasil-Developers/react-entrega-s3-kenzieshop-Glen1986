import {Container, Content} from './styles'
import Button from '../../components/button';
import Input from '../../components/input';
import {Link, useHistory} from 'react-router-dom';
import {FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import api from '../../services/api'
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";


const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .required("campo Obrigatorio!!!"),
  })

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()
  const onSubmitFunction = (data) => {
    api.post("/sessions", data)
      .then((response) => {
        const {token, user} = response.data;
        localStorage.setItem("@Kenzieshop:token", JSON.stringify(token));
        localStorage.setItem("@Kenzieshop:user", JSON.stringify(user));
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("nao e possivel accesar sua conta"))
  };


  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)} >
          <h1>Login</h1>
          <Input register={register}
            icon={FiMail}
            label="Emai"
            placeholder="seu email"
            name="email"
          />
          <Button type="submit"
            title={"Logar"}
          />
        </form>
      </Content>
    </Container>
  )
}
export default Login;
