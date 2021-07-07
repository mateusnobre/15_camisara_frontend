import { Link } from "react-router-dom";
import { Button, Input } from "../components/common/Components";
import {
  LoginBox,
  TextLogin,
  FormsLogin,
} from "../components/common/LoginComponents";
import logo from "../assets/images/logo.png";

export default function Login() {
  return (
    <LoginBox>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <FormsLogin>
        <TextLogin>Email</TextLogin>
        <Input placeholder="Login"></Input>
        <TextLogin>Senha</TextLogin>
        <Input placeholder="Senha"></Input>
        <Button>Entrar</Button>
        <Link to="/sign-up">
          <TextLogin center={true}>Novo na Camisara? Cadastre-se!</TextLogin>
        </Link>
      </FormsLogin>
    </LoginBox>
  );
}
