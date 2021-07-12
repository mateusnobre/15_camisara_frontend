import styled from "styled-components";
import colors from "../Colors";
import { Link } from "react-router-dom";
import { Button } from "../common/Components";

export default function NoUser() {
  return (
    <Container>
      <p>Faça login para continuar</p>
      <Link to="/login">
        <Button>Fazer login</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 40px;
  }
`;
