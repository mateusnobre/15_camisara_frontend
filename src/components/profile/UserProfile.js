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
      <AttributeName>Email</AttributeName>
      <AttributeValue>{user.email}</AttributeValue>
      <AttributeName>Nome de usuário</AttributeName>
      <AttributeValue>{user.username}</AttributeValue>
      <Button onClick={logOut}>LogOut</Button>
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
`;

const AttributeName = styled.h1`
  font-size: 20px;
  color: ${colors.mainBlack};
`;

const AttributeValue = styled.h2`
  border: 1px solid ${colors.grayLight};
  padding-left: 5px;
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
