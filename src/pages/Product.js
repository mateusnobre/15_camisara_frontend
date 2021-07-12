import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import ProductDetails from "../components/product/ProductDetails/ProductDetails";
import ProductDescription from "../components/product/ProductDescription/ProductDescription";
import ProductEvaluation from "../components/product/ProductEvaluation/ProductEvaluation";
import ProductInvalid from "../components/product/ProductInvalid/ProductInvalid";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Product() {
  const [errorProduct, setErrorProduct] = useState(false);
  const [product, setProduct] = useState({
    sizes: [],
    images: [],
  });
  const { id } = useParams();

  useState(() => {
    axios
      .get(`http://127.0.0.1:4000/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setErrorProduct(true);
      });
  }, []);

  return (
    <Container>
      <Topbar></Topbar>
      {errorProduct ? (
        <ProductInvalid />
      ) : (
        <>
          <ProductDetails product={product}></ProductDetails>
          <ProductDescription product={product}></ProductDescription>
          <ProductEvaluation product={product}></ProductEvaluation>
        </>
      )}
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
