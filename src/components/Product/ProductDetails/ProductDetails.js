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
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;
