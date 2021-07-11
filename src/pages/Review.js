import { useState } from "react";
import styled from "styled-components";
import colors from "../components/Colors";
import Topbar from "../components/Topbar";
import axios from "axios";
import Form from "../components/Review/Form";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/Review/ProductInfo";

export default function Review() {
  return (
    <Container>
      <Topbar></Topbar>
      <ProductInfo></ProductInfo>
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
