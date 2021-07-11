import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import ProductDetails from "../components/Product/ProductDetails/ProductDetails";
import ProductDescription from "../components/Product/ProductDescription/ProductDescription";
import ProductEvaluation from "../components/Product/ProductEvaluation/ProductEvaluation";
import { useState } from "react";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState({
    sizes: [],
    images: [],
    evaluations: { usersEvaluations: [], numberEvaluations: [] },
  });

  useState(() => {
    const request = axios.get("http://127.0.0.1:4000/product/6");
    request.then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
    request.catch((error) => {
      alert("Ocorreu um erro");
    });
  }, []);

  return (
    <Container>
      <Topbar></Topbar>
      <ProductDetails product={product}></ProductDetails>
      <ProductDescription product={product}></ProductDescription>
      <ProductEvaluation product={product}></ProductEvaluation>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.background};
`;
