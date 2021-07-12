import styled from "styled-components";
import RatingInfo from "./RatingInfo";
import UserEvaluation from "./UserEvaluation";
import colors from "../../Colors";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductEvaluation(props) {
  const { product } = props;
  const [evaluations, setEvaluations] = useState({
    usersEvaluations: [],
    numberEvaluations: [],
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/evaluation/${product.id}`)
      .then((response) => {
        setEvaluations(response.data);
      });
  }, [product]);

  return (
    <Container>
      <RatingInfo evaluations={evaluations}></RatingInfo>
      {evaluations.usersEvaluations.map((userEvaluation, i) => (
        <UserEvaluation evaluation={userEvaluation} key={i}></UserEvaluation>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  background-color: ${colors.white};
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${colors.grayLight};
  margin-top: 40px;
  margin-bottom: 40px;
  width: 90%;
`;
