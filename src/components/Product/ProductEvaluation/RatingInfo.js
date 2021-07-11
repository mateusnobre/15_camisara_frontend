import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { Button } from "../../common/Components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RatingInfo({ evaluations }) {
  const { id } = useParams();
  const avgStart = {
    size: 40,
    value: parseInt(evaluations.avgRating),
    isHalf: true,
    edit: false,
  };
  return (
    <Container>
      {evaluations.numberEvaluations["total"] > 0 ? (
        <>
          <AvgInfo>
            <BigText>{evaluations.avgRating}</BigText>
            <ReactStars {...avgStart}></ReactStars>
            <SmallText>
              Baseada em {evaluations.numberEvaluations["total"]} avaliações
            </SmallText>
          </AvgInfo>
          <AllStarsInfo>
            {Object.keys(evaluations.numberEvaluations)
              .slice(0, -1)
              .map((key, i) => (
                <RatingStarInfo key={i}>
                  <SmallText>{evaluations.numberEvaluations[key]}</SmallText>
                  <ReactStars
                    {...{
                      size: 15,
                      value: parseInt(key),
                      isHalf: true,
                      edit: false,
                    }}
                  ></ReactStars>
                </RatingStarInfo>
              ))}
          </AllStarsInfo>
        </>
      ) : (
        <p>Seja o primeira a avaliar!</p>
      )}
      <Link to={`/review/${id}`}>
        <Button>Avalie Agora</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const BigText = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin-right: 10px;
`;

const SmallText = styled.p`
  font-size: 16px;
`;

const AvgInfo = styled.div`
  margin-right: 100px;
  height: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const RatingStarInfo = styled.div`
  display: flex; ;
`;

const AllStarsInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 80%;
`;
