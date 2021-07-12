import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function UserHistoric() {
  const [purchaseHistoric, setPurchaseHistoric] = useState([]);
  const [wishList, setWishList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("http://127.0.0.1:4000/purchases", config).then((response) => {
      setPurchaseHistoric(response.data);
    });
    axios.get("http://127.0.0.1:4000/wishlist", config).then((response) => {
      setWishList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Historico de compras</Title>
      {purchaseHistoric.map((purchase) => (
        <Box>
          <img src={purchase.main_image} alt={purchase.title} />
          <div>
            <p>Nome do produto : {purchase.title}</p>
            <p>Quantidade : {purchase.quantity}</p>
            <p>
              Valor pago no total: R${" "}
              {(purchase.quantity * purchase.price).toFixed(2)}
            </p>
          </div>
        </Box>
      ))}
      <Title>Lista de Desejos</Title>
      {wishList.map((product) => (
        <Box>
          <img src={product.main_image} alt={product.title} />
          <div>
            <p>Nome do produto : {product.title}</p>
            <p>Quantidade : {product.quantity}</p>
          </div>
        </Box>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 45%;
  margin-left: 30px;
  padding-bottom: 40px;
  padding-top: 40px;
  padding-left: 20;
`;

const Title = styled.p`
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
  img {
    width: 120px;
    max-height: 120px;
    margin-right: 20px;
  }
`;
