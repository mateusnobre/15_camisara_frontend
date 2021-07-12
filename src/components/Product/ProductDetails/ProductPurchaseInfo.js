import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../common/Components";
import Sizes from "./Sizes";
import Counter from "./Counter";

export default function ProductPurchaseInfo({ product }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <Container>
      <Text>{product.title}</Text>
      <Text>R$ {product.price}</Text>
      <Sizes sizes={product.sizes}></Sizes>
      <Purchase>
        <Counter quantity={quantity} setQuantity={setQuantity}></Counter>
        <Button productPurchase={true}>Comprar</Button>
      </Purchase>
      <Button>Adicionar na Lista de Desejos</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 48%;
  height: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Purchase = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
