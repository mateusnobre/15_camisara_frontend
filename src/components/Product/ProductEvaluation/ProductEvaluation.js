import styled from "styled-components";
import RatingInfo from "./RatingInfo";
import UserEvaluation from "./UserEvaluation";
import colors from "../../Colors";

export default function ProductEvaluation({ product }) {
  const { evaluations } = product;

  return (
    <Container>
      <RatingInfo evaluations={evaluations}></RatingInfo>
      {evaluations.usersEvaluations.map((userEvaluation) => (
        <UserEvaluation evaluation={userEvaluation}></UserEvaluation>
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
