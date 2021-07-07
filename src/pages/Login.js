import styled from "styled-components";
import colors from "../components/Colors";
import { Button, Input } from "../components/common/Components";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <LoginBox>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <Forms>
        <Text>Email</Text>
        <Input placeholder="Login"></Input>
        <Text>Senha</Text>
        <Input placeholder="Senha"></Input>
        <Button>Entrar</Button>
        <Link to="/sign-up">
          <Text center={true}>Novo na Camisara? Cadastre-se!</Text>
        </Link>
      </Forms>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  img {
    width: 200px;
    height: auto;
  }
`;

const Forms = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 300px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #483c46;
  text-align: ${(props) => props.center && "center"};
`;
