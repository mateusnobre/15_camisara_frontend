import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import colors from "../../Colors";

export default function UserEvaluation({ evaluation }) {
  return (
    <Container>
      <BigText>{evaluation.title}</BigText>
      <Star>
        <ReactStars
          {...{ size: 30, value: evaluation.rating, isHalf: true, edit: false }}
        ></ReactStars>
      </Star>
      <p>{evaluation.opinion}</p>
      <UserInfo>
        {evaluation.username} em {evaluation.evaluated_at}
      </UserInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column wrap;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${colors.grayLight};
`;

const BigText = styled.p`
  display: block;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-right: 40px;
`;

const Star = styled.div`
  margin-bottom: 20px;
`;

const UserInfo = styled.p`
  color: ${colors.gray};
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`;
