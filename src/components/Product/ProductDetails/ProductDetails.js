import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductPurchase from "./ProductPurchase";

export default function ProductDetails({ product }) {
  return (
    <Container>
      <ProductImages product={product}></ProductImages>
      <ProductPurchase product={product}></ProductPurchase>
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
