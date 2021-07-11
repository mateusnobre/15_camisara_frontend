import styled from "styled-components";

export default function ProductDescription({ product }) {
  return (
    <Container>
      <Title>Descrição</Title>
      <Text>{product.description}</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: wrap;
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.text`
  line-height: 1.5;
`;
