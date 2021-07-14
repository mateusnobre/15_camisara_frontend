import { Link, useHistory } from "react-router-dom";
import { Button, Input } from "../components/common/Components";
import {
  LoginBox,
  TextLogin,
  FormsLogin,
} from "../components/common/LoginComponents";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../components/BaseURL";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };

    const request = axios.post(baseUrl+"/login", body);

    request.then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log("ok");
      history.push("/home");
    });
    request.catch((error) => {
      if (error.response.status === 409) {
        alert("Usuario e/ou senha errados");
      } else {
        alert("Dados preenchidos incorretamente");
      }
    });
  }
  return (
    <LoginBox>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <FormsLogin height="300px" onSubmit={handleSubmit}>
        <TextLogin>Email</TextLogin>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <TextLogin>Senha</TextLogin>
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button>Entrar</Button>
        <Link to="/sign-up">
          <TextLogin center={true}>Novo na Camisara? Cadastre-se!</TextLogin>
        </Link>
      </FormsLogin>
    </LoginBox>
  );
}
