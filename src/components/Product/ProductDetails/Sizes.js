import { useState } from "react";
import styled from "styled-components";
import colors from "../../Colors";

export default function Sizes(props) {
  const { sizes } = props;
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <Container>
      {sizes.map((size) => (
        <Size
          onClick={() =>
            selectedSize === size ? setSelectedSize("") : setSelectedSize(size)
          }
          selected={selectedSize === size}
        >
          {size}
        </Size>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;
`;

const Size = styled.div`
  height: 40px;
  width: 40px;
  color: ${(props) => (props.selected ? colors.white : colors.black)};
  background-color: ${(props) =>
    props.selected ? colors.mainBlack : colors.white};
  border: 1px solid ${colors.grayLight};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${colors.mainBlack};
    color: ${colors.white};
  }
`;
