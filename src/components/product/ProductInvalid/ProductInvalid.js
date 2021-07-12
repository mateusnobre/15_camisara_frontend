import styled from "styled-components";
import { Bug } from "react-ionicons";

export default function ProductInvalid() {
  return (
    <Container>
      <Bug cssClasses="icon"></Bug>
      <Text>Produto Inválido</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 25px;
`;
