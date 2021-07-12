import styled from "styled-components";
import colors from "../Colors";
import UserHistoric from "./UserHistoric";
import UserProfile from "./UserProfile";

export default function UserInfo() {
  return (
    <Container>
      <UserProfile />
      <UserHistoric />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
  height: 100vh;
  margin-top: 80px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  position: relative;
`;
