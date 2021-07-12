import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export default function ProductInfo() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useState(() => {
    axios.get(`http://127.0.0.1:4000/product/${productId}`).then((response) => {
      setProduct(response.data);
    });
  });

  return (
    <Container>
      <img src={product.main_image} alt={product.title}></img>
      <p>{product.title}</p>
    </Container>
  );
}

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-around;
  margin-right: 40px;
  img {
    width: 300px;
    height: auto;
  }
  p {
    font-size: 30px;
  }
`;
