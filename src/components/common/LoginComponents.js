import styled from "styled-components";
import colors from "../Colors";

export const LoginBox = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  img {
    width: 200px;
    height: auto;
  }
`;

export const FormsLogin = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: ${(props) => props.height};
`;

export const TextLogin = styled.p`
  font-size: 16px;
  color: #483c46;
  text-align: ${(props) => props.center && "center"};
`;
