import styled from "styled-components";
import colors from "../Colors";

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  padding-left: 20px;
  outline: none;
  background-color: ${colors.white};
  color: ${colors.gray};
`;

export const Button = styled.button`
  width: 390px;
  height: 60px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: ${colors.greenLight};
  color: ${colors.mainBlack};
  font-size: 16px;
  cursor: pointer;
`;
