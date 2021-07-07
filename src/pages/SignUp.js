import { Link } from "react-router-dom";
import { Button, Input } from "../components/common/Components";
import {
  LoginBox,
  TextLogin,
  FormsLogin,
} from "../components/common/LoginComponents";
import logo from "../assets/images/logo.png";

export default function SignUp() {
  return (
    <LoginBox>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <FormsLogin height="450px">
        <TextLogin>Nome</TextLogin>
        <Input placeholder="Nome"></Input>
        <TextLogin>Email</TextLogin>
        <Input placeholder="Login"></Input>
        <TextLogin>Senha</TextLogin>
        <Input placeholder="Senha"></Input>
        <TextLogin>Confirmar Senha</TextLogin>
        <Input placeholder="Confirmar Senha"></Input>
        <Button>Entrar</Button>
        <Link to="/login">
          <TextLogin center={true}>Já tem cadastro? Faça seu login!</TextLogin>
        </Link>
      </FormsLogin>
    </LoginBox>
  );
}
