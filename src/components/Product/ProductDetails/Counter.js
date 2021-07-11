import styled from "styled-components";
import { Add, Remove } from "react-ionicons";
import colors from "../../Colors";

export default function Counter(props) {
  const { quantity, setQuantity } = props;

  return (
    <Container>
      <Add cssClasses="icon" onClick={() => setQuantity(quantity + 1)}></Add>
      {quantity}
      <Remove
        cssClasses="icon"
        onClick={() => quantity > 0 && setQuantity(quantity - 1)}
      ></Remove>
    </Container>
  );
}

const Container = styled.div`
  border: ${`2px solid ${colors.gray}`};
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
`;
