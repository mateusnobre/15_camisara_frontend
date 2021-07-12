import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import Form from "../components/review/Form";
import ProductInfo from "../components/review/ProductInfo";
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
  height: 120vh;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding-bottom: 40px;
`;
