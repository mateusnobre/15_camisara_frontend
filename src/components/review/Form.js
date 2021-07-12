import styled from "styled-components";
import { useState } from "react";
import { Input, Button } from "../common/Components";
import ReactStars from "react-rating-stars-component";
import colors from "../Colors";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Form() {
  const [title, setTitle] = useState("");
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState(0);
  const token = localStorage.getItem("token");
  const { productId } = useParams();
  const history = useHistory();

  const ratingStars = {
    size: 100,
    value: rating,
    isHalf: true,
    onChange: (newValue) => setRating(newValue),
  };

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = { title, opinion, rating };
    console.log(token, data, config);
    axios
      .post(`http://127.0.0.1:4000/evaluation/${productId}`, data, config)
      .then((response) => {
        alert("Avaliação postada com sucesso");
        history.push(`/product/${productId}`);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          return alert("Usuario Inválido! Faça login para continuar");
        }
        if (err.response.status === 403) {
          return alert("Sua sessão expirou! Faça login para continuar");
        } else {
          return alert("erro na publicação");
        }
      });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <BigText>Avalie agora o produto!</BigText>
      <ReactStars {...ratingStars}></ReactStars>
      <p>Título da avaliação</p>
      <Input
        placeholder="Exemplo: Gostei bastante"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <p>Escreva sua opinião</p>
      <OpinionInput
        placeholder="Use esse espaço para escrever sua opinião"
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
        bigBox={true}
      ></OpinionInput>
      <Button>Avaliar</Button>
    </Container>
  );
}

const Container = styled.form`
  /* height: 100%; */
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const BigText = styled.p`
  font-size: 25px;
`;

const OpinionInput = styled.textarea`
  font-family: "Raleway", sans-serif;
  padding-top: 10px;
  width: 400px;
  height: 150px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  padding-left: 20px;
  outline: none;
  background-color: ${colors.white};
  color: ${colors.gray};
`;
