import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import Form from "../components/Review/Form";
import ProductInfo from "../components/Review/ProductInfo";
import { Link, useParams } from "react-router-dom";

export default function Review() {
  const { productId } = useParams();
  return (
    <Container>
      <Topbar></Topbar>
      <Link to={`/product/${productId}`}>
        <ProductInfo></ProductInfo>
      </Link>
      <Form></Form>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
  padding-top: 100px;
  height: 100vh;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;
