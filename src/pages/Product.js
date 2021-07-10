import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import ProductDetails from "../components/Product/ProductDetails/ProductDetails";

export default function Product() {
  return (
    <Container>
      <Topbar></Topbar>
      <ProductDetails>a</ProductDetails>
      <ProductDescription>b</ProductDescription>
      <ProductEvaluation>c</ProductEvaluation>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
`;

const ProductDescription = styled.div`
  height: 100px;
  background-color: green;
  width: 100%;
`;

const ProductEvaluation = styled.div`
  height: 100px;
  background-color: black;
  width: 100%;
`;
