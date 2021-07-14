import styled from "styled-components";
import colors from "../Colors";
import { Button } from "../common/Components";
import { useHistory } from "react-router-dom";

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();
  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <Container>
      <AttributeName>Email: {user.email}</AttributeName>
      <AttributeName>Nome de Usuário: {user.username}</AttributeName>
      <Button style={{width: "95%", marginBottom: "10px", marginTop: "100px"}} onClick={logOut}>Logout</Button>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.white};
  width: 45%;
  height: 300px;
  padding-top: 40px;
  padding-left: 20px;
  border-radius: 5px;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AttributeName = styled.h1`
  font-size: 20px;
  color: ${colors.mainBlack};
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
`;