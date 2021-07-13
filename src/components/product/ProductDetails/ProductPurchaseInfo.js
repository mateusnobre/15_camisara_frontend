import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../common/Components";
import Sizes from "./Sizes";
import Counter from "./Counter";
import OrderContext from '../../../OrderContext';
import { useContext } from 'react';

export default function ProductPurchaseInfo({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("M");

  const { order, setOrder } = useContext(OrderContext);
  function addToCart(){
      if (quantity > 0){
        order.push({ id: product.id,
                    title: product.title,
                    price: product.price,
                    size: size,
                    quantity: quantity});
        setOrder([...order]);
        alert(`${product.title} adicionada ao carrinho!`)
      }
      else {
        alert("Escolha pelo menos 1 unidade")
      }
  }
  function addToWishlist(){
    console.log(1);
  }
  return (
    <Container>
      <Text>{product.title}</Text>
      <Text>R$ {product.price}</Text>
      <Sizes size={size} setSize={setSize} sizes={product.sizes}></Sizes>
      <Purchase>
        <Counter quantity={quantity} setQuantity={setQuantity}></Counter>
        <Button onClick={addToCart} productPurchase={true}>Comprar</Button>
      </Purchase>
      <Button onClick={addToWishlist} >Adicionar na Lista de Desejos</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 48%;
  height: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Purchase = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
