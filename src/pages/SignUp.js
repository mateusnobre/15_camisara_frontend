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

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword)
      return alert("Senha e confirmação de senha não se coincidem");

    const body = { username, email, password };

    const request = axios.post("http://127.0.0.1:4000/sign-up", body);
    request.then((response) => {
      alert("Cadastro realizado com sucesso");
      history.push("/login");
    });
    request.catch((error) => {
      if (error.response.status === 409) {
        alert("Email ja utilizado");
      } else {
        alert("Dados preechidos incorretamente");
      }
    });
  }

  return (
    <LoginBox>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <FormsLogin height="450px" onSubmit={handleSubmit}>
        <TextLogin>Nome</TextLogin>
        <Input
          placeholder="Nome"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
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
        <TextLogin>Confirmar Senha</TextLogin>
        <Input
          placeholder="Confirmar Senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Button>Entrar</Button>
        <Link to="/login">
          <TextLogin center={true}>Já tem cadastro? Faça seu login!</TextLogin>
        </Link>
      </FormsLogin>
    </LoginBox>
  );
}
