import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductPurchase from "./ProductPurchase";

export default function ProductDetails() {
  return (
    <Container>
      <ProductImages></ProductImages>
      <ProductPurchase></ProductPurchase>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 120px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;
